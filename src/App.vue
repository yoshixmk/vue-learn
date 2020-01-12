<template>
  <div id="app">
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

<style>
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
</style>
