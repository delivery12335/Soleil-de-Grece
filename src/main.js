import { createApp } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import App from './App.vue';
import HomeView from './views/HomeView.vue';
import InfoPageView from './views/InfoPageView.vue';
import PerfumeView from './views/PerfumeView.vue';
import './styles.css';

const router = createRouter({
  history: import.meta.env.MODE === 'github-pages'
    ? createWebHashHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 0 };
    }

    return { top: 0 };
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about-us', name: 'about-us', component: InfoPageView, meta: { page: 'about-us' } },
    { path: '/perfume/:slug', name: 'perfume', component: PerfumeView },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
});

const revealDirective = {
  mounted(element) {
    element.classList.add('reveal');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.classList.add('is-visible');
      return;
    }

    const bounds = element.getBoundingClientRect();
    if (bounds.top < window.innerHeight * 1.12) {
      element.classList.add('is-visible');
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          return;
        }

        element.classList.remove('is-visible');
      },
      { threshold: 0.02, rootMargin: '0px 0px 24% 0px' },
    );

    observer.observe(element);
  },
};

createApp(App).use(router).directive('reveal', revealDirective).mount('#app');
