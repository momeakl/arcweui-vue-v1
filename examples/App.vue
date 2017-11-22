<template>
  <div id="app">
    <header>
      <Cell :leftNav="true" :text="title" v-on:go-back="goBack" :rightNav="false"></Cell>
    </header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'ARC WX Component Demo'
    }
  },
  mounted() {
    if (location.hash !== '#/') {
      this.title = location.hash.replace('#/', '')
    }
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
  margin-top: 50px;
  z-index: 1;
}
</style>
