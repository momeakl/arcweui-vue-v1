<template>
  <div class="ty-remark">
    <div class="content">
      <textarea class="weui-textarea" v-model="remark" placeholder="内容（50个字符以内）" rows="6" id="div_sign_in_remark_content"></textarea>
    </div>
    <TyPeoperList :clearBorderTop="true" v-on:open-contacts="initWxSdk" :show-add="true" :data="relatedPersons"></TyPeoperList>
    <TyFooter v-model="submitLoadingIndex" :btn-name="['取消','确定']" v-on:click="clickHandler"></TyFooter>
    <TyTopTips v-model="topTipsMsg"></TyTopTips>
  </div>
</template>
<script>
import 'core-js/fn/array/find'
import 'core-js/fn/array/find-index'

const TyFooter = () => import('@/components/common/TyFooter')
const TyTopTips = () => import('@/components/common/TyTopTips')
const TyPeoperList = () => import('@/components/common/PeoperList')

export default {
  name: 'TyRemark',
  props: {
    content: {
      type: String,
      default: ''
    },
    peoperList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    TyFooter,
    TyTopTips,
    TyPeoperList
  },
  data() {
    return {
      remark: this.content,
      relatedPersons: [],
      topTipsMsg: '',
      submitLoadingIndex: -1,
      isJsSdk: false,
      wxData: null
    }
  },
  mounted() {
    if (this.peoperList && this.peoperList.length > 0) {
      this.getContactsBaseInfo(this.peoperList, null)
    }
  },
  watch: {
    peoperList(newValue) {
      if (this.peoperList && this.peoperList.length > 0) {
        this.getContactsBaseInfo(this.peoperList, null)
      }
    },
    content(newValue) {
      this.remark = newValue
    }
  },
  methods: {
    clickHandler(index) {
      if (index === 1) {
        if (!this.remark.isNullOrEmpty()) {
          this.topTipsMsg = this.$TyApp.validate.remark
          this.submitLoadingIndex = -1
          return
        }
        //提交回复
        bus.$emit('reply-change', this.remark, this.relatedPersons)
      }
      this.$emit('reply-callback')
      this.relatedPersons = []
      this.submitLoadingIndex = -1
    },
    initWxSdk() {
      /* eslint-disable */
      if (!wx) {
        TyCommon.info('初始化人员信息')
        wx = require('weixin-js-sdk')
        window.wx = wx
        CodeSnippet.wxJsSdkInit((result) => {
          this.wxData = result
          this.isJsSdk = true
          this.openContacts()
        })
      } else {
        if (!this.wxData) {
          TyCommon.info('初始化人员信息')
          CodeSnippet.wxJsSdkInit((result) => {
            this.wxData = result
            this.isJsSdk = true
            this.openContacts()
          })
        } else {
          this.openContacts()
        }
      }
      /* eslint-disable */
    },
    openContacts() {
      if (!this.isJsSdk) {
        TyCommon.info('正在初始化人员信息')
        return
      }
      CodeSnippet.openWxContacts(this.relatedPersons, this.wxData, (result) => {
        if (result.deptIds) {
          this.getContactsBaseInfo('', result.deptIds)
        }
        this.relatedPersons = TyCommon.distinct(this.relatedPersons.concat(result.userList))
      })
    },
    getContactsBaseInfo(empIds, deptIds) {
      CodeSnippet.getContactsBaseInfo(empIds, deptIds, (res) => {
        if (res && res.data.code === 0) {
          this.relatedPersons = TyCommon.distinct(this.relatedPersons.concat(res.data.data))
        }
      })
    }
  }
}
</script>
<style lang="less">
.ty-remark {
  font-size: 15px;
  .content {
    padding: 10px 15px;
  }
  textarea {
    font-size: 1em;
    margin-bottom: 16px;
  }
  .peoper-list .title {
    color: black;
  }
}
</style>

