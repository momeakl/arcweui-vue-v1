<template>
  <div>
    <TyTextarea v-model="inputValue" :maxLength="20"></TyTextarea>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  }
}
</script>

