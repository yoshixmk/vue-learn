<template>
  <div>
    <button v-on:click.right="handler">right click</button>
    <!-- ブラウザ自身の右クリックのメニューを表示させない -->
    <button v-on:click.right.prevent="handler">prevent right click</button>

    <div @click="handler('div1')">div1
      <!-- stopでバブリングしない -->
      <a href="#top" @click.stop="handler('div2')">div2</a>
    </div>

    <!-- captureはstopより先に実行されるので逆順でどちらも表示される -->
    <div @click.capture="handler('div3')">div3
      <!-- stopでバブリングしない -->
      <a href="#top" @click.stop="handler('div4')">div4</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    handler: function(comment) {
      console.log(comment); // eslint-disable-line
    }
  }
}
</script>

<style scoped>
</style>
