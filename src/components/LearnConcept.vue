<template>
  <div>
    <div v-if="show">Hello vue concept</div>
    <ol>
      <li v-for="item in list" :key="item.id">{{ item }}</li>
    </ol>
    <p>{{ count }} clicked.</p>
    <button v-on:click="handleClick">click me!!</button>
    <input type="text" :value="message"/>
    <p>{{ vModel }}.</p>
    <input v-model="vModel"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      list: ['itemA', 'itemB'],
      message: "Please input",
      count: 0,
      vModel: "v-model"
    }
  },
  methods: {
    handleClick: function() {
      // alert(event.target)
      this.count += 1;
    }
  }
}
</script>

<style scoped>

</style>
