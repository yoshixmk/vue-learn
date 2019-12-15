<template>
  <div>
    <div v-if="show">Hello vue concept</div>
    <ol>
      <li v-for="item in list" :key="item.id">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      list: ['itemA', 'itemB']
    }
  }
}
</script>

<style scoped>

</style>
