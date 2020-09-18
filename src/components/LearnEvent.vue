<template>
  <div>
    <button v-on:click.right="handler">right click</button>
    <!-- ブラウザ自身の右クリックのメニューを表示させない -->
    <button v-on:click.right.prevent="handler">prevent right click</button>

    <div @click="handler('div1')">
      div1
      <!-- stopでバブリングしない -->
      <a href="#top" @click.stop="handler('a1')">a1</a>
    </div>

    <!-- captureはstopより先に実行されるので逆順でどちらも表示される -->
    <div @click.capture="handler('div2')">
      div2
      <!-- stopでバブリングしない -->
      <a href="#top" @click.stop="handler('a2')">a2</a>
    </div>

    <!-- 自分の要素だけの場合のみに発火 -->
    <div class="overlay" @click.self="handler">
      self div
      <a href="#top" @click="handler('a3')">a3</a>
    </div>

    <!-- .native コンポーネントにイベントを適応するとき -->

    <!-- メッセージ送信のように、Enterを押すとイベント発火。変換後の決定では発火しない -->
    <input v-on:keydown.enter="handler('Enter')" />

    <!-- Ctrl + Enter. システム修飾子（.ctrl, .alt, .shiftなど）は押されている時だけに絞りこむ -->
    <input @keydown.ctrl.enter="handler('Enter')" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handler: function (comment) {
      console.log(comment); // eslint-disable-line
    },
  },
};
</script>

<style scoped></style>
