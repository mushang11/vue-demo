<template>
  <div class="span">
    <span>{{list.id}}</span>
  </div>
</template>

<script>
  export default {
    name: 'spanCopy',
    props: ['list'],
    data () {
      return {
        msg: 'test'
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
