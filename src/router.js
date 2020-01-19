import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Product from '@/views/Product'
import ProductList from '@/views/ProductList'

Vue.use(VueRouter)

// VueRouterインスタンスを生成する
const router = new VueRouter({
  mode: 'history', // #{hash}形式のURLを使わない

  base: '/my-app/', // context baseの意味

  // URLのパスと紐づくコンポーネントをマッピング
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/products',
      component: ProductList
    },
    {
      path: '/products/:id(\\d+)',
      component: Product,
      props: true // Productへのprops
    }
  ]
})
export default router
