<template>
  <div class="edit-form">
    <h3>バインドとイベントを使った場合</h3>
    <input type="text" :value="getMessage" @input="doUpdate" />
    <h3>v-model を使った場合</h3>
    <input v-model="message" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "EditForm",
  computed: {
    getMessage() {
      return this.$store.getters.message;
    },

    // ヘルパーを使っても同じ
    // message2: {
    //   get() { return this.$store.getters.message },
    //   set(value) { this.$store.dispatch('doUpdate', value) }
    // }
    ...mapGetters(["message"]),
  },
  methods: {
    doUpdate(event) {
      // input の値を持ってディスパッチ
      this.$store.dispatch("doUpdate", event.target.value);
    },
  },
};
</script>
