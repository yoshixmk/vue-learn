<template>
  <div>
    <!-- no compile, and show -->
    <a v-bind="href" v-pre>Hello {{message}}</a>
    <!-- once compile, and show -->
    <a v-bind:href="url" v-once>Hello {{message}}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'localhost:8080',
      message: 'first message'
    }
  }

}
</script>

<style scoped>

</style>
