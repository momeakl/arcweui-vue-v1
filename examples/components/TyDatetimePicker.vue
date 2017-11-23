<template>
  <div>
    <TyDatetimePicker :value="value1" v-on:input="(e) => value1=e"/>
    <TyDatetimePicker title="生日" type="datetime" :value="value2" v-on:input="(e) => value2=e"/>
    <TyDatetimePicker title="开始日期" type="date" :value="value3" v-on:input="(e) => value3=e"/>
    <TyDatetimePicker title="时间" type="time" :value="value4" v-on:input="(e) => value4=e"/>
    <TyDatetimePicker title="2000年以后" :startYear="2000" type="datetime" :value="value5" v-on:input="(e) => value5=e"/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: '2017-11-23',
        value4: '',
        value5: ''
      }
    }
  }
</script>
