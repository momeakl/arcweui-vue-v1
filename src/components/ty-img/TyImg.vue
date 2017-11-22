<template>
  <div class="ty-img" @click="clickHandler">
    <img v-lazy="src" width="40" />
    <p v-html="name"></p>
  </div>
</template>
<script>
export default {
  name: 'TyImg',
  props: {
    src: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted() { },
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
<style lang="less" scoped>
.ty-img {
  display: inline-block;
  text-align: center;
  font-size: 12px;
  margin-right: 10px;
  p {
    color: #999999;
  }
  img {
    border-radius: 10px;
  }
}
</style>


