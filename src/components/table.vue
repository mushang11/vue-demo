<template>
  <div>
  <div class="table">
    <div class="row">{{msg}}</div>
    <div class="row">{{msg}}</div>
    <div class="row">{{msg | showCase}}</div>
    <div @click="check" class="button">test</div>
    <span>{{now}}</span>
  </div>
    <vue-if></vue-if>
  </div>

</template>

<script>
  /* eslint-disable key-spacing,no-trailing-spaces */
  import VueIf from './if.vue'

  export default {
    components: {VueIf},
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
  .button{
    display: inline-block;
    height: 22px;
    line-height: 22px;
    padding: 2px 8px;
    border-radius: 3px;
    text-align: center;
    background-color: #00ae6a;
    color:#fff;
    cursor: pointer;
  }
</style>
