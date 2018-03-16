<template>
  <div class="ty-upload-file">
    <mt-cell v-if="showUpload" :title="attachmentLabel" is-link>
      <VueFileUpload label="上传附件" :url="serverUrl" :autoUpload="autoUpload" ref="vueFileUploader" :events="cbEvents"></VueFileUpload>
    </mt-cell>
    <mt-cell v-else :title="attachmentLabel" class="fileupload-display"></mt-cell>
    <div class="file-list">
      <TyFileList :files="fileList" :isShowDel="showUpload" v-on:del="delHandler"></TyFileList>
    </div>
  </div>
</template>
<script>
import VueFileUpload from 'vue-file-upload'

export default {
  name: 'UploadFile',
  props: {
    showUpload: {
      type: Boolean,
      default: true
    },
    files: {
      type: Array,
      default: []
    }
  },
  components: {
    VueFileUpload
  },
  watch: {
    files(newValue) {
      this.fileList = newValue
    }
  },
  data() {
    return {
      title: '附件',
      fileList: this.files,
      autoUpload: false,
      serverUrl: this.$fileServer + this.$TyApp.api.fileUpload,
      cbEvents: {
        onCompleteUpload: (file, response, status, header) => {
          if (response.code === 0) {
            this.fileList[this.fileList.length - 1].name = file.file.name
            this.fileList[this.fileList.length - 1].id = response.data
            this.fileList[this.fileList.length - 1].isUpload = false
          } else {
            TyCommon.info(response.message)
          }
        },
        onAddFileSuccess: (file) => {
          //todo 可以在这里提前获取文件信息
          if (file.file.size > 5120000) {
            TyCommon.info('上传文件大小5M以下')
            file.cancel()
          } else {
            let size = (file.size / 1000).toFixed(2)
            this.fileList.push({ isUpload: true, process: 0, name: file.file.name, size: size + 'K', id: '' })
            file.upload()
          }
        },
        onErrorUpload: (file, response, status, headers) => {
          if (!response || response.code !== 0) {
            this.fileList.pop()
            TyCommon.info(response ? response.message : '上传失败')
          }
        },
        onProgressUpload: (file, progress) => {
          this.fileList[this.fileList.length - 1].process = progress
        }
      }
    }
  },
  computed: {
    attachmentLabel: function () {
      return this.title + '(' + this.fileList.length + ')'
    }
  },
  mounted() { },
  methods: {
    delHandler(index) {
      if (this.fileList[index].isUpload) {
        this.fileList.splice(index, 1)
        return
      }
      //这里还存在些不合理，File服务独立的时候，服务器的地址配置 应该是独立配置
      this.$http.post(this.$TyApp.api.fileDelete + 'fileIds=' + this.fileList[index].id, {}).then((res) => {
        if (res.data.code === 0) {
          this.fileList.splice(index, 1)
        } else {
          TyCommon.info(res.data.message)
        }
      }).catch((error) => {
        TyCommon.info(error.message)
      })
    }
  }
}
</script>
<style lang="less">
  .vue-file-upload{
    position: relative;
    overflow: hidden;
    display: inline-block;
    color:#fff;
    padding:6px 12px;
    background-color:#5cb85c;
    border-color: #4cae4c;
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
  }
  .vue-file-upload input[type=file]{
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    opacity: 0;
    -ms-filter: alpha(opacity=0);
    font-size: 200px;
    direction: ltr;
    cursor: pointer;
  }

.ty-upload-file {
  .vue-file-upload {
    color: #999 !important;
    background-color: white !important;
    border-color: white !important;
    font-size: 15px !important;
    padding: 0px !important;
  }
  .fileupload-display {
    .mint-cell-text {
      color: #999;
    }
  }
}
</style>


