<template>
  <div>
    <!-- no compile, and show -->
    <a v-bind="href" v-pre>Hello {{message}}</a>
    <!-- once compile, and show -->
    <a v-bind:href="url" v-once>Hello {{message}}</a>

    <span v-text="message"></span>
    <span v-html="tag"></span>
    <div v-cloak>v-cloak {{message}}</div>
    <textarea v-model="textAreaMessage"></textarea>
    <pre>{{textAreaMessage}}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'localhost:8080',
      message: 'first message',
      tag: 'Hello <strong>Vue.js!</strong>',
      textAreaMessage: 'Hello textarea!!\nHi textarea'
    }
  }

}
</script>

<style scoped>
  [v-cloak] {display: none}
</style>
