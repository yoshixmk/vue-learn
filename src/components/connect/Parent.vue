<template>
    <ul>
        <Child v-for="item in list"
            v-bind:key="item.id"
            v-bind="item"
            v-on:attack="handleAttack"></Child>
        <Child2>
            <header slot="header">
                Hello Vue.js!
            </header>
            Vue.jsはJavaScriptのフレームワークです。
            <footer slot="footer">
              footer Vue.js!
            </footer>
        </Child2>
    </ul>    
</template>

<script>
import Child from './Child'
import Child2 from './Child2'

export default {
  components: {
    Child,
    Child2
  },
  data: function() {
    return{
      list: [
        { id: 1, name: 'スライム', hp: 100 },
        { id: 2, name: 'ゴブリン', hp: 200 },
        { id: 3, name: 'ドラゴン', hp: 500 }
      ]
    }
  },
  methods: {
    // attackが発生した！
    handleAttack: function (id) {
      // 引数のIDから要素を検索
      var item = this.list.find(el =>  el.id === id)
      // HPが0より多ければ10減らす
      if (item !== undefined && item.hp > 0) item.hp -= 10
    }
  }
}
</script>
