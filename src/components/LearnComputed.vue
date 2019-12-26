<template>
  <div>
    <p>{{width}}のはんぶんは{{halfWidth}}</p>
    <input v-model.number="width">
    <input v-model.number="halfWidth">
  </div>  
</template>

<script>
export default {
  data() {
    return {
      width: 400
    }
  },
  computed: {
    halfWidth: {
      get: function() {return this.width / 2},
      set: function(val) {this.width = val * 2}
    }
  }
}
</script>

<style scoped>

</style>
