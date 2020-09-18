import "core-js";
import Vue from "vue";
import App from "./App.vue";
import store from "@/store.js";
import router from "@/router.js";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
});
