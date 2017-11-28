<template>
  <div>
    <TyTitle content="这是标题"></TyTitle>
    <br>
    <TyTitle>
      <div slot="body">
        这是自定义slot 内容
      </div>
    </TyTitle>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>

