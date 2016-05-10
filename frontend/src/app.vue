<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-sm-6">
        <h1>Todos</h1>
        <todo-list></todo-list>
      </div>
      <div class="col-sm-6">
        <img src="assets/logo.png" alt="Vue logo">
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from './components/todo-list'

export default {
  components: {
    TodoList
  }
}
</script>

<style lang="scss">
  // -------------------
  // BOOTSTRAP VARIABLES
  // http://getbootstrap.com/customize/#less-variables
  // -------------------

  // ...

  // ---------
  // BOOTSTRAP
  // ---------

  $icon-font-path: '~bootstrap-sass/assets/fonts/bootstrap/';
  @import '~bootstrap-sass/assets/stylesheets/bootstrap';

</style>
