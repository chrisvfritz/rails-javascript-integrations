// VENDOR
import Vue from 'vue'
import VueResource from 'vue-resource'

// COMPONENTS
import TodoList from './components/todo-list.vue'

// PLUGINS
Vue.use(VueResource)
// Add Rails' CSRF token header to requests
Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

// GLOBAL COMPONENT
new Vue({
  el: 'body',
  components: {
    TodoList
  }
})
