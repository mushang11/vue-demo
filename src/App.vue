<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <span-copy v-for="item in list" v-bind:list="item" v-bind:key="item"></span-copy>
    <input-copy></input-copy>
  </div>
</template>

<script>
  import SpanCopy from './components/Span.vue'
  import InputCopy from './components/input.vue'

export default {
    components: {
      InputCopy,
      SpanCopy},
    name: 'app',
    data () {
      return {
        list: [{id: '1'}, {id: '2'}, {id: '3'}]
      }
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
</style>
