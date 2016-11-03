// VENDOR
import Vue from 'vue'
import Axios from 'axios'

// COMPONENTS
import TodoList from './components/todo-list.vue'

// Add Rails' CSRF token header to requests
Axios.defaults.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

// GLOBAL COMPONENT
new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement(TodoList)
  }
})
