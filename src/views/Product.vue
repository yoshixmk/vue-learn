<template>
  <div class="product">
    <h1>プロダクト</h1>
    <p>id = {{id}}</p>
    <dl class="product-table">
      <dt>商品名</dt><dd>{{item.name}}</dd>
      <dt>価格</dt><dd>{{item.price}}</dd>
      <dt>説明</dt><dd>{{item.content}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {id: String},
  data() {
    return {
      item: null
    }
  },
  watch: {
    id: {
      handler() {
        if (this.id == 1) this.item = { id: 1, name: '商品A', price: 100, content: '商品A詳細' }
        if (this.id == 2) this.item = { id: 2, name: '商品B', price: 200, content: '商品B詳細' }
        if (this.id == 3) this.item = { id: 3, name: '商品C', price: 300, content: '商品C詳細' }
      },
      immediate: true
    }
  }
}
</script>
