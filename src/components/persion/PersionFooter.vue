<template>
  <div v-if="revSelect.length > 0" class="persion-footer clear-border-mt weui-cells weui-cells-clear-left">
    <mt-navbar>
      <div class="footLeft">
          <div v-for="(item,index) in revSelect"  class="item" @click="removeItem(item)">
            <template v-if="item.dept">
              <img v-lazy="lazyDeptObj" alt="头像" width="24" height="24" style="vertical-align: middle;border-radius: 4px;">
              {{item.dept.deptName}}
            </template>
            <template  v-else >
              <img v-if="item.header" :src="item.header"  width="30" height="30" style="vertical-align: middle;border-radius: 4px;">
              <img v-else v-lazy="lazyHeaderObj"   width="30" height="30" style="vertical-align: middle;border-radius: 4px;">
            </template>
          </div>
      </div>
      <div class="footRight" @click="confirm()">
        确定
      </div>
    </mt-navbar>
  </div>
</template>
<script>
export default {
  name: 'PersionFooter',
  props: {
    selected: {
      type: Array,
      default: function () {
        return ['存', '提交']
      }
    },
    value: {
      type: Number,
      default: -1
    }
  },
  watch: {
    value(newValue) {
      this.status = newValue
      if (newValue !== -1) {
        this.$emit('click', newValue)
      }
    }
  },
  computed: {
    revSelect: {
      get: function () {
        let [ ...objs ] = this.selected
        return objs.reverse()
      }
    }
  },
  data() {
    return {
      status: this.value,
      lazyDeptObj: {
        src: require('../../assets/img/icon-dept.png'),
        error: require('../../assets/img/icon-dept.png'),
        loading: require('../../assets/img/icon-dept.png')
      },
      lazyHeaderObj: {
        src: require('../../assets/img/head.png'),
        error: require('../../assets/img/head.png'),
        loading: require('../../assets/img/head.png')
      }
    }
  },
  methods: {
    clickHandler(index) {
      this.$emit('input', index)
    },
    removeItem(item) {
      this.$emit('removeItem', item)
    },
    confirm() {
      this.$emit('confirm')
    }
  }
}
</script>

<style lang="less">
.persion-footer {
  /*position: fixed;*/
  /*bottom: 0px;*/
  width: 100%;
  height: 46px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}
.footLeft {
  height: 100%;
  width: 80%;
  overflow: hidden;
  overflow-x: scroll;
  line-height: 30px;
  white-space: nowrap;
  text-align: justify;
  margin-top: 8px;
}
.footRight {
  text-align: justify;
  margin-top: 3px;
  margin: 10px 20px;

}
  .item {
    margin-left: 5px;
    margin-right: 5px;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    text-align: center;
    background-color: #f6f8fa;
    max-width: 120px;
    padding-left: 5px;
    padding-right: 5px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

</style>


