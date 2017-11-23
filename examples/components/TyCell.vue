<template>
  <div>
    <TyCell :id="1" avatar="https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar" title="cell名称" label="label" desc="desc" :isShowDel="true" :sortIndex="0" v-on:del="del"></TyCell>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    del(id, sortIndex) {
      TyCommon.success('删除id：' + id + ',sortIndex:' + sortIndex)
    }
  }
}
</script>
