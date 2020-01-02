<template>
    <li>{{ name }} HP.{{ hp }}
    <button v-on:click="doAttack">攻撃する</button></li>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    hp: Number
  },
  methods: {
    // ボタンのクリックイベントのハンドラから$emitでattackを発火する
    doAttack: function () {
      // 引数として自分のIDを渡す
      this.$emit('attack', this.id)
    }
  }  
}
</script>
  