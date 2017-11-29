<template>
  <a class="ty-cell-withimg weui-cell weui-cell_access" @click="itemClick" href="javascript:;">
    <div class="weui-cell__hd">
      <img v-lazy="lazyImgObj" alt="头像" :width="avatarWidth" :height="avatarHeight" class="avatar">
    </div>
    <div class="weui-cell__bd">
      <div class="home-title">
        <h4 class="home-name" v-html="title"></h4>
        <span class="ty-cell-label" v-html="label"></span>
      </div>
      <p class="home-desc" v-html="desc"></p>
    </div>
    <div class="weui-cell__hd">
      <mt-button v-if="showButton" plain type="primary" @click.stop="copy">复制</mt-button>
      <mt-button v-if="showButton" plain type="danger" @click.stop="del">删除</mt-button>
    </div>
  </a>
</template>
<script>
export default {
  name: 'TyCellWithImg',
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    tag: {
      type: Object,
      default: null
    },
    showButton: {
      type: Boolean,
      default: false
    },
    avatarWidth: {
      type: Number,
      default: 40
    },
    avatarHeight: {
      type: Number,
      default: 40
    }
  },
  watch: {
    avatar(val) {
      this.lazyImgObj.src = val
    }
  },
  data() {
    return {
      key: this.tag,
      lazyImgObj: {
        src: this.avatar,
        error: require('../../assets/head.png'),
        loading: require('../../assets/head.png')
      }
    }
  },
  methods: {
    itemClick() {
      this.$emit('click', this.key)
    },
    copy() {
      this.$emit('copy')
    },
    del() {
      this.$emit('del')
    }
  }
}
</script>
<style lang="less">
.ty-cell-withimg {
  .weui-cell__hd {
    flex-grow: 0;
  }
  .avatar {
    display: block;
    margin-right: 10px;
    border-radius: 6px;
  }
  .home-title {
    display: -webkit-flex;
    display: flex;
  }
  .home-name {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  h4 {
    font-size: 15px;
    color: #333;
    font-weight: normal;
    height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  .home-desc {
    color: #999;
    font-size: 12px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .mint-button--primary,
  .mint-button--danger {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }
}
</style>


