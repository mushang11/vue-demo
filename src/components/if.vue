<template>
  <div>
  <div v-if="statusFlg == 1"> 我是1</div>
  <div v-else-if="statusFlg == 2"> 我是2</div>
  <div v-else> 我不是数字</div>
  <a @click="add" class="btn">增加</a>
  </div>
</template>
<script>
  export default {
    name: 'vueIf',
    data () {
      return {
        statusFlg: 0
      }
    },
    methods: {
      add () {
        this.statusFlg++
      }
    }
  }
</script>
<style>
  .btn{
    display: inline-block;
    height: 20px;
    line-height: 20px;
    text-align: center;
    padding: 2px 20px;
    cursor: pointer;
    font-size: 12px;
    background-color: #39ac6a;
    color: #fff;
    border-radius: 2px;
  }
</style>
