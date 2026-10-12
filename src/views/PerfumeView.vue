<script setup>
import { computed, ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { perfumes, phone, phoneHref } from '../data/perfumes';
import { noteImage, noteLabel, perfumeDescription, perfumeDetails, t, translate } from '../i18n';

const route = useRoute();
const router = useRouter();
const relatedScroller = ref(null);
const touchStartX = ref(0);

const perfume = computed(() => perfumes.find((item) => item.slug === route.params.slug) || perfumes[0]);
const perfumeIndex = computed(() => perfumes.findIndex((item) => item.slug === perfume.value.slug));
const previousPerfume = computed(() => perfumes[(perfumeIndex.value - 1 + perfumes.length) % perfumes.length]);
const nextPerfume = computed(() => perfumes[(perfumeIndex.value + 1) % perfumes.length]);
const related = computed(() => perfumes.filter((item) => item.slug !== perfume.value.slug));
const heroImage = computed(() => perfume.value.heroImage || perfume.value.image);

const ratingText = computed(() => {
  if (!perfume.value.rating) return t('newOnFragrantica');
  return `${perfume.value.rating} / 5${perfume.value.votes ? ` · ${perfume.value.votes} ${t('votes')}` : ''}`;
});

const noteRows = computed(() => {
  const item = perfume.value;
  return [
    { id: 'top', eyebrow: t('topNotes'), title: t('top'), notes: item.notes.top },
    { id: 'middle', eyebrow: t('middleNotes'), title: t('middle'), notes: item.notes.middle },
    { id: 'base', eyebrow: t('baseNotes'), title: t('base'), notes: item.notes.base },
  ];
});

const goToPerfume = (target) => {
  router.push(`/perfume/${target.slug}`);
};

const onTouchStart = (event) => {
  if (event.target.closest('.related-scroll, .notes-pyramid, .lightbox')) return;
  touchStartX.value = event.changedTouches[0].clientX;
};

const onTouchEnd = (event) => {
  if (event.target.closest('.related-scroll, .notes-pyramid, .lightbox')) return;
  const delta = event.changedTouches[0].clientX - touchStartX.value;
  if (Math.abs(delta) < 70) return;
  goToPerfume(delta < 0 ? nextPerfume.value : previousPerfume.value);
};

const scrollRelated = (direction) => {
  relatedScroller.value?.scrollBy({
    left: direction * Math.min(520, window.innerWidth * 0.82),
    behavior: 'smooth',
  });
};
</script>

<template>
  <main class="room-page perfume-page" @touchstart.passive="onTouchStart" @touchend.passive="onTouchEnd">
    <section class="room-hero perfume-detail-hero">
      <div class="room-hero-visual" :class="{ 'has-scene': perfume.heroImage }">
        <img :src="heroImage" :alt="perfume.title" :class="{ 'perfume-hero-scene-image': perfume.heroImage }" />
      </div>
      <button class="room-nav-arrow room-nav-prev" type="button" @click="goToPerfume(previousPerfume)" :aria-label="`${t('previousPerfume')}: ${previousPerfume.title}`">
        <span>‹</span>
      </button>
      <button class="room-nav-arrow room-nav-next" type="button" @click="goToPerfume(nextPerfume)" :aria-label="`${t('nextPerfume')}: ${nextPerfume.title}`">
        <span>›</span>
      </button>
      <div class="room-hero-copy">
        <RouterLink class="back-link" to="/">← {{ t('allPerfumes') }}</RouterLink>
        <p class="quiet-line">{{ translate(perfume.collection) }} · {{ perfume.year }}</p>
        <h1>{{ perfume.title }}</h1>
        <p>{{ perfumeDescription(perfume) }}</p>
        <a class="gold-button booking-button" :href="phoneHref">{{ t('checkAvailability') }}: {{ phone }}</a>
      </div>
    </section>

    <section v-reveal class="section room-detail">
      <div class="room-description">
        <div class="perfume-full-description">
          <p class="perfume-description-intro">{{ perfumeDetails(perfume).intro }}</p>
          <blockquote v-if="perfumeDetails(perfume).quote" class="perfume-description-quote">
            {{ perfumeDetails(perfume).quote }}
          </blockquote>
          <p
            v-for="paragraph in perfumeDetails(perfume).paragraphs"
            :key="paragraph"
            class="perfume-description-paragraph"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
      <dl class="feature-list">
        <div>
          <dt>{{ t('collection') }}</dt>
          <dd>{{ translate(perfume.collection) }}</dd>
        </div>
        <div>
          <dt>{{ t('year') }}</dt>
          <dd>{{ perfume.year }}</dd>
        </div>
        <div>
          <dt>{{ t('gender') }}</dt>
          <dd>{{ translate(perfume.gender) }}</dd>
        </div>
        <div>
          <dt>{{ t('perfumer') }}</dt>
          <dd>{{ perfume.perfumer }}</dd>
        </div>
        <div>
          <dt>{{ t('rating') }}</dt>
          <dd>{{ ratingText }}</dd>
        </div>
      </dl>
    </section>

    <section v-reveal class="section room-gallery-section notes-section">
      <div class="section-head">
        <div>
          <p class="quiet-line">{{ t('fragrancePyramid') }}</p>
          <h2>{{ t('pyramidTitle') }} {{ perfume.title }}</h2>
        </div>
        <a class="gold-button" :href="perfume.source" target="_blank" rel="noreferrer">{{ t('fragranticaSource') }}</a>
      </div>
      <div class="notes-pyramid">
        <article v-for="row in noteRows" :key="row.id" class="note-row" :class="`note-row-${row.id}`">
          <div class="note-row-title">
            <span></span>
            <p>{{ row.eyebrow }}</p>
            <span></span>
          </div>
          <div class="note-items">
            <div v-for="note in row.notes" :key="note" class="note-item">
              <div class="note-thumb">
                <img :src="noteImage(note)" :alt="noteLabel(note)" loading="lazy" />
              </div>
              <strong>{{ noteLabel(note) }}</strong>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section v-reveal class="section related-section">
      <div class="section-head">
        <div>
          <p class="quiet-line">{{ t('morePerfumes') }}</p>
          <h2>{{ t('seeOtherBottles') }}</h2>
        </div>
        <div class="related-actions" :aria-label="t('relatedNav')">
          <button type="button" @click="scrollRelated(-1)" :aria-label="t('back')">‹</button>
          <button type="button" @click="scrollRelated(1)" :aria-label="t('forward')">›</button>
        </div>
      </div>
      <div ref="relatedScroller" class="related-grid related-scroll">
        <RouterLink v-for="item in related" :key="item.id" :to="`/perfume/${item.slug}`">
          <strong v-if="item.year >= 2026" class="related-badge">{{ t('newRelease') }}</strong>
          <div class="related-image-stage">
            <img :src="item.image" :alt="item.title" loading="lazy" />
          </div>
          <span>{{ item.title }}</span>
          <small>{{ translate(item.family) }}</small>
        </RouterLink>
      </div>
    </section>

  </main>
</template>
