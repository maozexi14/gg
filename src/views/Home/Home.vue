<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-controll
      v-show="isShow_tab"
      class="tab-controll_"
      :title="title"
      @tabclick="tabclick"
      ref="tabcontroll1"
    ></tab-controll>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="scrolling"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature></home-feature>
      <tab-controll
        :title="title"
        @tabclick="tabclick"
        ref="tabcontroll2"
      ></tab-controll>
      <goods :goods="goodsType"></goods>
    </scroll>

    <back-top @click.native="backtop" v-show="isShow" />
  </div>
</template>

<script>
//Home导入的组件
import NavBar from "@/components/nav_bar/nav-bar"; //顶部导航
import HomeSwiper from "./HomeSwiper"; //轮播
import HomeRecommend from "./HomeRecommend.vue"; //
import HomeFeature from "./HomeFeature.vue"; //本周流行
import TabControll from "@/components/tab_controll/TabControll.vue"; //商品类别
import Goods from "../../components/goods/goods.vue"; //商品
import Scroll from "../../components/scroll/scroll"; //滚动
import { getHomedata, getHomedata_goods } from "@/network/home"; //请求数据
import BackTop from "../../components/back_top/backTop.vue"; //返回顶部
import { debounce } from "../../common/utils"; //防抖函数
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControll,
    Goods,
    Scroll,
    BackTop
  },
  data() {
    return {
      isShow: false,
      currentType: "pop",
      banners: [],
      recommends: [],
      title: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      tabOffsetTop: 0,
      isShow_tab: false,
      saveY:0
    };
  },
  created() {
    //获取首页上半部分数据
    this.getHomedata();
    //获取展示的商品信息
    this.getHomedata_goods("pop");
    this.getHomedata_goods("new");
    this.getHomedata_goods("sell");
    //监听图片的加载
  },
  mounted() {
    //重新获取高度
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  activated(){
    console.log('进入home')
    this.$refs.scroll.scrollTo(0, this.saveY,0);
    this.$refs.scroll.refresh()
  },
  deactivated(){
    //记录离开页面时y坐标
    this.saveY = this.$refs.scroll.getScrollY()
    console.log('离开时坐标'+ this.saveY)
  },
  computed: {
    goodsType() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    //网络请求的方法//
    getHomedata() {
      getHomedata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomedata_goods(type) {
      const page = this.goods[type].page + 1;
      getHomedata_goods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    },
    //事件的方法//

    //切换类别
    tabclick(index) {
      //console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
      this.$refs.tabcontroll1.currentIndex = index;
      this.$refs.tabcontroll2.currentIndex = index;
    },
    //监听滚动
    scrolling(position) {
      //滚动到某个地方显示返回顶部按钮
      this.isShow = -position.y > 1000;
      //决定tabcontroll是否吸顶，position:fixed
      this.isShow_tab = -position.y > this.tabOffsetTop;
    },
    //点击返回顶部
    backtop() {
      this.$refs.scroll.backtop();
    },
    //上拉加载更多商品
    loadMore() {
      this.getHomedata_goods(this.currentType);
    },

    //
    swiperImageLoad() {
      //获取tab-controll的offsetTop
      //所有组件都有一个属性el，用于获取组件中的元
      //console.log(this.$refs.tabcontroll.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabcontroll2.$el.offsetTop;
    }
  },
  destroyed() {
    
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: #ff8198;
  color: aliceblue;
  border-bottom: 3px solid #ff8198;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10; */
}
.tab-controll_ {
  position: relative;
  z-index: 1000;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
