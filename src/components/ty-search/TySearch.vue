<template>
  <div class="ty-search weui-search-bar" :class="{'weui-search-bar_focusing':isShow}">
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
    <a href="javascript:" class="weui-search-bar__cancel-btn" @click="cancel">搜索</a>
  </div>
</template>
<script>
export default {
  name: 'TySearch',
  props: {
    value: {
      type: String,
      default: ''
    },
    readonly: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
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
      this.$emit('input', newValue)
      if (newValue.length === 0) {
        this.search()
      }
    },
    readonly(newValue) {
      this.setInputReadonly()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setInputReadonly()
    })
  },
  methods: {
    setInputReadonly() {
      this.searchDom = document.getElementById('txtSearch')
      if (this.readonly) {
        this.searchDom.setAttribute('readonly', 'readonly')
        document.getElementById('clearIcon').style.display = 'block'
      } else {
        this.searchDom.removeAttribute('readonly')
      }
    },
    search(isSearch) {
      if (isSearch && (this.searchText.length === 0 || /^\s+$/.test(this.searchText))) {
        TyCommon.info('请输入搜索内容')
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
      this.search()
    }
  }
}
</script>
<style lang="less">
.ty-search {
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 100;
}
</style>
