<template>
  <div>
    <PeoperList title="相关人" :data="datas" :showAdd="true"></PeoperList>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datas: [
        {
          name: '张三',
          avatar: 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar',
          id: 1
        },
        {
          name: '张三2',
          avatar: 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avata1r',
          id: 2
        }
      ]
    }
  }
}
</script>

