<template>
  <div>
    <TyHoursLabel />
    <TyHoursLabel :hoursInfo="value"/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: {
          hours: 2,
          minutes: 30
        }
      }
    }
  }
</script>
