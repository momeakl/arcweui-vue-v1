<template>
  <div class="ty-empty">
    <img src="../../assets/img/empty.png" width="150" alt="暂无内容">
    <p class="text-empty">暂无内容</p>
  </div>
</template>
<script>
export default {
  name: 'TyEmpty',
  data() { return {} }
}
</script>
<style   lang="less">
.ty-empty {
  text-align: center;
  margin-top: 35px;
  .text-empty {
    color: #c3c4d4;
    font-size: 14px;
  }
}
</style>

