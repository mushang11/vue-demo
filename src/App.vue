<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <span-copy v-bind:list="list" v-bind:key="list"></span-copy>
  </div>
</template>

<script>
  import SpanCopy from './components/Span.vue'

export default {
    components: {SpanCopy},
    name: 'app',
    data () {
      return {
        list: {id: '1'}
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
