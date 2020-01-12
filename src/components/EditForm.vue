<template>
  <div class="edit-form">
    <h3>バインドとイベントを使った場合</h3>
    <input type="text" :value="message" @input="doUpdate">
    <h3>v-model を使った場合</h3>
    <input v-model="message2">
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  computed: {
    message() {
      return this.$store.getters.message
    },
    message2: {
      get() { return this.$store.getters.message },
      set(value) { this.$store.dispatch('doUpdate', value) }
    }
  },
  methods: {
    doUpdate(event) {
      // input の値を持ってディスパッチ
      this.$store.dispatch('doUpdate', event.target.value)
    }
  }
}
</script>