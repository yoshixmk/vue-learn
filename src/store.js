import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    message: "初期メッセージ",
  },
  getters: {
    message(state) {
      return state.message;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setMessage(state, payload) {
      state.message = payload.message;
    },
  },
  actions: {
    // メッセージの更新処理
    doUpdate({ commit }, message) {
      commit("setMessage", {
        message,
      });
    },
  },
});
export default store;
