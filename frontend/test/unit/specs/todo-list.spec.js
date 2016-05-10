import Vue from 'vue'
import VueResource from 'vue-resource'
import TodoList from 'src/components/todo-list'

Vue.use(VueResource)

describe('todo-list.vue', () => {
  it('should render a loading indicator initially', () => {
    const vm = new Vue({
      template: '<div><todo-list></todo-list></div>',
      components: { TodoList }
    }).$mount()
    expect(vm.$el.querySelector('p').textContent).to.contain('Loading...')
  })
})
