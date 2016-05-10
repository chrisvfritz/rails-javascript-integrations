<template>
  <div v-if="initialFetchComplete">
    <div v-if="error">
      <strong>Error!</strong> {{ error }}
    </div>
    <input v-model="newTodoText" @keyup.enter="addNewTodo">
    <ul v-if="todos.length > 0">
      <li v-for="todo in todos">
        {{ todo.text }}
        <button @click="removeTodo(todo.id)">X</button>
      </li>
    </ul>
  </div>
  <p v-else>Loading...</p>
</template>

<script>
  export default {
    data () {
      return {
        initialFetchComplete: false,
        newTodoText: '',
        todos: [],
        error: null
      }
    },

    created () {
      this.fetchTodos()
    },

    methods: {

      fetchTodos () {
        this.$http.get('/todos.json')
        .then(response => {
          this.error = null
          this.todos = response.data
          this.initialFetchComplete = true
        }, error => {
          this.error = 'Could not fetch todos from server!'
          this.initialFetchComplete = true
        })
      },

      addNewTodo () {
        const formattedTodoText = this.newTodoText.trim()
        if (formattedTodoText.length === 0) return
        this.$http.post('/todos.json', {
          todo: {
            text: formattedTodoText
          }
        })
        .then(response => {
          this.error = null
          this.newTodoText = ''
          this.todos.push(response.data)
        }, error => {
          this.error = 'Could not communicate with server!'
        })
      },

      removeTodo (id) {
        this.$http.delete('/todos/' + id + '.json')
        .then(response => {
          this.error = null
          this.todos = this.todos.filter(todo => todo.id !== id)
        }, error => {
          this.error = 'Could not communicate with server!'
        })
      }
    }
  }
</script>
