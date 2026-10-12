<script setup>
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';
import {
  collections,
  contactLinks,
  featuredAccords,
  informationLinks,
  perfumes,
} from '../data/perfumes';
import { t, translate } from '../i18n';

const activeCollection = ref('Все');
const accordScroller = ref(null);

const filteredPerfumes = computed(() => {
  if (activeCollection.value === 'Все') return perfumes;
  return perfumes.filter((perfume) => perfume.collection === activeCollection.value);
});

const heroPerfume = computed(() => perfumes.find((perfume) => perfume.slug === 'floruits') || perfumes[0]);
const newestPerfumes = computed(() => perfumes.filter((perfume) => perfume.year >= 2026).slice(0, 4));
const newestCount = computed(() => perfumes.filter((perfume) => perfume.year >= 2026).length);

const scrollAccords = (direction) => {
  accordScroller.value?.scrollBy({
    left: direction * Math.min(520, window.innerWidth * 0.86),
    behavior: 'smooth',
  });
};
</script>

<template>
  <main>
    <section class="hero perfume-hero home-hero">
      <div class="hero-shade"></div>
      <div class="hero-content home-hero-copy">
        <p class="quiet-line">{{ t('heroLine') }}</p>
        <h1>{{ t('heroTitle') }}</h1>
        <p class="hero-copy">{{ t('heroCopy') }}</p>
        <a class="gold-button booking-button hero-cta" href="#perfumes">
          <span>{{ t('viewPerfumes') }}</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div class="hero-display">
        <div class="hero-glow"></div>
        <img class="hero-scene-image" src="/images/perfumes/floruits-hero-scene.png" :alt="heroPerfume.title" />
      </div>
    </section>

    <section v-reveal class="intro section">
      <div>
        <p class="quiet-line">{{ t('aboutBrand') }}</p>
        <h2>{{ t('aboutTitle') }}</h2>
      </div>
      <p>{{ t('aboutText') }}</p>
    </section>

    <section id="accords" v-reveal class="section included-section">
      <div class="section-head">
        <div>
          <p class="quiet-line">{{ t('collectionMood') }}</p>
          <h2>{{ t('accordTitle') }}</h2>
        </div>
        <div class="related-actions accord-actions" :aria-label="t('scrollAccords')">
          <button type="button" @click="scrollAccords(-1)" :aria-label="t('back')">‹</button>
          <button type="button" @click="scrollAccords(1)" :aria-label="t('forward')">›</button>
        </div>
      </div>
      <div ref="accordScroller" class="included-grid accord-scroll">
        <article
          v-for="(item, index) in featuredAccords"
          :key="item.title"
          v-reveal
          class="included-card"
          :style="{ '--i': Math.min(index, 7) }"
        >
          <img :src="item.image" :alt="item.title" loading="lazy" />
          <div>
            <h3>{{ translate(item.title) }}</h3>
            <p>{{ translate(item.text) }}</p>
          </div>
        </article>
      </div>
    </section>

    <section id="perfumes" v-reveal class="section rooms-section">
      <div class="section-head">
        <div>
          <p class="quiet-line">{{ t('catalog') }} · {{ perfumes.length }} {{ t('perfumeCount') }}</p>
          <h2>{{ t('collectionTitle') }}</h2>
        </div>
        <div class="filters" :aria-label="t('filterCollections')">
          <button
            v-for="collection in collections"
            :key="collection"
            type="button"
            :class="{ active: activeCollection === collection }"
            @click="activeCollection = collection"
          >
            {{ translate(collection) }}
          </button>
        </div>
      </div>

      <Transition name="rooms-fade" mode="out-in">
        <div :key="activeCollection" class="room-grid perfume-grid">
          <article
            v-for="(perfume, index) in filteredPerfumes"
            :key="perfume.id"
            v-reveal
            class="room-card perfume-card"
            :style="{ '--i': Math.min(index, 8) }"
          >
            <RouterLink :to="`/perfume/${perfume.slug}`" class="room-image perfume-image">
              <img :src="perfume.image" :alt="perfume.title" />
            </RouterLink>
            <div class="room-info">
              <p>{{ translate(perfume.collection) }} · {{ perfume.year }}</p>
              <h3>{{ perfume.title }}</h3>
              <span>{{ translate(perfume.family) }} · {{ translate(perfume.gender) }}</span>
              <strong>{{ perfume.rating ? `${perfume.rating} / 5` : t('newRelease') }}</strong>
              <div class="accord-list" :aria-label="t('mainAccords')">
                <span v-for="accord in perfume.accords.slice(0, 4)" :key="accord">{{ translate(accord) }}</span>
              </div>
              <RouterLink class="text-link" :to="`/perfume/${perfume.slug}`">{{ t('more') }}</RouterLink>
            </div>
          </article>
        </div>
      </Transition>
    </section>

    <section v-reveal class="section product-strip">
      <div class="product-strip-copy">
        <p class="quiet-line">{{ t('showcase') }}</p>
        <h2>{{ newestCount }} {{ t('newReleases') }}</h2>
        <p>{{ t('neoCopy') }}</p>
        <a class="text-link product-strip-link" href="#perfumes">{{ t('viewPerfumes') }}</a>
      </div>
      <div class="product-release-row" :aria-label="`${newestCount} ${t('newReleases')}`">
        <RouterLink
          v-for="(perfume, index) in newestPerfumes"
          :key="perfume.id"
          class="release-bottle"
          :to="`/perfume/${perfume.slug}`"
          :style="{ '--i': index }"
        >
          <img :src="perfume.image" :alt="perfume.title" loading="lazy" />
          <span>{{ perfume.title }}</span>
        </RouterLink>
      </div>
    </section>

    <section id="contacts" v-reveal class="section contacts">
      <div class="contacts-inner">
        <h2>{{ t('followTitle') }}</h2>
        <span class="contact-line" aria-hidden="true"></span>
        <div class="social-links" aria-label="Soleil de Grâce social links">
          <a
            v-for="link in contactLinks"
            :key="link.id"
            :class="['social-link', `social-link-${link.id}`]"
            :href="link.href"
            target="_blank"
            rel="noreferrer"
            :aria-label="link.label"
            :title="link.label"
          >
            <img :src="link.icon" :alt="link.label" loading="lazy" />
          </a>
        </div>
        <nav class="information-links" :aria-label="t('informationTitle')">
          <div class="information-head">
            <span>{{ t('informationTitle') }}</span>
            <i aria-hidden="true"></i>
          </div>
          <RouterLink
            v-for="link in informationLinks"
            :key="link.id"
            :to="link.href"
          >
            <span :class="['information-icon', `information-icon-${link.id}`]" aria-hidden="true"></span>
            <span>{{ translate(link.label) }}</span>
          </RouterLink>
        </nav>
      </div>
    </section>

  </main>
</template>
