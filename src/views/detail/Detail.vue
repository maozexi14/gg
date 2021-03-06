<template>
  <div id="detail">
    <detail-nav-bar
      class="d-navbar"
      @tab_click="tabClick"
      ref="nav"
    ></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="detailScroll">
      <detail-swiper :topImage="topImage"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop :shopInfo="shopInfo"></detail-shop>
      <detail-image :detailInfo="detailInfo" />
      <detail-params ref="params" :itemParams="itemParams" />
      <detail-comment ref="comment" :commentInfo="commentInfo" />
      <good ref="recomend" :goods="recommend" />
    </scroll>
    
    <back-top @click.native="back_top" v-show="isShowBackTop" />
    <detail-bottom-bar @add_cart="add_cart_" />
  </div>
</template>

<script>
import DetailNavBar from "./DetailNavBar.vue";
import { getdetail, Goods, getrecommend } from "../../network/detail";
import DetailSwiper from "./DetailSwiper.vue";
import DetailBaseInfo from "./DetailBaseInfo.vue";

import DetailShop from "./DetailShop";
import Scroll from "../../components/scroll/scroll";
import DetailTabBar from "./DetailTabBar.vue";
import DetailImage from "./DetailImage";
import { debounce } from "../../common/utils"; //防抖函数
import DetailParams from "./DetailParams.vue";
import DetailComment from "./DetailComment";
import Good from "../../components/goods/goods.vue";
import DetailBottomBar from "./DetailBottomBar";
import { backtopMixin } from "../../common/mixin";
import { mapActions } from "vuex";

export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShop,
    Scroll,
    DetailTabBar,
    DetailImage,
    DetailParams,
    DetailComment,
    Good,
    DetailBottomBar,
    
  },
  name: "Detail",
  mixins: [backtopMixin],
  data() {
    return {
      iid: null,
      topImage: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommend: [],
      scrollToY: [],
      getscrollToY: null,
      
    };
  },
  created() {
    //获取商品iid
    this.iid = this.$route.params.iid;
    //根据iid获取详细信息
    getdetail(this.iid).then(res => {
      console.log(res);
      const data = res.result;
      //获取商品轮播图
      this.topImage = data.itemInfo.topImages;
      //获取商品其他信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取店铺信息
      this.shopInfo = data.shopInfo;
      //获取商品更多图片
      this.detailInfo = data.detailInfo;
      //获取参数
      this.itemParams = data.itemParams;
      //获取评价信息
      this.commentInfo = data.rate;
    });
    //获取推荐商品
    getrecommend().then(res => {
      this.recommend = res.data.list;
    });
    //重新获取滚动的高度
    this.getscrollToY = debounce(() => {
      this.scrollToY = [];
      this.scrollToY.push(0);
      this.scrollToY.push(
        this.$refs.params.$el && this.$refs.params.$el.offsetTop - 44
      );
      this.scrollToY.push(
        this.$refs.comment.$el && this.$refs.comment.$el.offsetTop - 44
      );
      this.scrollToY.push(
        this.$refs.recomend.$el && this.$refs.recomend.$el.offsetTop - 44
      );
      console.log(this.scrollToY);
    }, 200);
  },
  mounted() {
    //重新获取高度
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("d_imageLoad", () => {
      refresh();
      this.getscrollToY();
    });
  },
  computed: {},
  methods: {
    ...mapActions(["addCart"]),
    tabClick(index) {
      console.log(this.scrollToY[index]);
      this.$refs.scroll.scrollTo(0, -this.scrollToY[index], 200);
    },
    //滚动到对应区域高亮
    detailScroll(position) {
      const d_Y = -position.y;
      this.isShowBackTop = d_Y > 2000;
      if (d_Y > 0 && d_Y <= this.scrollToY[1]) {
        this.$refs.nav.currentIndex = 0;
      } else if (d_Y > this.scrollToY[1] && d_Y <= this.scrollToY[2]) {
        this.$refs.nav.currentIndex = 1;
      } else if (d_Y > this.scrollToY[2] && d_Y <= this.scrollToY[3]) {
        this.$refs.nav.currentIndex = 2;
      } else if (d_Y > this.scrollToY[3]) this.$refs.nav.currentIndex = 3;
    },
    //点击返回顶部
    // back_top(){
    //   this.$refs.scroll.backtop()
    // }
    add_cart_() {
      //1、获取需要展示的信息
      const product = {};
      product.image = this.topImage[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      //2、将商品添加到购物车
      // this.$store.dispatch("addCart", product).then(res => {
      //   console.log(res);
      // });
      this.addCart(product).then(res => {
        this.$toast.show(res,2000)
        
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #fff;
}
.d-navbar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  z-index: 1;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px - 44px);
  background-color: #fff;
}
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.D-tabbar {
  background-color: aliceblue;
}
</style>
