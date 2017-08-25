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
        name: 'default',
        options: ''
      }
    },
    watch: {
      name (newVal, oldVal) {
        console.log(newVal)
        console.log(oldVal)
      }
    },
    methods: {
      getData () {
        this.$http.get(``, [this.options]).then(res => {
          console.log(res)
        }, (err) => {
          console.log(err)
        })
      },
      postData () {
        this.$http.post(``, [this.options]).then(res => {
          console.log(res)
        }, (err) => {
          console.log(err)
        })
      }
    }
  }
</script>
<style scoped="">
  .input {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding: 0 4px;
  }

  .input:focus {
    boder: 1px solid #00ae6a;
  }
</style>
