<template>
  <input class="form-control" :type="type">
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text'
      }
    }
  }
</script>
