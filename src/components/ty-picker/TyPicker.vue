<template>
  <div class="ty-picker weui-cells">
    <mt-cell :title="title" is-link @click.native="showPop">
      <span v-text="label"></span>
    </mt-cell>
    <div :id="pickerContainer"></div>
  </div>
</template>
<script>
export default {
  name: 'TyPicker',
  props: {
    title: {
      type: String,
      default: ''
    },
    datas: {
      type: Array,
      default() {
        return []
      }
    },
    value: {
      type: [String, Number]
    }
  },
  data() {
    return {
      label: '',
      pickerContainer: new Date().getTime()
    }
  },
  mounted() {
    this.init()
  },
  watch: {
    datas(newValue) {
      this.init()
    },
    value(newValue) {
      this.init()
    }
  },
  methods: {
    init() {
      if (this.datas && this.datas.length > 0) {
        let item = this.datas.find(o => o.value === this.value)
        if (item) {
          this.label = item.label
        }
      }
    },
    showPop() {
      /* eslint-disable no-undef */
      weui.picker(this.datas, {
        container: this.pickerContainer,
        id: this.pickerContainer,
        defaultValue: [this.value],
        onConfirm: (result) => {
          this.label = result[0].label
          this.$emit('input', result[0].value)
          this.$emit('change', result[0].value)
        }
      })
    }
  }
}
</script>
<style lang="less">
.ty-picker {
}
</style>


