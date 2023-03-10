import { createRouter, createWebHistory, useRoute } from 'vue-router'
import Home from '../views/Home.vue'
import data from '../data.json'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/destination/:id',
    name: 'destination.show',
    component: () => import('../views/DestinationShow.vue'),
    props: () => ({ id: parseInt(useRoute().params.id) }),
    beforeEnter: (to) => {
      const exists = data.destinations.find(
        (destination) => destination.id === parseInt(to.params.id)
      )
      if (!exists) {
        return { name: 'NotFound' }
      }
    },
    children: [
      {
        path: '/experience/:id/:slug',
        name: 'experience.show',
        component: () => import('../views/ExperienceShow.vue'),
        props: () => ({ id: parseInt(useRoute().params.id), expSlug: useRoute().params.slug })
      }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        if (to.name == 'experience.show') {
          setTimeout(() => resolve({ el: "#exp", behavior: 'smooth' }), 300)
        } else {
          setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 300)
        }
      })
    )
  }
})

export default router
