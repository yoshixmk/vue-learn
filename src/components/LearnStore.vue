<template>
  <p>{{ message }}</p>
</template>

<script>
export default {
  created() {
    console.log(this.$store.state.count) // eslint-disable-line
    this.$store.commit('increment')
    console.log(this.$store.state.count) // eslint-disable-line
  },
  computed: {
    message() {
      return this.$store.getters.message
    }
  }
}
</script>

<style scoped>

</style>
