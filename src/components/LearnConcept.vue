<template>
  <div>
    <div v-if="show">Hello vue concept</div>
    <ol>
      <li v-for="item in list" :key="item.id">{{ item }}</li>
    </ol>
    <button v-on:click="handleClick">click me!!</button>

    <p>{{message}}</p>
    <input v-model="message">
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      list: ['itemA', 'itemB'],
      message: 'default value'
    }
  },
  methods: {
    handleClick: function(event) {
      alert(event.target)
    }
  }
}
</script>

<style scoped>

</style>
