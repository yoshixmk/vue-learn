<template>
    <div>
        <p>180 度 = {{ 180 | radian | round }} ラジアン</p>
        <input type="text" v-focus>
        <button v-on:click="list.push(list.length+1)">追加</button>
        <ul ref="list">
           <li v-for="item in list" v-bind:key="item.key">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
  filters: {
    // 小数点以下を第2位に丸めるフィルタ
    round: function (val) {
      return Math.round(val * 100) / 100
    },
    // 度からラジアンに変換するフィルタ
    radian: function (val) {
      return val * Math.PI / 180
    }
  },
  directives: {
    focus: {
      // 紐付いている要素がDOMに挿入されるとき
      inserted: function (el) {
        el.focus() // 要素にフォーカスを当てる
      }
      // insertedの他、bind, update, componentUpdated, unbindのフックがある
    }
  },
  data: function() {
    return {
      list: []
    }
  },
  watch: {
    list: function () {
      // 更新後のul要素の高さを取得できない
      console.log('通常:', this.$refs.list.offsetHeight); // eslint-disable-line
      // nextTickを使えば取得できる
      this.$nextTick(function () {
        console.log('nextTick:', this.$refs.list.offsetHeight); // eslint-disable-line
      })
    }
  }
}
</script>

<style scoped>

</style>