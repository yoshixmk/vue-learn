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

        <!-- :nameはv-bind:nameと同じ -->
        <Child3 :name.sync="name" :hp.sync="hp">
        </Child3>

        <p>^= はXOR。1なら0, 0なら1に書き換え</p>
        <button v-on:click="current^=1">コンポーネントを切り替え</button>
        <div v-bind:is="component"
            v-bind="list[0]"
            v-on:attack="handleAttack"
            ></div>
    </ul>    
</template>

<script>
import Child from './Child'
import Child2 from './Child2'
import Child3 from './Child3'

export default {
  components: {
    Child,
    Child2,
    Child3
  },
  data: function() {
    return{
      list: [
        { id: 1, name: 'スライム', hp: 100 },
        { id: 2, name: 'ゴブリン', hp: 200 },
        { id: 3, name: 'ドラゴン', hp: 500 }
      ],
      name: 'スライム',
      hp: 100,
      // 描画するコンポーネントを選択するためのindex
      current: 0
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
  },
  computed: {
    component() {
      return ['Child', 'Child2'][this.current]
    }
  }
}
</script>
