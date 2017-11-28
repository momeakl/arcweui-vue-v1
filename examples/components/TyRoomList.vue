<template>
  <div>
    <TyRoomList :roomList="roomList" v-on:room-cancle="roomCancle"></TyRoomList>
  </div>
</template>
<script>
export default {
  data() {
    return {
      roomList: []
    }
  },
  created() {
    bus.$off('room-selected')
  },
  mounted() {
    for (let index = 0; index < 10; index++) {
      this.roomList.push({
        name: '多媒体会议室' + index,
        isOccupied: index % 2,
        id: index
      })
    }
    bus.$on('room-selected', (data) => {
      this.roomSelected(data)
    })
  },
  methods: {
    roomSelected(value) {
      //这里延迟为了显示操作结果不被toast遮挡
      setTimeout(() => {
        TyCommon.msgBox('选择了:' + JSON.stringify(value))
      }, 1000)
    },
    roomCancle() {
      this.$toast('单击了取消')
    }
  }
}
</script>
