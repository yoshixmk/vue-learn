import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Product from "@/views/Product";
import ProductList from "@/views/ProductList";
// import ProductHome from '@/views/Product/Home'
// import ProductReview from '@/views/ProductReview'
// import ProductReviewDetail from '@/views/ProductReviewDetail'

Vue.use(VueRouter);

// VueRouterインスタンスを生成する
const router = new VueRouter({
  mode: "history", // #{hash}形式のURLを使わない

  base: "/my-app/", // context baseの意味

  // URLのパスと紐づくコンポーネントをマッピング
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/products",
      component: ProductList,
    },
    {
      path: "/products/:id(\\d+)",
      component: Product,
      props: true, // Productへのprops
      /*children: [
        {
          name: 'product-home',
          path: '',
          component: ProductHome
        },
        {
          name: 'product-review',
          path: 'review',
          component: ProductReview
        },
        {
          name: 'product-review-detail',
          path: 'review/:rid',
          component: ProductReviewDetail
        }
      ]*/
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});
export default router;
