<template>
  <div class="goods-item" @click="item_click()">
    <img :src="showImg" alt="" key="image" @load="imageLoad" />
    <div class="goods-item-info">
      <p>{{ goodsitem.title }}</p>
      <span>价格:</span><span class="price">{{ goodsitem.price }}</span>
      <span>收藏</span><span>{{ goodsitem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    showImg() {
      return this.goodsitem.image || this.goodsitem.show.img;
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    item_click() {
      console.log("点击了商品");
      this.$router.push("/detail/" + this.goodsitem.iid);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goods-item {
 
  padding-bottom: 44px;
  position: relative;
    width: 48%;
}
.goods-item img {
  
  width: 100%;
  border-radius: 5px;
}
.goods-item-info{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  overflow: hidden;
  text-align: center;
  font-size: 12px;
}
.goods-item-info p{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 70%;
}
.goods-item-info .price{
  color: #ff8198;
}
</style>
