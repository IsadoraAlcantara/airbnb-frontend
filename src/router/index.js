import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/hosting/:id',
      name: 'hosting',
      component: () => import('../views/HostingView.vue'),
      props: true,
    },
    {
      path: '/new-hosting-form',
      name: 'new-hosting-form',
      component: () => import('../views/NewHostingFormView.vue'),
      children: [
        { path: '', redirect: '/new-hosting-form/strutcture' },
        {
          path: '/strutcture',
          name: 'strutcture',
          component: () => import('../components/NewHostingForm/CardStructureComponent.vue'),
        },
        {
          path: '/privacy-type',
          name: 'privacy-type',
          component: () => import('../components/NewHostingForm/CardPrivacyTypeComponent.vue'),
        },
      ],
    },
  ],
})

export default router
