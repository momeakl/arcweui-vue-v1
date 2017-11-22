<template>
  <div class="examples-index">

  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    clickHandler(name) {
      this.$parent.title = name
      this.$router.push(name)
    }
  }
}
</script>
<style lang="less" scoped>
.examples-index {
  text-align: center;
  .weui-btn {
    width: 40%;
    display: inline-block;
    margin-right: 10px;
  }
}
</style>


