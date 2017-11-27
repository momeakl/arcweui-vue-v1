<template>
  <div>
    <TyReplyList v-on:reply-click="replyClick" :data="datas" v-on:reply-del="replyDel" v-on:load-more="queryReply" :isLoadMore="isLoadMore"></TyReplyList>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datas: [],
      isLoadMore: true,
      startNumber: 0
    }
  },
  mounted() {
    this.queryReply()
  },
  methods: {
    replyClick() {
      this.$emit('reply-click')
    },
    replyDel(id, sortIndex) {

    },
    queryReply() {
      if (this.startNumber > 50) {
        this.isLoadMore = false
      } else {
        for (let index = 0; index < 15; index++) {
          this.datas.push({
            id: this.startNumber++,
            type: Math.floor(Math.random() * 9),
            avatar: "https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar",
            name: '测试消息1',
            createTime: new Date().Format('yyyy-MM-dd'),
            content: '今天的工作内容是测试 ',
            isShowDel: this.startNumber % 2 === 0,
            delStatus: 1
          })
        }
      }
    }
  }
}
</script>

