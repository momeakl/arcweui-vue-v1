<template>
  <a class="ty-cell-new weui-cell weui-cell_access" href="javascript:;" @click="click">
    <slot>
      <div class="weui-cell__hd" v-if="avatar">
        <img :width="avatarWidth" class="avatar" :height="avatarHeight" alt="图片" v-lazy="avatar">
      </div>
    </slot>
    <div class="weui-cell__bd content">
      <div class="weui-cell__bd">
        <h4 class="title" v-html="title"></h4>
      </div>
      <p class="desc" v-html="summary" v-if="summary"></p>
      <p class="desc" v-html="body" v-if="body">
      </p>
    </div>
    <div v-if="label || btnName" class="side">
      <div class="time-bar" v-if="label">
        <span class="desc" v-html="label"></span>
      </div>
      <div class="option desc text-center">
        <button v-if="btnName" class="weui-btn weui-btn_primary size-md" @click.stop="btnClick">
          {{btnName}}
        </button>
        <p v-if="side" v-html="side">
        </p>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  name: 'TyCellSuper',
  props: {
    avatar: {
      type: String
    },
    avatarWidth: {
      type: Number,
      default: 40
    },
    avatarHeight: {
      type: Number,
      default: 40
    },
    title: {
      type: String
    },
    summary: {
      type: String
    },
    body: {
      type: String
    },
    label: {
      type: String
    },
    btnName: {
      type: String
    },
    side: {
      type: String
    },
    tag: {
      type: Object
    }
  },
  data() {
    return {}
  },
  methods: {
    click() {
      this.$emit('click', this.tag)
    },
    btnClick() {
      this.$emit('btn-click', this.tag)
    }
  }
}
</script>
<style lang="less">
.ty-cell-new {
  align-items: flex-start;
  .weui-cell__hd {
    flex-grow: 0;
  }
  .content {
    margin-top: -0.3em;
  }
  .avatar {
    border-radius: 6px;
    margin-right: 10px;
  }
  .title {
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
  .desc {
    font-size: 12px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-break: break-all;
  }
  .size-md {
    font-size: 12px;
    line-height: 2.5;
  }
  .time-bar {
    position: relative;
    text-align: right;
  }
  .side {
    text-align: center;
  }
  .option {
    margin-top: 3px;
  }
}
</style>


