import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store.js'







const requireAuthenticated = (to, from, next) => {
  store.dispatch('auth/initialize')
    .then(() => {
      if (!store.getters['auth/isAuthenticated']) {
        next('/login');
      } else {
        next();
      }
    });
};

const requireUnauthenticated = (to, from, next) => {
  store.dispatch('auth/initialize')
    .then(() => {
      if (store.getters['auth/isAuthenticated']) {
        next('/home');
      } else {
        next();
      }
    });
};

const redirectLogout = (to, from, next) => {
  store.dispatch('auth/logout')
    .then(() => next('/login'));
};


// views

import profile from '@/views/profile.vue'
import feeds from '@/views/feeds.vue'
import login from '@/views/login.vue'
import index from '@/views/index.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/',
      name: 'index',
      component: index,
     
     
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      beforeEnter: requireAuthenticated,

     
    },


     {
      path: '/feeds',
      name: 'feeds',
      component: feeds,
      beforeEnter: requireAuthenticated,
    },
      {
      path: '/login',
      name: 'login',
      component: login
    },
   
    //  {
    //   path: '/feeds',
    //   name: 'feeds',
    //   component: feeds
    // },
   
   
  ]
})
