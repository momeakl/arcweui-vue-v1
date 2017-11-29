<template>
  <div class="ty-footer clear-border-mt weui-cells weui-cells-clear-left">
    <mt-navbar>
      <template v-for="(item,index) in btnName">
        <mt-tab-item :key="index">
          <mt-button size="large" :disabled="status==index" @click="clickHandler(index)" :type="index==0?'default':'primary'">
            <mt-spinner type="fading-circle" v-show="status==index" slot="icon"></mt-spinner>
            {{btnName[index]}}
          </mt-button>
        </mt-tab-item>
      </template>
    </mt-navbar>
  </div>
</template>
<script>
export default {
  name: 'TyFooter',
  props: {
    btnName: {
      type: Array,
      default: function () {
        return ['存草稿', '提交']
      }
    },
    value: {
      type: Number,
      default: -1
    }
  },
  watch: {
    value(newValue) {
      this.status = newValue
      if (newValue !== -1) {
        this.$emit('click', newValue)
      }
    }
  },
  data() {
    return {
      status: this.value
    }
  },
  methods: {
    clickHandler(index) {
      this.$emit('input', index)
    }
  }
}
</script>

<style lang="less">
.ty-footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  z-index: 100;
  .mint-navbar .mint-tab-item {
    padding: 10px;
  }
}
</style>


