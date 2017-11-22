<template>
  <div id="app">
    <header>
      <h1 v-text="title"></h1>
    </header>
    <div class="container">
      <router-view></router-view>
      <LoadingToast :msgInfo="msgInfo"></LoadingToast>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'ARC WX Component Demo v1',
      msgInfo: {
        msg: '数据加载中',
        isShow: false,
        isWait: false,
        msgType: 'success'
      }
    }
  },
  created() {
    TyCommon.closeWaiting()
    bus.$on('showWaitingChange', (value) => {
      this.msgInfo = value
    })
  },
  methods: {
    goBack() {
      this.title = 'ARC WX Component Demo'
      this.$router.back()
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
header {
  position: fixed;
  z-index: 1000;
  width: 100%;
  top: 0px;
  background: white;
  text-align: center;
  border-bottom: 1px solid #dddee1;
  .weui-cell__ft.left-nav {
    &:after {
      border-color: #26a2ff;
    }
  }
}

.container {
  margin-top: 100px;
  z-index: 1;
}
</style>
