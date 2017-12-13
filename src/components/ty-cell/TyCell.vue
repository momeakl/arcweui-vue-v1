<template>
  <div class="ty-cell weui-cells">
    <img class="avatar" :class="{'float-left':avatar!=null}" v-if="avatar!=null" v-lazy="lazyImgObj" />
    <div class="title">
      <span v-text="title"></span>
      <span v-text="label" class="ty-cell-label"></span>
    </div>
    <div class="clear"></div>
    <div v-html="desc" :class="{'avatar-content':avatar!=null}" class="content">
    </div>
    <div v-if="isShowDel" class="clear del">
      <span :class="deleteStatus===1?'clouds-delete':'weui-loading'" @click="delHandler"></span>
    </div>
    <div class="clear"></div>
  </div>
</template>
<script>

export default {
  name: 'TyCell',
  props: {
    id: {
      type: Number,
      default: 0
    },
    avatar: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    isShowDel: {
      type: Boolean,
      default: false
    },
    sortIndex: {
      type: Number,
      default: 0
    },
    delStatus: {
      type: Number,
      default: 1
    }
  },
  watch: {
    delStatus(val) {
      this.deleteStatus = val
    },
    avatar(val) {
      this.lazyImgObj.src = val
    }
  },
  data() {
    return {
      deleteStatus: this.delStatus,
      lazyImgObj: {
        src: this.avatar,
        error: require('../../assets/head.png'),
        loading: require('../../assets/head.png')
      }
    }
  },
  methods: {
    delHandler() {
      if (this.deleteStatus === 1) {
        this.$emit('del', this.id, this.sortIndex)
      }
    }
  }
}
</script>

<style lang="less">
.ty-cell {
  position: relative;
  padding: 15px 15px;
  .avatar {
    text-align: center;
    width: 35px;
    border-radius: 5px;
    margin: 0px 10px 10px 0px;
  }
  .float-left {
    float: left;
  }
  .title {
    color: #999;
    .ty-cell-label {
      float: right;
    }
  }

  .content {
    white-space: pre-wrap;
    word-wrap: break-word;
    font-size: 15px;
    color: black;
  }

  .avatar-content {
    margin-left: 45px;
    margin-top: -22px;
    position: relative;
    height: auto;
    img {
      width: 18px;
    }
  }

  .del {
    position: relative;
    right: 0px;
    font-size: 15px;
    text-align: right;
  }
  .del.weui-cells {
    margin-top: 0px;
    &:before {
      border-top: none;
    }
  }
  .weui-loading {
    width: 15px;
    height: 15px;
  }
}
</style>
