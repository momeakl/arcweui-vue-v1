<template>
  <div class="ty-reply-list">
    <mt-cell title="回复" class="reply">
      <span class="clouds-navfeedback" @click="click"></span>
    </mt-cell>
    <TyAutoLoad class="item-list" :isLoadMore="isLoadMore" :showSeparateLines="false" v-on:load-more="loadMoreData">
      <template v-for="(item,index) in data" slot="body">
        <TyCell v-if="item.type===4" :key="item.id" :id="item.id" :title="item.name" :label="item.createTime" :desc="item.content" :avatar="item.avatar" :isShowDel="item.isShowDel" :sortIndex="index" v-on:del="del" :delStatus="item.delStatus"></TyCell>
        <TyCell v-else :key="item.id" :id="item.id" :title="item.name" :avatar="item.avatar" :desc="getContent(item)" :label="item.createTime"></TyCell>
      </template>
    </TyAutoLoad>
  </div>
</template>
<script>
export default {
  name: 'TyReplyList',
  props: {
    data: {
      type: Array,
      default: []
    },
    isLoadMore: {
      type: Boolean,
      default: true
    }
  },
  computed: {},
  data() {
    return {}
  },
  mounted() { },
  methods: {
    getContent(item) {
      let content = ''
      switch (item.type) {
        case 1:
          content = '<span class="clouds-has-read"></span>'
          break
        case 2:
          content = '<span class="clouds-has-join"></span>'
          break
        case 3:
          content = '<span class="clouds-has-leave"></span>'
          break
        case 7:
          content = '<span class="clouds-has-agreed"></span><p class="reply-desc">审核理由：同意！</p>'
          break
        case 8:
          content = '<span class="clouds-has-rejected"></span><p class="reply-desc">审核理由：不同意！</p>'
          break
        case 9:
          content = '<span class="clouds-has-consent"></span><p class="reply-desc">' + item.content + '</p>'
          break
      }
      return content
    },
    click() {
      this.$emit('reply-click')
    },
    del(id, sortIndex) {
      this.$emit('reply-del', id, sortIndex)
    },
    loadMoreData() {
      if (this.data.length > 0) {
        this.$emit('load-more')
      }
    }
  }
}
</script>
<style lang="less">
.ty-reply-list {
  margin-top: 6px;
  .mint-cell-wrapper {
    background-image: none;
  }
  .avatar {
    border-radius: 6px;
  }
  .clouds-navfeedback {
    font-size: 16px;
  }
  .item-list {
    .mint-cell-value {
      margin-top: -20px;
      font-size: 12px;
    }
    .mint-cell-text {
      position: relative;
      top: -30px;
      left: 45px;
      color: #999;
    }
    .mint-cell-label {
      position: relative;
      top: -10px;
      margin-top: 0px;
      margin-left: 45px;
    }
    .mint-cell-title {
      padding-top: 10px;
    }
    .read {
      position: absolute;
      left: 55px;
      top: 20px;
    }
    .reply-desc {
      margin-top: 16px;
    }
    .content {
      img {
        width: 20px;
      }
    }
  }
}
</style>

