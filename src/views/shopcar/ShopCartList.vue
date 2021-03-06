<template>
  <div class="shop-cart-list">
    <!-- <ul>
      <li v-for="item in shops">{{item}}</li>
    </ul> -->
    <scroll class="content" ref="scroll">
      <shop-list-item v-for="(item, index) in shops" :key="index" :item="item"/>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import scroll from "../../components/scroll/scroll.vue";
import ShopListItem from "./ShopListItem.vue";
export default {
  components: { scroll, ShopListItem },
  name: "ShopCartList",
  computed: {
    ...mapGetters({
      shops: "cartList"
    })
  },
  activated(){
    this.$refs.scroll.refresh()
    console.log('刷新成功')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shop-cart-list {
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 89px);
  overflow: hidden;
}
</style>
