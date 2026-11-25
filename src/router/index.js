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
      path: '/new-hosting-form/:id?',
      name: 'new-hosting-form',
      component: () => import('../views/NewHostingFormView.vue'),
      meta: { layout: 'BlanckLayout' },
      redirect: (to) => ({
        name: 'structure',
        params: to.params,
      }),
      children: [
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
        {
          path: 'location',
          name: 'location',
          component: () => import('../components/NewHostingForm/LocationComponent.vue'),
        },
        {
          path: 'floor-plan',
          name: 'floor-plan',
          component: () => import('../components/NewHostingForm/FloorPlanComponent.vue'),
        },
        {
          path: 'photos',
          name: 'photos',
          component: () => import('../components/NewHostingForm/PhotosComponent.vue'),
        },
        {
          path: 'title',
          name: 'title',
          component: () => import('../components/NewHostingForm/TitleComponent.vue'),
        },
        {
          path: 'description',
          name: 'description',
          component: () => import('../components/NewHostingForm/DescriptionComponent.vue'),
        },
      ],
    },
    {
      path: '/admin-hosting',
      name: 'admin-hosting',
      component: () => import('../views/AdminHostingView.vue'),
      meta: { layout: 'DefaultLayout' },
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
