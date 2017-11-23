<template>
  <div>
    <TyFileList :files="files1" v-on:del="del"/>
    <TyFileList :files="files2" :isShowDel="false"/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        files1: [
          {id: '1', name: 'Excel文件.xls', size: '80'},
          {id: '2', name: 'PNG图片.png', size: '90'},
          {id: '3', name: 'JPG图片.jpg', size: '90'},
          {id: '4', name: '压缩包.zip', size: '100'},
          {id: '5', name: 'PDF文件.pdf', size: '110'},
          {id: '6', name: 'PPT文件.ppt', size: '120'},
          {id: '7', name: '文本文件.txt', size: '120'},
          {id: '8', name: 'Word文件.doc', size: '120'}
        ],
        files2: [
          {id: '1', name: 'Excel文件.xls', size: '80'},
          {id: '2', name: 'PNG图片.png', size: '90'},
          {id: '3', name: 'JPG图片.jpg', size: '90'},
          {id: '4', name: '压缩包.zip', size: '100'},
          {id: '5', name: 'PDF文件.pdf', size: '110'},
          {id: '6', name: 'PPT文件.ppt', size: '120'},
          {id: '7', name: '文本文件.txt', size: '120'},
          {id: '8', name: 'Word文件.doc', size: '120'}
        ]
      }
    },
    methods: {
      del(index) {
        //提示框
        TyCommon.success('删除：' + this.files1[index].name)
        //删除数据
        this.files1.splice(index, 1)
      }
    }
  }
</script>
