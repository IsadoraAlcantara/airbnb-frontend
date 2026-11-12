import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { layout: 'DefaultLayout' },
    },
    {
      path: '/hosting/:id',
      name: 'hosting',
      component: () => import('../views/HostingView.vue'),
      props: true,
      meta: { layout: 'DefaultLayout' },
    },
    {
      path: '/new-hosting-form',
      name: 'new-hosting-form',
      component: () => import('../views/NewHostingFormView.vue'),
      meta: { layout: 'BlanckLayout' },
      children: [
        { path: '', redirect: { name: 'structure' } },
        {
          path: 'structure',
          name: 'structure',
          component: () => import('../components/NewHostingForm/StructureComponent.vue'),
        },
        {
          path: 'privacy-type',
          name: 'privacy-type',
          component: () => import('../components/NewHostingForm/PrivacyTypeComponent.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { layout: 'BlanckLayout' },
    },
        {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../views/SignUpView.vue'),
      meta: { layout: 'BlanckLayout' },
    },
  ],
})

export default router
