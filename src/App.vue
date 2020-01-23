<template>
  <div id="app">
    <nav>
      <router-link to="/"> Home </router-link>/
      <router-link to="/products"> Product </router-link>
    </nav>
    <transition>
      <router-view />
    </transition>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <LearnConcept/>
    <LearnAxios/> -->
    <!-- <LearnTemplate/>
    <LearnEvent/>
    <LearnComputed/> -->
    <WatchGithub />
    <ConvertText />
    <Parent />
    <LearnStore/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
// import LearnConcept from './components/LearnConcept'
// import LearnAxios from './components/LearnAxios'
// import LearnTemplate from './components/LearnTemplate'
// import LearnEvent from './components/LearnEvent'
// import LearnComputed from './components/LearnComputed'
import WatchGithub from "./components/WatchGithub";
import ConvertText from "./components/ConvertText";
import Parent from "./components/connect/Parent";
import LearnStore from "./components/LearnStore";

export default {
  name: "app",
  components: {
    // HelloWorld,
    // LearnConcept,
    // LearnAxios,
    // LearnTemplate,
    // LearnEvent,
    // LearnComputed
    WatchGithub,
    ConvertText,
    Parent,
    LearnStore
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app img {
  width: 50px;
  height: 50px;
}

/* <router-link exact> とタグにexactを含めるパターン */
/* .router-link-active {background: #888888} */

/* 直接exact(完全一致)の時だけスタイルを当てるパターン */
.router-link-exact-active {background: #888888}
.view-enter-active, .view-leave-active {
  transition: opacity 0.5s;
}
.view-leave-active {
  position: absolute;
}
.view-enter, .view-leave-to {
  opacity: 0;
}
</style>
