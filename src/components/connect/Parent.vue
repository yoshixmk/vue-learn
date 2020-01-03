<template>
    <ul>
        <Child v-for="item in list"
            v-bind:key="item.id"
            v-bind="item"
            v-on:attack="handleAttack"></Child>
    </ul>    
</template>

<script>
import Child from './Child'

export default {
  components: {
    Child
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
