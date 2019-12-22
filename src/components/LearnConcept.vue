<template>
  <div>
    <div v-if="show">Hello vue if statement</div>
    <div v-show="show">Hello vue show statement</div>
    <button v-on:click="reverseShow">Show: {{ show }}</button>
    <ol>
      <li v-for="item in list" :key="item.id">{{ item }}</li>
    </ol>
    <p>{{ count }} clicked.</p>

    <!-- どれもv-on:clickで同じ意味  -->
    <button v-on:click="handleClick">click me!!1</button>
    <button @click="handleClick">click me!!2</button>
    <button @click="count++">click me!!3</button>

    <input type="text" :value="message"/>
    <p >{{ vModel }}.</p>
    <input v-model="vModel"/>
    <svg xmllns="https:www.w3.org/2000/svg" version="1.1">
      <circle cx=100 cy=75 v-bind:r="radius" fill="lightpink"/>
    </svg>
    <input type="range" min=0 max=100 v-model="radius">
    <p ref="hello">hello</p>
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
  },
  mounted: function() {
    // alert(this.$el); template div el
    // alert(this.$refs.hello); hello p el
    console.log(this.$refs.hello); // eslint-disable-line
  }
}
</script>

<style scoped>

</style>
