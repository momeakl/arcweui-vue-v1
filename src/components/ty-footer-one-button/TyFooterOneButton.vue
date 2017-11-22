<template>
  <div class="ty-footer-one">
    <div>
      <mt-button :type="type" @click="callback" size="large">{{buttonName}}</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TyFooterOneButton',
  props: {
    name: {
      type: String,
      default: '删除'
    },
    type: {
      type: String,
      default: 'danger'
    },
    tag: {
      type: [Object, String]
    }
  },
  data() {
    return {
      buttonName: this.name
    }
  },
  methods: {
    callback() {
      this.$emit('click', this.tag)
    }
  }
}
</script>
<style lang="less">
.ty-footer-one {
  position: fixed;
  bottom: 0px;
  width: 100%;
  border-top: 1px solid #eeeeee;
  background: white;
  z-index: 1000;
  div {
    padding: 10px;
  }
}
</style>


