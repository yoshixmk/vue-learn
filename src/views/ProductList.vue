<template>
  <div class="product-list">
    <h1>商品一覧</h1>
    <ul>
      <li v-for="{id, name} in list" :key=id>
        <router-link :to="`/products/${id}`">{{name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    list: () => {
      return [
        { id: 1, name: '商品A', price: 100, content: '商品A詳細' },
        { id: 2, name: '商品B', price: 200, content: '商品B詳細' },
        { id: 3, name: '商品C', price: 300, content: '商品C詳細' }
      ]
    }
  }
}
</script>
