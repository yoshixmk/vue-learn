<script>
import store from '@/store.js'

export default {
  created() {
    console.log(store.state.count) // eslint-disable-line
    this.$store.commit('increment')
    console.log(store.state.count) // eslint-disable-line
  },
  store
}
</script>

<style scoped>

</style>
