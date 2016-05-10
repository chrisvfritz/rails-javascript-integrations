<template>
  <div v-if="initialFetchComplete">
    <div v-if="error">
      <strong>Error!</strong> {{ error }}
    </div>
    <div class="form-group">
      <bs-input
        placeholder="Add new todo"
        v-model="newTodoText"
        @keyup.enter="addNewTodo"
      ></bs-input>
    </div>
    <ul v-if="todos.length > 0">
      <li v-for="todo in todos">
        {{ todo.text }}
        <bs-button
          type="danger"
          size="xs"
          @click="removeTodo(todo.id)"
        >X</bs-button>
      </li>
    </ul>
  </div>
  <p v-else>Loading...</p>
</template>

<script>
  import BsInput from './bs-input'
  import BsButton from './bs-button'

  export default {
    components: {
      BsInput, BsButton
    },

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
        this.$http.get('/api/todos.json')
        .then(response => {
          this.error = null
          this.todos = response.data
          this.initialFetchComplete = true
        }, () => {
          this.error = 'Could not fetch todos from server!'
          this.initialFetchComplete = true
        })
      },

      addNewTodo () {
        const formattedTodoText = this.newTodoText.trim()
        if (formattedTodoText.length === 0) return
        this.$http.post('/api/todos.json', {
          todo: {
            text: formattedTodoText
          }
        })
        .then(response => {
          this.error = null
          this.newTodoText = ''
          this.todos.push(response.data)
        }, () => {
          this.error = 'Could not communicate with server!'
        })
      },

      removeTodo (id) {
        this.$http.delete('/api/todos/' + id + '.json')
        .then(response => {
          this.error = null
          this.todos = this.todos.filter(todo => todo.id !== id)
        }, () => {
          this.error = 'Could not communicate with server!'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  li {
    line-height: 1.7;

    button { display: none; }

    &:hover button {
      display: inline-block;
    }
  }
</style>
