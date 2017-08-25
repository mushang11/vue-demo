<template>
  <div class="table">
    <div class="row">{{msg}}</div>
    <div class="row">{{msg}}</div>
    <div class="row">{{msg | showCase}}</div>
    <div v-on:click="check">test</div>
    <span>{{now}}</span>
  </div>

</template>

<script>
  /* eslint-disable key-spacing,no-trailing-spaces */
  export default {
    name:'world',
    data () {
      return {
        msg :'i am weiqiang'
      }
    },
    methods:{
      check:function (event) {
        alert(event.target.tagName)
      }
    },
    computed:{
      now :function () {
        return new Date()
      }
    },
    filters:{
      showCase :function (value) {
        if (!value) return
        value = value.toString()
        return value.toUpperCase()
      }
    }

  }
</script>
<style scoped>
  .table{
    display: flex;
    align-content: center;
    justify-content: center;
    flex: 1;
  }
  .table .row{
    padding: 0 10px;
  }
</style>
