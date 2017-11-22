<template>
  <div class="peoper-list" :class="{'weui-cells':!clearBorderTop}">
    <mt-cell :title="title" v-if="showSwitch">
      <label v-text="labeleNoticePeopleTitle"></label>&nbsp;&nbsp;
      <mt-switch v-model="loadNoticePeopleVisible"></mt-switch>
    </mt-cell>
    <div class="title" v-else>
      <span v-text="title"></span>
      <span class="cus-func">
        <slot name="func"></slot>
      </span>
    </div>
    <div class="item-list">
      <template v-for="(item,index) in noticePeople">
        <TyImg :name="item.name" :src="item.avatar" :key="item.id" v-on:click="removeItem(index)"></TyImg>
      </template>
      <div class="plus" v-if="showAdd" @click="add">
        <img :src="plusImg" style="width:26px;" />
        <p style="font-size:12px;">&nbsp;</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PeoperList',
  props: {
    title: {
      type: String,
      default: '相关人'
    },
    data: {
      type: Array,
      default() {
        return []
      }
    },
    showAdd: {
      type: Boolean,
      default: false
    },
    showSwitch: {
      type: Boolean,
      default: false
    },
    isLazy: {
      type: Boolean,
      default: false
    },
    clearBorderTop: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Number,
      default: 0
    },
    switchLabel: {
      type: String,
      default: '加载上次'
    }
  },
  data() {
    return {
      loadNoticePeopleVisible: false,
      labeleNoticePeopleTitle: this.switchLabel,
      noticePeople: this.data,
      plusImg: require('../../assets/img/addpro.png')
    }
  },
  watch: {
    loadNoticePeopleVisible(newValue) {
      this.loadNoticePeople()
    },
    data(newValue) {
      this.noticePeople = newValue
    }
  },
  methods: {
    loadNoticePeople() {
      if (!this.loadNoticePeopleVisible) {
        this.labeleNoticePeopleTitle = this.switchLabel
        if (this.isLazy) {
          this.noticePeople.splice(this.columns)
        } else {
          this.noticePeople.splice(0, this.noticePeople.length)
        }
      } else {
        this.labeleNoticePeopleTitle = '取消加载'
        this.$emit('load-last-data')
      }
    },
    removeItem(index) {
      if (this.isLazy) {
        return
      }
      this.noticePeople.splice(index, 1)
    },
    add() {
      this.$emit('open-contacts')
    }
  }
}
</script>
<style lang="less">
.peoper-list {
  display: inline-table;
  width: 100%;
  .item-list {
    clear: both;
    padding-left: 15px;
    height: 100%;
    display: inline-table;
    img {
      border: none;
      width: 40px;
      border-radius: 5px;
      position: relative;
      margin-bottom: 5px;
    }
    .plus {
      display: inline-block;
      text-align: center;
      position: relative;
      margin-right: 10px;
      img {
        border: 1px dashed #dddddd;
        text-align: center;
        border-radius: 5px;
        color: #cccccc;
        padding: 6px 6px 5px 6px;
      }
    }
  }
  .title {
    color: #999;
    padding: 0 15px 10px 15px;
    font-size: 15px;
    .cus-func {
      float: right;
    }
  }
}
</style>

