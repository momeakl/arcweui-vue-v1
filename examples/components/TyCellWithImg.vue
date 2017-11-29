<template>
  <div>
    <TyCellWithImg :title="tag.title" :desc="tag.desc" :label="tag.label" :tag="tag" :showButton="true" :avatar="avatar" v-on:click="itemClick" v-on:copy="copy" v-on:del="del"></TyCellWithImg>
    <TyCellWithImg :title="tag.title" :desc="tag.desc" :label="tag.label" :tag="tag" :showButton="true" avatar="https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar" v-on:click="itemClick" v-on:copy="copy" v-on:del="del"></TyCellWithImg>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tag: {
        title: '标题',
        desc: '描述',
        label: '这是标签'
      },
      avatar: ''
    }
  },
  methods: {
    itemClick() {
      this.$toast('单击')
    },
    copy() {
      this.$toast('复制')
    },
    del() {
      this.$toast('删除')
    }
  }
}
</script>
