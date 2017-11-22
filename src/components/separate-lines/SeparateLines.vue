<template>
  <div class="ty-sl">
    <div class="tips">没有更多数据</div>
  </div>
</template>
<script>
export default {
  name: 'SeparateLines',
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.ty-sl {
  font-size: 14px;
  color: #999999;
  text-align: center;
  border-top: 1px solid #e5e5e5;
  margin-top: 10px;
  height: 30px;
  line-height: 30px;
  .tips {
    width: 100px;
    background-color: white;
    margin: 0px auto;
    position: relative;
    top: -15px;
  }
}
</style>


