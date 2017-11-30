<template>
  <div id="app">
    <header class="header">
      <router-link to="" @click.native="goBack()" class="goback" v-if="!goBackUrl">
        <i class="fa fa-chevron-left"></i>返回
      </router-link>
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
  name: 'App',
  data() {
    return {
      title: 'ARC WX Component Demo v1',
      goBackUrl: false,
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
      this.goBackUrl = true
      this.$router.push({ path: '/' })
    }
  }
}
</script>
