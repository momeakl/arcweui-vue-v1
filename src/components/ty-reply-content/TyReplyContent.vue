<template>
  <div class="ty-reply-content" @click="setInputFocus">
    <div class="footer-panel" @click.stop="cancleInputFocus">
      <TyFaceBox v-model="isFacePanelShow" v-on:selected-face="selectedFace"></TyFaceBox>
      <div class="footer-input-panel">
        <div class="weui-cells">
          <div id="tyContent" class="content" :class="!isFocus?'placehodler':''" tabindex="1" contentEditable=true @click="checkInput">
            点击输入内容
          </div>
        </div>
      </div>
      <div class="menu-bars">
        <div>
          <span class="clouds-at" @click.stop="initWxSdk"></span>
          <span class="clouds-smile" @click.stop="showFaceBox"></span>
        </div>
      </div>
      <TyFooter v-model="submitLoadingIndex" :btn-name="['取消','发送']" v-on:click="clickHandler"></TyFooter>
    </div>
    <TyTopTips v-model="topTipsMsg"></TyTopTips>
  </div>
</template>
<script>
let contentDom = null

export default {
  name: 'TyReplyContent',
  data() {
    return {
      submitLoadingIndex: -1,
      isFacePanelShow: false,
      isJsSdk: false,
      wxData: null,
      atPeople: [],
      topTipsMsg: '',
      isFocus: false
    }
  },
  mounted() {
    this.isIphone = TyCommon.isIphone()
    this.$nextTick(() => {
      contentDom = document.getElementById('tyContent')
      contentDom.onblur = () => {
        if (contentDom.innerHTML.trim().length === 0) {
          contentDom.innerHTML = '点击输入内容'
          this.isFocus = false
        }
      }
    })
  },
  methods: {
    clickHandler(index) {
      if (index === 1) {
        if (!contentDom.innerHTML.isNullOrEmpty()) {
          this.topTipsMsg = this.$TyApp.validate.replyContent
          this.submitLoadingIndex = -1
          return
        }
        //提交回复
        bus.$emit('reply-change', contentDom.innerHTML, this.atPeople.map((value) => { return value.id }))
      }
      this.$emit('reply-callback')
      contentDom.innerHTML = '点击输入内容'
      this.isFocus = false
      this.atPeople = []
      this.submitLoadingIndex = -1
    },
    showFaceBox() {
      this.isFacePanelShow = true
    },
    initWxSdk() {
      if (!wx) {
        TyCommon.info('初始化人员信息')
      } else {
        TyCommon.info('正在初始化人员信息')
        CodeSnippet.wxJsSdkInit((result) => {
          this.wxData = result
          this.isJsSdk = true
          this.openContacts()
        })
      }
    },
    openContacts() {
      if (!this.isJsSdk) {
        TyCommon.info('正在初始化人员信息')
        return
      }
      CodeSnippet.openWxContacts(this.atPeople, this.wxData, (result) => {
        if (result.deptIds) {
          this.getContactsBaseInfo('', result.deptIds)
        }
        this.atPeople = this.atPeople.concat(result.userList)
        this.checkInput()
        contentDom.innerHTML += '&nbsp;' + result.userList.map((value) => { return '@' + value.name }).join(' ') + '&nbsp;'
      })
    },
    getContactsBaseInfo(empIds, deptIds) {
      CodeSnippet.getContactsBaseInfo(empIds, deptIds, (res) => {
        if (res && res.data.code === 0) {
          if (deptIds) {
            this.atPeople = this.atPeople.concat(res.data.data)
          }
          this.checkInput()
          contentDom.innerHTML += '&nbsp;' + res.data.data.map((value) => { return '@' + value.name }).join(' ') + '&nbsp;'
        }
      })
    },
    selectedFace(value) {
      this.checkInput()
      //找到最后一个元素
      let length = contentDom.childNodes.length
      if (length > 0) {
        let lastChild = contentDom.childNodes[length - 1]
        if (lastChild.innerHTML) {
          if (lastChild.innerHTML.startsWith('<br>')) {
            lastChild.innerHTML = ''
          }
          lastChild.innerHTML += value
        } else {
          contentDom.innerHTML += value
        }
      } else {
        contentDom.innerHTML = value
      }
      let range = document.createRange()
      range.selectNodeContents(contentDom)
      range.collapse(false)
      let sel = window.getSelection()
      sel.removeAllRanges()
      sel.addRange(range)
    },
    checkInput() {
      if (contentDom.innerHTML.trim() === '点击输入内容') {
        contentDom.innerHTML = ''
        this.isFocus = true
      }
    },
    setInputFocus() {
      //解决ios整体上推 显示底部操作栏
      this.isFacePanelShow = false
      //光标定位文本最后
      if (window.getSelection) {
        contentDom.focus()
        let range = window.getSelection()
        range.selectAllChildren(contentDom)
        range.collapseToEnd()
      }
      this.checkInput()
      setTimeout(() => {
        //适应大小屏幕 先让底部操作栏滚动到可视区域 ，然后再让输入框滚动到可视区域
        let footerPanel = document.querySelector('.ty-footer')
        footerPanel.scrollIntoView()
        footerPanel.scrollIntoViewIfNeeded()
        setTimeout(() => {
          contentDom.scrollIntoView()
          contentDom.scrollIntoViewIfNeeded()
        }, 300)
      }, 300)
    },
    cancleInputFocus() { }
  }
}
</script>
<style lang="less">
.ty-reply-content {
  height: 100%;
  textarea {
    width: 100%;
    border: none;
  }
  .menu-bars {
    position: absolute;
    bottom: 61px;
    width: 100%;
    text-align: right;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    color: #999;
    div {
      margin-right: 20px;
      span {
        position: relative;
        margin-left: 10px;
      }
      .face {
        font-size: 20px;
        top: -3px;
      }
    }
  }
  .content {
    font-size: 20px;
    padding-left: 5px;
    padding-right: 5px;
    min-height: 100px;
    img {
      width: 20px;
    }
  }
  .placehodler {
    font-size: 14px;
    color: #ccc;
    padding-top: 10px;
  }
  .footer-panel {
    position: absolute;
    width: 100%;
    height: auto;
    bottom: 0px;
  }

  .footer-input-panel {
    position: absolute;
    bottom: 100px;
    width: 100%;
    .weui-cells {
      &:before {
        left: 0px;
      }
    }
  }
}
</style>


