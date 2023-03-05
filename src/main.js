import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './views/Home';
import Contact from './views/Contact';
import IDJourney from './views/IDJourney';
import Magazine from './views/Magazine';
import Channel from './views/Channel';
import NotFound from './views/NotFound';
import PublicationContent from "./views/PublicationContent";
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8000/api/';
//axios.defaults.baseURL = 'https://idevelop.club/Dashboard/api/';
axios.defaults.headers.common = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Requested-With": "XMLHttpRequest"
};
Vue.prototype.$http = axios

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
      path: '/channel',
      component: Channel,
      meta: {
        title: 'Join US'
      }
    },
    {
      path: '/idjourney',
      component: IDJourney,
      meta: {
        title: 'ID Journey'
      }
    },
    {
      path: '/details/:id',
      component: PublicationContent,
      props: true,
      meta: {
        title: 'Details'
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
