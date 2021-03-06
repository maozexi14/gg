<template>
<div id="shopcar" >
  <!-- 顶部标题 -->
    <nav-bar  class="shop-nav-bar">      
      <div slot="center">购物车({{count}})</div>     
    </nav-bar>
    <!-- 中间商品 -->
    <shop-cart-list class="cart-list" />
    <!-- 底部工具栏 -->
    <shop-bottom-bar class="bottom-bar" />
</div>
</template>

<script>
import NavBar from '../../components/nav_bar/nav-bar'
import ShopCartList from './ShopCartList.vue'
import {mapGetters} from 'vuex'
import ShopBottomBar from './ShopBottomBar.vue'
export default {
  name: 'Shopcar',
  components:{
    NavBar,
    ShopCartList,
    ShopBottomBar  
  },
  computed:{
    ...mapGetters({
      count:'cartCount',
    })
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shop-nav-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  background-color: #ff8198;
  color: #fff; 
}
.cart-list{
  margin-top: 44px;
}
.bottom-bar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
}
</style>