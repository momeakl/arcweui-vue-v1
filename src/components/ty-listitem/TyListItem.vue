<template>
  <TyCellSuper class="ty-list-item" :title="title" :body="content" :label="label" :side="side" v-on:click="itemClick">
    <div class="weui-cells_checkbox" v-if="showChecked" @click.stop="checked">
      <label class="weui-cell weui-check__label">
        <input type="checkbox" v-model="selected" class="weui-check" />
        <i class="weui-icon-checked"></i>
      </label>
    </div>
  </TyCellSuper>
</template>
<script>
export default {
  name: 'TyListItem',
  props: {
    showChecked: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    label: {
      type: String
    },
    value: {
      type: Boolean,
      default: false
    },
    side: {
      type: String
    }
  },
  watch: {
    value(newValue) {
      this.selected = newValue
    },
    selected() {
      this.$emit('input', this.selected)
      this.$emit('selected')
    }
  },
  data() {
    return {
      selected: this.value
    }
  },
  methods: {
    itemClick() {
      this.$emit('click')
    },
    checked() {
    }
  }
}
</script>
<style lang="less">
.ty-list-item {
  .weui-cells_checkbox .weui-cell {
    padding: 0px 5px 0px 0px;
  }
}
</style>


