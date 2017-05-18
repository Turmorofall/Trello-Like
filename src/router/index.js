import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Important from '@/components/Important'
import Masquees from '@/components/Masquees'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/critiques',
      name: 'Important',
      component: Important
    },
    {
      path: '/masquees',
      name: 'Masquees',
      component: Masquees
    },
  ]
})


