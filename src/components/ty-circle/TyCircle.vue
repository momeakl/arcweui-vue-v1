<template>
  <div class="ty-circle" @click="clickHandler" v-bind:style="{'width':width+'px','height':width+'px','border-radius':borderRadius+'px','lineHeight':lineHeight+'px'}">
    <slot name="body"></slot>
  </div>
</template>
<script>
export default {
  name: 'TyCircle',
  props: {
    width: {
      type: Number,
      default: 65
    },
    lineHeight: {
      type: Number,
      default: 65
    }
  },
  data() {
    return {
      borderRadius: Math.round(this.width / 2)
    }
  },
  methods: {
    clickHandler() {
      this.$emit('click')
    }
  }
}
</script>
<style lang="less">
.ty-circle {
  display: inline-block;
  text-align: center;
  background: #fff;
  border: 1px solid #ddd;
  color: #666;
  z-index: 100;
  font-size: 15px;
}
</style>

