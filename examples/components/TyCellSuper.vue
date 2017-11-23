<template>
  <div>
    <TyCellSuper btnName="test " v-on:click="cellNewClick " v-on:btn-click="cellNewBtnClick " :tag="cellNew " :avatar="cellNew.avatar " :title="cellNew.title " :label="cellNew.label " :summary="cellNew.summary " :body="cellNew.body "></TyCellSuper>
    <TyCellSuper v-on:click="cellNewClick " v-on:btn-click="cellNewBtnClick " :tag="cellNew " :avatar="cellNew.avatar " :title="cellNew.title " :label="cellNew.label " :summary="cellNew.summary " :body="cellNew.body "></TyCellSuper>
    <TyCellSuper v-on:click="cellNewClick " v-on:btn-click="cellNewBtnClick " :tag="cellNew " :title="cellNew.title " :label="cellNew.label " :summary="cellNew.summary " :body="cellNew.body "></TyCellSuper>
    <TyCellSuper v-on:click="cellNewClick " v-on:btn-click="cellNewBtnClick " :tag="cellNew " :title="cellNew.title " :label="cellNew.label " :summary="cellNew.summary " :body="cellNew.body " btnName="通过1 "></TyCellSuper>
    <TyCellSuper v-on:click="cellNewClick " v-on:btn-click="cellNewBtnClick " :tag="cellNew " :title="cellNew.title " :label="cellNew.label " :summary="cellNew.summary " :body="cellNew.body " :side="cellNew.side "></TyCellSuper>
    <TyCellSuper v-on:click="cellNewClick " v-on:btn-click="cellNewBtnClick " :tag="cellNew " :title="cellNew.title " :summary="cellNew.summary " :body="cellNew.body " btnName="复制 "></TyCellSuper>
    <TyCellSuper v-on:click="cellNewClick " v-on:btn-click="cellNewBtnClick " :tag="cellNew " :avatar="cellNew.avatar " :title="cellNew.title " :summary="cellNew.summary " :body="cellNew.body " btnName="复制 "></TyCellSuper>
    <TyCellSuper v-on:click="cellNewClick " v-on:btn-click="cellNewBtnClick " :tag="cellNew " :avatar="cellNew.avatar " :title="cellNew.title " :body="cellNew.body " btnName="复制1 "></TyCellSuper>
    <TyCellSuper v-on:click="cellNewClick " v-on:btn-click="cellNewBtnClick " :tag="cellNew " :avatar="cellNew.avatar " :title="cellNew.title " :body="cellNew.body " :label="cellNew.label " side="<span class='text-primary'>已通过</span>"></TyCellSuper>
    <TyCellSuper v-on:click="cellNewClick " v-on:btn-click="cellNewBtnClick " :tag="cellNew " :avatar="cellNew.avatar " :title="cellNew.title " :body="testbody" :label="cellNew.label " side="<span class='text-primary'>已通过1</span>">
      <div>这里是solt</div>
    </TyCellSuper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cellNew: {
        avatar: 'http://p.qlogo.cn/bizmail/nKXoBkuDxH72SwIZnibP18Xa6dKUa6rv71SKkeX0oydOwbibo3Pw0ydw/',
        title: ' 事假_测试线_娄咏梅',
        label: '2017-09-21',
        summary: '17-09-21 09:30 ~ 17-09-21 10:30',
        body: '8小时',
        side: '<span class="icon ion-ios-location-outline ty-cell-label" style="float:right;">&nbsp;隆中</span>'
      },
      testbody: '{"deptIds":null,"userList":[{"id":"chengxinjing","name":"程新敬","avatar":"http://p.qlogo.cn/bizmail/b0eYTIIZNibtEVsEHIRsEt73Pxm4dp9RTzSlnK7aoCSuAIX7jXkCgbw/0"}]}'
    }
  },
  methods: {
    cellNewClick(tag) {
      TyCommon.success(tag)
    },
    cellNewBtnClick(tag) {
      TyCommon.success(tag)
    }
  }
}
</script>

