<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { phone, phoneHref } from './data/perfumes';
import { currentLanguage, setLanguage, t } from './i18n';

const menuOpen = ref(false);
</script>

<template>
  <header class="site-header">
    <RouterLink class="brand" to="/" @click="menuOpen = false">
      <span>Soleil de</span>
      <strong>Grâce</strong>
    </RouterLink>

    <button class="menu-button" type="button" :aria-label="t('openMenu')" @click="menuOpen = !menuOpen">
      <span></span>
      <span></span>
    </button>

    <nav :class="['main-nav', { open: menuOpen }]">
      <RouterLink to="/#perfumes" @click="menuOpen = false">{{ t('aromas') }}</RouterLink>
      <RouterLink to="/#accords" @click="menuOpen = false">{{ t('accords') }}</RouterLink>
      <RouterLink to="/#contacts" @click="menuOpen = false">{{ t('contacts') }}</RouterLink>
      <div class="language-switch" aria-label="Language">
        <button type="button" :class="{ active: currentLanguage === 'ru' }" @click="setLanguage('ru')">RU</button>
        <button type="button" :class="{ active: currentLanguage === 'en' }" @click="setLanguage('en')">EN</button>
      </div>
      <a class="nav-phone" :href="phoneHref">{{ phone }}</a>
    </nav>
  </header>

  <RouterView v-slot="{ Component, route }">
    <Transition name="page" mode="out-in">
      <component :is="Component" :key="route.fullPath" />
    </Transition>
  </RouterView>
</template>
