<template>
  <div>
    <p>
        180 度 = {{ 180 | radian | round }} ラジアン
    </p>
    <input type="text" v-focus>
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
  }
}
</script>

<style scoped>

</style>