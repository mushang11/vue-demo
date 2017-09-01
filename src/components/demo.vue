<template>
  <div>
    <el-radio disabled class="radio" v-model="radio" label="1">备选项</el-radio>
    <el-radio disabled class="radio" v-model="radio" label="2">备选项</el-radio>
    <span>{{radio}}</span>
    <el-radio-group v-model="radio4">
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="广东"></el-radio-button>
    </el-radio-group>

    <el-select v-model="value" :disabled="false" multiple clearable placeholder="请选择">
      <el-option v-for="item in options"
                 :key="item.value"
                 :label="item.label"
                 :disabled ="item.disable"
                 :value="item.value"></el-option>
    </el-select>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions0">
    </el-date-picker>
    <el-switch v-model="value" on-text="wo" on-color="#00ae6a" off-color="#999999" off-text="ni"></el-switch>

  </div>
</template>
<script>
  export default {
    name: 'demo',
    data () {
      return {
        pickerOptions0: {
          disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        },
        radio: '2',
        radio4: '上海',
        value: '龙须面',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disable: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }]
      }
    }
  }
</script>
