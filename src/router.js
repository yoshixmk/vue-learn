import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Product from '@/views/Product'

Vue.use(VueRouter)

// VueRouterインスタンスを生成する
const router = new VueRouter({
  // URLのパスと紐づくコンポーネントをマッピング
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/product',
      component: Product
    }
  ]
})
export default router
