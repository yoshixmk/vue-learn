<template>
  <div>
    <div v-if="show">Hello vue if statement</div>
    <div v-show="show">Hello vue show statement</div>
    <button v-on:click="reverseShow">Show: {{ show }}</button>
    <ol>
      <li v-for="item in list" :key="item.id">{{ item }}</li>
    </ol>
    <p>{{ count }} clicked.</p>
    <button v-on:click="handleClick">click me!!</button>
    <input type="text" :value="message"/>
    <p>{{ vModel }}.</p>
    <input v-model="vModel"/>
    <svg xmllns="https:www.w3.org/2000/svg" version="1.1">
      <circle cx=100 cy=75 v-bind:r="radius" fill="lightpink"/>
    </svg>
    <input type="range" min=0 max=100 v-model="radius">
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      list: ['itemA', 'itemB', 'itemC'],
      message: "Please input",
      count: 0,
      vModel: "v-model",
      radius: 50
    }
  },
  methods: {
    handleClick: function() {
      // alert(event.target)
      this.count += 1;
    },
    reverseShow: function() {
      this.show = !this.show
    }
  }
}
</script>

<style scoped>

</style>
