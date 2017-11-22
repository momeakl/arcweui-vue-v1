<template>
  <div class="ty-general-cell" @click="clickHandler">
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <slot name="side"></slot>
        </div>
        <div class="weui-cell__bd content">
          <p v-html="content"></p>
        </div>
        <div class="weui-cell__ft" v-if="slotDesc">
          <slot name="desc"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TyGeneralCell',
  props: {
    content: {
      type: String
    },
    slotSide: {
      type: Boolean,
      default: false
    },
    slotDesc: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    clickHandler() {
      this.$emit('click')
    }
  }
}
</script>
<style lang="less">
.ty-general-cell {
  .content {
    font-size: 15px;
  }
}
</style>


