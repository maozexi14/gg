<template>
    <div>
    <tab-bar>
      <tab-bar-item path='/home'>
        <img slot="item_icon" src="@/assets/img/tab_bar/home.svg">
        <img slot="item_icon_active" src="@/assets/img/tab_bar/home_active.svg" alt="">
        <div slot="item_text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img slot="item_icon" src="@/assets/img/tab_bar/category.svg">
        <img slot="item_icon_active" src="@/assets/img/tab_bar/category_active.svg" alt="">
        <div slot="item_text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/shopcar'>
        <img slot="item_icon" src="@/assets/img/tab_bar/shopcar.svg">
        <img slot="item_icon_active" src="@/assets/img/tab_bar/shopcar_active.svg" alt="">
        <div slot="item_text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile' >
        <img slot="item_icon" src="@/assets/img/tab_bar/profile.svg">
        <img slot="item_icon_active" src="@/assets/img/tab_bar/profile_active.svg" alt="">
        <div slot="item_text">用户</div>
      </tab-bar-item>
    </tab-bar>
    </div>
</template>

<script>
import TabBar from './tab-bar';
import TabBarItem from './tab-bar-item';
export default {
    name:'MainTabbar',
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style>

</style>