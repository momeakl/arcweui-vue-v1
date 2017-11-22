<template>
  <div class="ty-hours-label weui-cell weui-cells cell-bar">
    <div class="weui-cell__bd">
      <p>时长</p>
    </div>
    <div class="weui-cell__bd">
      <div>
        <input type="number" v-model="hoursInfo.hours" class="weui-input text-center" min="0" max="99" placeholder="0">
      </div>
    </div>
    <div class="weui-cell__bd text-center">
      <p>小时</p>
    </div>
    <div class="weui-cell__bd">
      <div>
        <select class="weui-select" v-model="hoursInfo.minutes">
          <option selected="selected" value="0">0</option>
          <option value="30">30</option>
        </select>
      </div>
    </div>
    <div class="weui-cell__bd text-right">
      <p class="minutes">分钟</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TyHoursLabel',
  props: {
    hoursInfo: {
      type: Object,
      default: () => {
        return {
          hours: 1,
          minutes: 0
        }
      }
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="less">
.ty-hours-label {
  .minutes {
    text-align: right;
    margin-right: 5px;
  }
}
</style>

