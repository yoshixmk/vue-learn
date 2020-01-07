<template>
  <div class="my-component">
    <p>名前.{{ name }} HP.{{ hp }}</p>
    <p>名前 <input v-model="localName" /></p>
    <p>HP <input size="5" v-model.number="localHp" /></p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    hp: Number
  },
  computed: {
    // 算出プロパティのセッター＆ゲッターを使ってv-modelを使用
    localName: {
      get() {
        // get: function() {}と同じ
        return this.name;
      },
      set(val) {
        // set: function(val) {}と同じ
        this.$emit("update:name", val);
      }
    },
    localHp: {
      get() {
        return this.hp;
      },
      set(val) {
        this.$emit("update:hp", val);
      }
    }
  }
};
</script>
