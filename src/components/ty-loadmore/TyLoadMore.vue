<template>
  <div class="ty-load-more" :id="refId" :ref="refId" :style="{ height: wrapperHeight + 'px' }">
    <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :ref="refLoadMoreId">
      <slot name="body"></slot>
      <div slot="bottom" class="mint-loadmore-bottom">
        <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
        <span v-show="bottomStatus === 'loading'">
          <mt-spinner type="snake"></mt-spinner>
        </span>
      </div>
    </mt-loadmore>
    <SeparateLines v-if="allLoaded"></SeparateLines>
  </div>
</template>
<script type="text/babel">
//const SeparateLines = () => import('@/components/common/SeparateLines')

export default {
  name: 'TyLoadMore',
  components: {
    //SeparateLines
  },
  props: {
    isAllLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      allLoaded: this.isAllLoad,
      bottomStatus: '',
      wrapperHeight: 0,
      isInit: true,
      refId: 'tyWrapper' + new Date().getTime().toString(),
      refLoadMoreId: 'tyLoadMore' + new Date().getTime().toString(),
      isFirst: false
    }
  },
  watch: {
    isAllLoad(newValue) {
      this.allLoaded = newValue
      this.$toast()
    }
  },
  mounted() {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs[this.refId].getBoundingClientRect().top
  },
  methods: {
    handleBottomChange(status) {
      this.bottomStatus = status
      if (status === 'drop') {
        this.isInit = false
      }
    },
    loadBottom() {
      setTimeout(() => {
        let refObj = this.$refs[this.refLoadMoreId]
        if (refObj) {
          refObj.onBottomLoaded()
        }
        if (!this.isInit) {
          this.isInit = true
          this.$emit('load-more')
        }
        setTimeout(() => {
          if (!this.isFirst) {
            this.isFirst = true
            let containerObj = document.getElementById(this.refId)
            if (containerObj) {
              containerObj.scrollTop = 0
            }
            this.$toast()
          }
        }, 500)
      }, 1000)
    }
  }
}
</script>
<style scoped lang="less">
.ty-load-more {
  overflow: scroll;
  .mint-loadmore-bottom {
    span {
      display: inline-block;
      transition: 0.2s linear;
      vertical-align: middle;
    }
    span.is-rotate {
      transform: rotate(180deg);
    }
  }
}
</style>



