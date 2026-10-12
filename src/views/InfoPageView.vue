<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { informationPages } from '../data/informationPages';
import { currentLanguage, t } from '../i18n';

const route = useRoute();

const page = computed(() => informationPages[route.meta.page] || informationPages['about-us']);
const read = (value) => value?.[currentLanguage.value] || value?.en || value?.ru || '';
</script>

<template>
  <main class="info-page">
    <section class="info-hero">
      <RouterLink class="back-link info-back-link" to="/#contacts">&larr; {{ t('contacts') }}</RouterLink>
      <p class="quiet-line">{{ read(page.eyebrow) }}</p>
      <h1>{{ read(page.title) }}</h1>
      <p>{{ read(page.lead) }}</p>
    </section>

    <section class="info-content section">
      <article v-for="section in page.sections" :key="read(section.title)" v-reveal class="info-section">
        <div>
          <h2>{{ read(section.title) }}</h2>
        </div>
        <div class="info-section-body">
          <p v-for="paragraph in section.paragraphs" :key="read(paragraph)">
            {{ read(paragraph) }}
          </p>
          <ul v-if="section.items?.length" class="info-sales-list">
            <li v-for="item in section.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </article>
    </section>
  </main>
</template>
