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
          <span @click="copyUrl(item.id)" v-else>
            <span class="clouds clouds-download">
            </span>
          </span>
          <!-- <a class="down" target="_blank" :href="url+'file/download?fileId='+item.id">
            <span class="clouds clouds-download">
            </span>
          </a> -->
        </a>
      </div>
    </div>
    <div class="urlBox">
      <input type="text" id="url"/>
    </div>
  </div>
</template>
<script>
import 'core-js/fn/array/includes'
export default {
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
  mounted() {
    this.http = window.location.host
  },
  data() {
    return { url: this.$fileServer, http: '' }
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
    },
    copyUrl(id) {
      var http = this.http + this.url + 'file/download?fileId=' + id
      document.getElementById('url').value = http
      // this.$messagebox.prompt('请输入姓名').then(({ value, action }) => {
      //   debugger
      // })
      // var url = document.getElementsByClassName('mint-msgbox-message')
      // url.select()
      // document.execCommand('Copy')
      if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
        window.location.href = this.url + 'file/download?fileId=' + id
      } else {
        var url2 = document.getElementById('url')
        url2.select()
        document.execCommand('Copy')
        url2.blur()
        this.$messagebox('提示', '文件地址已复制，请使用外部浏览器打开！')
      }
    }
  }
}
</script>
<style lang="less">
.ty-file-list {
  position: relative;
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
  .urlBox{
    position: absolute;
    left: -200px;
  }
}
</style>

