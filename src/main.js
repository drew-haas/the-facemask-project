import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGtm from 'vue-gtm'

Vue.use(VueGtm, {
  id: 'GTM-KZGN2B4',
  enabled: true,
  debug: true,
  loadScript: true,
  vueRouter: router,
  ignoredViews: ['homepage']
})

Vue.config.productionTip = false

Vue.component('loading', () => import('@/components/Loading'))
Vue.component('vue-image', () => import('@/components/VueImage'))
Vue.component('vue-background-image', () => import('@/components/VueBackgroundImage'))
Vue.component('arrow-icon', () => import('@/components/ArrowIcon'))

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
