import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/Contact',
    name: 'Contact',
    label: 'Contact',
    component: () => import('../views/Contact.vue'),
    link: true
  },
  {
    path: '/',
    name: '/',
    label: 'Overview',
    component: () => import('../views/Overview.vue'),
    link: true
  },
  {
    path: '/GettingStarted',
    name: 'GettingStarted',
    label: 'Getting Started',
    component: () => import('../views/GettingStarted.vue'),
    link: true
  },
  {
    path: '/BehindTheScenes',
    name: 'BehindTheScenes',
    label: 'Behind The Scenes',
    component: () => import('../views/BehindTheScenes.vue'),
    link: true
  },
  {
    path: '/AddAnnotation',
    name: 'AddAnnotation',
    label: 'Add Annotation',
    component: () => import('../views/AddAnnotation.vue'),
    link: true
  },
  {
    path: '/AddWText',
    name: 'AddWText',
    label: 'Add With Text',
    component: () => import('../views/AddAnnotationWText.vue'),
    link: true
  },
  {
    path: '/ChangeScale',
    name: 'ChangeScale',
    label: 'Change Scale',
    component: () => import('../views/ChangeScale.vue'),
    link: true
  },
  {
    path: '/ChangeStyle',
    name: 'ChangeStyle',
    label: 'Change Style',
    component: () => import('../views/ChangeStyle.vue'),
    link: true
  },
  {
    path: '/Mirror',
    name: 'Mirror',
    label: 'Mirror',
    component: () => import('../views/Mirror.vue'),
    link: true
  },
  {
    path: '/AutoAlign',
    name: 'AutoAlign',
    label: 'Auto Align',
    component: () => import('../views/AutoAlign.vue'),
    link: true
  },
  {
    path: '/Move',
    name: 'Move',
    label: 'Move',
    component: () => import('../views/Move.vue'),
    link: true
  },
  {
    path: '/NextSteps',
    name: 'NextSteps',
    label: 'Next Steps',
    component: () => import('../views/NextSteps.vue'),
    link: true
  },
  {
    path: '/Resources',
    name: 'Resources',
    label: 'Resources',
    component: () => import('../views/Resources.vue'),
    link: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
