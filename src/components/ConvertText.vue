<template>
    <p>
        180 度 = {{ 180 | radian | round }} ラジアン
    </p>
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
  }
}
</script>

<style scoped>

</style>