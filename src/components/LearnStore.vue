<template>
  <div>
    <p>{{ message }}</p>
    <EditForm></EditForm>
  </div>
</template>

<script>
import EditForm from './EditForm'

export default {
  components: { EditForm },
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
