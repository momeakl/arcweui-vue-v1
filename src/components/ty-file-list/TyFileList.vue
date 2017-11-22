<template>
  <div class="ty-file-list weui-panel__bd">
    <div class="weui-media-box weui-media-box_small-appmsg">
      <div class="weui-cells">
        <a v-for="(item,index) in files" :key="item.name" class="weui-cell weui-cell_access" href="javascript:;">
          <div class="weui-cell__hd">
            <img :src="getFileIcon(index)" alt="" class="type-img">
            <span v-show="item.isUpload" class="icon ion-upload"></span>
          </div>
          <div class="weui-cell__bd weui-cell_primary">
            <div>
              <p class="title">
                <span v-html="item.name"></span>
              </p>
              <p class="size" v-text="item.size.replace('.00','')"></p>
            </div>
            <mt-progress v-show="item.isUpload" :value="item.process" :bar-height="3"></mt-progress>
          </div>
          <span v-if="isShowDel" class="del clouds-delete" @click="delHandler(index)"></span>
          <a class="down" target="_blank" v-else :href="url+'file/download?fileId='+item.id">
            <span class="clouds clouds-download">
            </span>
          </a>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import 'core-js/fn/array/includes'
export default {
  name: 'TyFileList',
  props: {
    files: {
      type: Array,
      default: []
    },
    isShowDel: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return { url: this.$fileServer }
  },
  methods: {
    getFileIcon(index) {
      let fileName = this.files[index].name
      let fileType = 'zip.png'
      let ext = fileName.substring(fileName.lastIndexOf('.')).toLowerCase()
      if (['.xls', '.xlsx'].includes(ext)) {
        fileType = 'excel.png'
      } else if (ext === '.pdf') {
        fileType = 'pdf.png'
      } else if (['.ppt', '.pptx'].includes(ext)) {
        fileType = 'ppt.png'
      } else if (ext === '.txt') {
        fileType = 'text.png'
      } else if (['.doc', '.docx'].includes(ext)) {
        fileType = 'word.png'
      } else if (['.png', '.bmp', '.gif', '.jpg', '.jpeg'].includes(ext)) {
        fileType = 'img.png'
      }
      return 'static/filetype/' + fileType
    },
    delHandler(index) {
      this.$emit('del', index)
    }
  }
}
</script>
<style lang="less">
.ty-file-list {
  .weui-cell_primary {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 13px;
    .title {
      white-space: nowrap;
      width: 60%;
      float: left;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .size {
      margin-left: 65%;
      color: #b2b2b2;
    }
  }
  .down {
    color: #333;
  }
  .del {
    color: #999;
  }
  .ion-upload {
    color: #26a2ff;
    font-size: 20px;
    margin-right: 5px;
    position: absolute;
    z-index: 2;
    top: 20px;
    left: 20px;
  }
  .type-img {
    width: 32px;
    margin-right: 10px;
    display: block;
    position: relative;
    z-index: 1;
  }
  .mt-progress {
    height: 3px;
    line-height: 3px;
  }
}
</style>

