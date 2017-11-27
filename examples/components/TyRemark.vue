<template>
  <div>
    <TyRemark :content="content" :peoperList="peoperList"></TyRemark>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: '',
      peoperList: [
        {
          name: '张三',
          avatar: 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar',
          id: 1
        }
      ]
    }
  }
}
</script>
