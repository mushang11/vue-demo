<template>
  <div>
    <input type="text" class="input" v-model="name">
    <span>{{name}}</span>
  </div>
</template>

<script>
  export default {
    name: 'inputCopy',
    data () {
      return {
        name: 'default'
      }
    },
    watch: {
      name (newVal, oldVal) {
        console.log(newVal)
        console.log(oldVal)
      }
    }
  }
</script>
<style scoped="">
  .input{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding: 0 4px;
  }
  .input:focus{
    boder:1px solid #00ae6a;
  }
</style>
