import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

import Home from './views/Home';
import Contact from './views/Contact';
import Magazine from './views/Magazine';
import CV from './views/CV';
import NotFound from './views/NotFound';

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/contact',
      component: Contact,
      meta: {
        title: 'Contact'
      }
    },
    {
      path: '/magazine',
      component: Magazine,
      meta: {
        title: 'Join US'
      }
    },
    {
      path: '/our-cv',
      component: CV,
      meta: {
        title: 'Join US'
      }
    },
    {
      path: '/*',
      component: NotFound,
      meta: {
        title: 'Error 404'
      }
    }
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
