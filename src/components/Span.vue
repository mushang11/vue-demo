<template>
  <div class="span">
    <span>{{list.id}}</span>
    <span class="test">{{msg}}</span>
  </div>
</template>

<script>
  export default {
    name: 'spanCopy',
    props: ['list'],
    data () {
      return {
        msg: '数组'
      }
    }
  }
</script>
<style scoped="">
  .span{
    display: flex;
    justify-content: center;
  }
</style>
