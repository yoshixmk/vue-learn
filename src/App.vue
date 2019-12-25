<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <LearnConcept/>
    <LearnAxios/> -->
    <LearnTemplate/>
    <LearnEvent/>
    <LearnComputed/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
// import LearnConcept from './components/LearnConcept'
// import LearnAxios from './components/LearnAxios'
import LearnTemplate from './components/LearnTemplate'
import LearnEvent from './components/LearnEvent'
import LearnComputed from './components/LearnComputed'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // LearnConcept,
    // LearnAxios,
    LearnTemplate,
    LearnEvent,
    LearnComputed
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
