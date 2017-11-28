<template>
  <div class="ty-room-list">
    <div class="room-container">
      <template v-for="(item,index) in roomList">
        <TyGeneralCell :key="index" :content="getContent(item)" v-on:click="itemClick(index)" :slotSide="true">
          <span slot="side" class="status-circle" :class="[item.isOccupied==0?'room-nomal':'room-use']"></span>
        </TyGeneralCell>
      </template>
    </div>
    <TyFooterOneButton type="default" v-on:click='cancle' name="返回"></TyFooterOneButton>
  </div>
</template>
<script>
export default {
  name: 'TyRoomList',
  props: {
    roomList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
    getContent(value) {
      return '<span class="clouds clouds-projector"></span><span>' + value.name + '</span>'
    },
    itemClick(index) {
      bus.$emit('room-selected', this.roomList[index])
      this.cancle()
    },
    cancle() {
      this.$emit('room-cancle')
    }
  }
}
</script>
<style lang="less">
.ty-room-list {
  .status-circle {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 50%;
    margin-left: 5px;
    margin-right: 9px;
    position: relative;
    top: -1px;
  }
  .room-nomal {
    background: #26a2ff;
  }

  .room-use {
    background: #e35d5d;
  }

  .clouds-projector {
    margin-right: 5px;
    &:before {
      top: 2px;
      position: relative;
    }
  }
  .room-container {
    margin-bottom: 63px;
  }
}
</style>

