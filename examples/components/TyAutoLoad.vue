<template>
  <div>
    <TyAutoLoad v-on:load-more="loadItems" :isLoadMore="isLoadMore" :showSeparateLines="showSeparateLines" :showEmpty="showEmpty">
      <template slot="body" v-for="(item,index) in items">
        <div :key="index" v-text="index"></div>
      </template>
    </TyAutoLoad>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
      isLoadMore: true,
      showSeparateLines: false,
      showEmpty: false,
      startNumber: 0
    }
  },
  mounted() {
    this.loadItems()
  },
  methods: {
    loadItems() {
      if (this.startNumber > 50) {
        this.isLoadMore = false
        this.showSeparateLines = true
      } else {
        for (let index = 0; index < 15; index++) {
          this.items.push(this.startNumber++)
        }
      }
    }
  }
}
</script>
