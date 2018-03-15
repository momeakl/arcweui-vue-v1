<template>
  <div class="persion-search weui-search-bar" :class="[{'weui-search-bar_focusing':isShow},prefixCls]">
    <div class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <input type="search" id="txtSearch" @click="showInputPanel" v-model="searchText" class="weui-search-bar__input" @search.stop="search(true)" placeholder="搜索" />
        <a href="javascript:" id="clearIcon" class="weui-icon-clear" @click="clearText"></a>
      </div>
      <label for="search_input" class="weui-search-bar__label" @click="showInputPanel">
        <i class="weui-icon-search"></i>
        <span>搜索</span>
      </label>
    </div>
    <a href="javascript:" class="weui-search-bar__cancel-btn" @click="cancel">取消</a>
  </div>
</template>
<script>
export default {
  name: 'Search',
  props: {
    value: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      prefixCls: 'arc-weui-search',
      searchText: this.value,
      isShow: false,
      searchDom: null
    }
  },
  watch: {
    value(newValue) {
      this.searchText = newValue
    },
    searchText(newValue) {
      if (newValue.length > 0) {
        this.$emit('search', newValue)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.searchDom = document.getElementById('txtSearch')
      if (this.readonly) {
        this.searchDom.setAttribute('readonly', 'readonly')
        document.getElementById('clearIcon').style.display = 'block'
      }
    })
  },
  methods: {
    search(isSearch) {
      if (isSearch && (this.searchText.length === 0 || /^\s+$/.test(this.searchText))) {
        this.$msg.info('请输入搜索内容')
        return
      }
      this.$emit('search')
    },
    showInputPanel() {
      this.isShow = true
      this.searchDom.focus()
      this.$emit('click')
    },
    clearText() {
      this.searchText = ''
    },
    cancel() {
      this.isShow = false
      this.clearText()
      this.$emit('searchCancel')
    },
    invokCancel() {
      this.isShow = false
      this.clearText()
    }
  }
}
</script>

<style lang="less">
  .persion-search {
    flex: 0 0 auto;
  }
</style>
