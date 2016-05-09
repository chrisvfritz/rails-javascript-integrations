$(function () {
  $('.js-todo-list').each(function (i, todoListRoot) {
    // -----
    // STATE
    // -----

    var state = {
      newTodoText: '',
      todos: [],
      error: null
    }

    function updateState (newState) {
      state = $.extend(state, newState)
      render()
    }

    // ----------
    // INITIALIZE
    // ----------

    var $todoListRoot = $(todoListRoot)
    $todoListRoot.html('Loading...')

    var classPrefix = 'js-tdl-'

    var errorAlertClass       = classPrefix + 'error-alert'
    var newTodoInputClass     = classPrefix + 'new-todo-input'
    var todoListClass         = classPrefix + 'todo-list'
    var todoListItemClass     = classPrefix + 'todo-list-item'
    var removeTodoButtonClass = classPrefix + 'remove-todo-button'

    fetchTodos()

    // ------
    // RENDER
    // ------

    function render () {
      // Error alert
      var $errorAlert = $todoListRoot.find('.' + errorAlertClass)
      var errorContents = (
        state.error ? '<strong>ERROR!</strong> ' + state.error : ''
      )
      if ($errorAlert.length === 0) {
        $todoListRoot.append(
          '<div class="' + errorAlertClass + '">' +
            errorContents +
          '</div>'
        )
      } else {
        $errorAlert.html(errorContents)
      }

      // New todo input
      var $newTodoInput = $todoListRoot.find('.' + newTodoInputClass)
      if ($newTodoInput.length === 0) {
        $todoListRoot.append('<input class="' + newTodoInputClass + '">')
      } else {
        if ($newTodoInput.val().trim() !== state.newTodoText) {
          $newTodoInput.val(state.newTodoText)
        }
      }

      // Todo list
      var $todoList = $todoListRoot.find('.' + todoListClass)
      var todoListItems = (
        state.todos.map(function (todo) {
          return (
            '<li class="' + todoListItemClass + '" data-id="' + todo.id + '">' +
              todo.text +
              ' <button class="' + removeTodoButtonClass + '">X</button>' +
            '</li>'
          )
        }).join('')
      )
      if ($todoList.length === 0) {
        $todoListRoot.append(
          '<ul class="' + todoListClass + '">' +
            todoListItems +
          '</ul>'
        )
      } else {
        $todoList.html(todoListItems)
      }
    }

    // -------
    // ACTIONS
    // -------

    function fetchTodos () {
      $.get('/todos.json')
      .done(function (todos) {
        $todoListRoot.html('')
        updateState({
          error: null,
          todos: todos
        })
      })
      .fail(function (error) {
        updateState({
          error: 'Could not fetch todos from server!'
        })
      })
    }

    function updateNewTodoText (newText) {
      updateState({ newTodoText: newText })
    }

    function addNewTodo () {
      $.post('/todos.json', {
        todo: {
          text: state.newTodoText
        }
      })
      .done(function (todo) {
        updateState({
          error: null,
          newTodoText: '',
          todos: state.todos.concat(todo)
        })
      })
      .fail(function (error) {
        updateState({
          error: 'Could not communicate with server!'
        })
      })
    }

    function removeTodo (id) {
      $.ajax({
        type: 'DELETE',
        url: '/todos/' + id
      })
      .done(function (response) {
        updateState({
          error: null,
          todos: state.todos.filter(function (todo) {
            return todo.id !== id
          })
        })
      })
      .fail(function (error) {
        updateState({
          error: 'Could not communicate with server!'
        })
      })
    }

    // ------
    // EVENTS
    // ------

    $todoListRoot.on('input', '.' + newTodoInputClass, function (event) {
      var todoText = event.target.value.trim()
      if (todoText.length > 0) {
        updateNewTodoText(todoText)
      }
    })

    $todoListRoot.on('keyup', '.' + newTodoInputClass, function (event) {
      if (event.which === 13 && state.newTodoText.trim().length !== 0) {
        addNewTodo()
      }
    })

    $todoListRoot.on('click', '.' + removeTodoButtonClass, function (event) {
      var todoListItem = $(this).closest('.' + todoListItemClass)
      var itemId = parseInt(todoListItem.data('id'))
      removeTodo(itemId)
    })
  })
})
