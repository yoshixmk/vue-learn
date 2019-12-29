<template>
  <div>
    <p>{{width}}のはんぶんは{{halfWidth}}</p>
    <input v-model.number="width">
    <input v-model.number="halfWidth">
    <p>diff methodRand {{methodRand()}}</p>
    <p>diff methodRand {{methodRand()}}</p>
    <p>same computedRand {{computedRand}}</p>
    <p>same computedRand {{computedRand}}</p>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      width: 400
    }
  },
  watch: {
    width: {
      handler: function(newVal, oldVal) {
        // 変化した時に行いたい処理
        console.log(`${oldVal} -> ${newVal}: width is changed.`); // eslint-disable-line
      },
      deep: false,
      immedia: true
    }
  },
  methods: {
    methodRand: function(){return Math.random()}
  },
  // method: との違いとして、キャッシュ機能がある。
  // リアクティブなデータに使わなかった場合は、同じものが返る
  computed: {
    halfWidth: {
      get: function() {return this.width / 2},
      set: function(val) {this.width = val * 2}
    },
    computedRand: function(){return Math.random()}
  }
}
</script>

<style scoped>

</style>
