<template>
  <div class="examples-index">
    <div>
      <mt-cell title="SuccessToast" is-link @click.native="toast('success')">
        <i class="fa fa-check-square" slot="icon"></i>
      </mt-cell>
      <mt-cell title="ErrorToast" is-link @click.native="toast('error')">
        <i class="fa fa-window-close" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyImg" is-link @click.native="clickHandler('TyImg')">
        <i class="fa fa-photo" slot="icon"></i>
      </mt-cell>
      <mt-cell title="PeoperList" is-link @click.native="clickHandler('PeoperList')">
        <i class="fa fa-user-plus" slot="icon"></i>
      </mt-cell>
      <mt-cell title="Persion" is-link @click.native="clickHandler('Persion')">
        <i class="fa fa-user-plus" slot="icon"></i>
      </mt-cell>
      <mt-cell title="SeparateLines" is-link @click.native="clickHandler('SeparateLines')">
        <i class="fa fa-terminal" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyEmpty" is-link @click.native="clickHandler('TyEmpty')">
        <i class="fa fa-chain-broken" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyAutoLoad" is-link @click.native="clickHandler('TyAutoLoad')">
        <i class="fa fa-refresh" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyCell" is-link @click.native="clickHandler('TyCell')">
        <i class="fa fa-bars" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyCellSuper" is-link @click.native="clickHandler('TyCellSuper')">
        <i class="fa fa-list" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyCellWithImg" is-link @click.native="clickHandler('TyCellWithImg')">
        <i class="fa fa-th-list" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyCircle" is-link @click.native="clickHandler('TyCircle')">
        <i class="fa fa-circle-o" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyContent" is-link @click.native="clickHandler('TyContent')">
        <i class="fa fa-fire" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyDatetimePicker" is-link @click.native="clickHandler('TyDatetimePicker')">
        <i class="fa fa-calendar" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyFaceBox" is-link @click.native="clickHandler('TyFaceBox')">
        <i class="fa fa-user-secret" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyFileList" is-link @click.native="clickHandler('TyFileList')">
        <i class="fa fa-list" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyFooter" is-link @click.native="clickHandler('TyFooter')">
        <i class="fa fa-columns" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyFooterOneButton" is-link @click.native="clickHandler('TyFooterOneButton')">
        <i class="fa fa-th-large" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyGeneralCell" is-link @click.native="clickHandler('TyGeneralCell')">
        <i class="fa fa-bars" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyHoursLabel" is-link @click.native="clickHandler('TyHoursLabel')">
        <i class="fa fa-calendar-check-o" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyLabel" is-link @click.native="clickHandler('TyLabel')">
        <i class="fa fa-bars" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyListItem" is-link @click.native="clickHandler('TyListItem')">
        <i class="fa fa-check-square-o" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyPicker" is-link @click.native="clickHandler('TyPicker')">
        <i class="fa fa-bolt" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyPrompt" is-link @click.native="clickHandler('TyPrompt')">
        <i class="fa fa-text-width" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyTopTips" is-link @click.native="clickHandler('TyTopTips')">
        <i class="fa fa-comment-o" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyRemark" is-link @click.native="clickHandler('TyRemark')">
        <i class="fa fa-pencil-square-o" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyReplyContent" is-link @click.native="clickHandler('TyReplyContent')">
        <i class="fa fa-reply" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyReplyList" is-link @click.native="clickHandler('TyReplyList')">
        <i class="fa fa-list" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyRoomList" is-link @click.native="clickHandler('TyRoomList')">
        <i class="fa fa-list" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TySearch" is-link @click.native="clickHandler('TySearch')">
        <i class="fa fa-search" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyTextarea" is-link @click.native="clickHandler('TyTextarea')">
        <i class="fa fa-text-width" slot="icon"></i>
      </mt-cell>
      <mt-cell title="TyTitle" is-link @click.native="clickHandler('TyTitle')">
        <i class="fa fa-bars" slot="icon"></i>
      </mt-cell>
      <mt-cell title="UploadFile" is-link @click.native="clickHandler('UploadFile')">
        <i class="fa fa-bars" slot="icon"></i>
      </mt-cell>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.$parent.$parent.goBackUrl = true
  },
  methods: {
    clickHandler(name) {
      this.$parent.$parent.title = name
      this.$parent.$parent.goBackUrl = false
      this.$router.push(name)
    },
    toast(type) {
      if (type === 'success') {
        TyCommon.success('成功')
      }
      else if (type === 'error') {
        TyCommon.error('失败')
      }
    }
  }
}
</script>


