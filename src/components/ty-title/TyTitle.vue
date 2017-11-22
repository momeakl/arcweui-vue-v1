<template>
  <div class="ty-title">
    <slot name="body" v-if="!content"></slot>
    <p v-else v-html="content">
    </p>
  </div>
</template>
<script>
export default {
  name: 'TyTitle',
  props: {
    content: {
      type: String
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="less">
.ty-title {
  padding: 0px 15px;
  font-size: 15px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>


