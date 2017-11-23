<template>
  <div class="ty-auto-load" v-infinite-scroll="loadMoreData" infinite-scroll-disabled="loadMore" :infinite-scroll-distance="distance">
    <slot name="body"></slot>
    <p v-show="isLoadMore" class="loading">
      <mt-spinner type="fading-circle"></mt-spinner>
      加载中...
    </p>
    <SeparateLines v-if="showSeparateLines &&loadMore && !showEmpty" style="margin-top:20px;"></SeparateLines>
    <TyEmpty v-if="showEmpty"></TyEmpty>
  </div>
</template>
<script>
export default {
  name: 'TyAutoLoad',
  props: {
    isLoadMore: {
      type: Boolean,
      default: true
    },
    distance: {
      type: Number,
      default: 50
    },
    showSeparateLines: {
      type: Boolean,
      default: true
    },
    showEmpty: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isLoadMore(newValue) {
      this.loadMore = !newValue
    }
  },
  data() {
    return {
      loadMore: false
    }
  },
  methods: {
    loadMoreData() {
      if (this.isLoadMore) {
        this.$emit('load-more')
      }
    }
  }
}
</script>
<style lang="less">
.ty-auto-load {
  .loading {
    text-align: center;
    height: 50px;
    line-height: 50px;
    div {
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
}
</style>

