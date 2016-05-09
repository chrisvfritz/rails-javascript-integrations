Vue.component('todo-list', {
  // --------
  // TEMPLATE
  // --------

  template: '\
    <div v-if="initialFetchComplete">\
      <div v-if="error">Error! {{ error }}</div>\
      <input v-model="newTodoText" @keyup.enter="addNewTodo">\
      <ul v-if="todos.length > 0">\
        <li v-for="todo in todos">\
          {{ todo.text }}\
          <button @click="removeTodo(todo.id)">X</button>\
        </li>\
      </ul>\
    </div>\
    <p v-else>Loading...</p>\
  ',

  // -------------
  // INITIAL STATE
  // -------------

  data: function () {
    return {
      initialFetchComplete: false,
      newTodoText: '',
      todos: [],
      error: null
    }
  },

  // ---------
  // LIFECYCLE
  // ---------

  created: function () {
    this.fetchTodos()
  },

  // -------
  // ACTIONS
  // -------

  methods: {

    fetchTodos: function () {
      var vm = this
      $.get('/todos.json')
      .done(function (todos) {
        vm.error = null
        vm.todos = todos
      })
      .fail(function (error) {
        vm.error = 'Could not fetch todos from server!'
      })
      .always(function () {
        vm.initialFetchComplete = true
      })
    },

    addNewTodo: function () {
      var formattedTodoText = this.newTodoText.trim()
      if (formattedTodoText.length === 0) return
      var vm = this
      $.post('/todos.json', {
        todo: {
          text: formattedTodoText
        }
      })
      .done(function (todo) {
        vm.error = null
        vm.newTodoText = ''
        vm.todos.push(todo)
      })
      .fail(function (error) {
        vm.error = 'Could not communicate with server!'
      })
    },

    removeTodo: function (id) {
      var vm = this
      $.ajax({
        type: 'DELETE',
        url: '/todos/' + id + '.json'
      })
      .done(function (response) {
        vm.error = null
        vm.todos = vm.todos.filter(function (todo) {
          return todo.id !== id
        })
      })
      .fail(function (error) {
        vm.error = 'Could not communicate with server!'
      })
    }

  }
})
