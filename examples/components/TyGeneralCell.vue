<template>
  <div>
    <TyGeneralCell content="demo1"/>
    <TyGeneralCell content="demo2" slotSide>
      <div slot="side" style="color: red; margin-right: 10px; font-size: 18px;">*</div>
    </TyGeneralCell>
    <TyGeneralCell content="demo3" slotDesc>
      <div slot="desc">777</div>
    </TyGeneralCell>
  </div>
</template>
<script>
  //author 32237384@qq.com
  let VM
  export default {
    components: {},
    mounted() {
      VM = this
    },
    watch: {},
    data() {
      return {}
    },
    methods: {}
  }
</script>
