<template>
  <div>
    <p>{{width}}のはんぶんは{{halfWidth}}</p>
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
    halfWidth: function() {
      return this.width / 2
    }
  }
}
</script>

<style scoped>

</style>
