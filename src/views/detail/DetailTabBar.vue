<template>
  <tab-bar>
    <tab-bar-item>
      <div slot="text">客服</div>
    </tab-bar-item>
    <tab-bar-item><div slot="item_text">店铺</div></tab-bar-item>
    <tab-bar-item><div slot="item_text">商家</div></tab-bar-item>
    <tab-bar-item><div slot="item_text">加入购物车</div></tab-bar-item>
    <tab-bar-item><div slot="item_text">购买</div></tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBarItem from '../../components/tab_bar/tab-bar-item.vue'
import tabBar from '../../components/tab_bar/tab-bar.vue'
export default {
  components: { tabBar, TabBarItem },
  name: ''
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>