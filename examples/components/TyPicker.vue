<template>
  <div>
    <TyPicker class="weui-cells-clear-left" title='请假类型' v-model='pcikerInfo.value' v-on:change="typeChange" :datas="dataInfo">
    </TyPicker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pcikerInfo: {
        value: 2,
        label: ''
      },
      dataInfo: [
        { label: '蚂蚁', value: 0 },
        { label: '蝴蝶', value: 1 },
        { label: '蜻蜓', value: 2 }
      ]
    }
  },
  methods: {
    typeChange(value) {
      console.log(value)
    }
  }
}
</script>

