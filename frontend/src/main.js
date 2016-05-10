// VENDOR
import Vue from 'vue'
import VueResource from 'vue-resource'

// COMPONENTS
import App from './app.vue'

// PLUGINS
Vue.use(VueResource)

// GLOBAL COMPONENT
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    App
  }
})
