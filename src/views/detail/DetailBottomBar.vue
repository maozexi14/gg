<template>
  <div class="bottom-bar">
    <div class="bar-left bar-item">
      <div class="bar-left-item">
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div class="bar-left-item">
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div class="bar-left-item">
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-right bar-item">
      <div class="bar-right-item cart" @click="addcart">加入购物车</div>
      <div class="bar-right-item buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  methods:{
    addcart(){
      this.$emit('add_cart')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottom-bar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 49px;
  text-align: center; 
  background-color: #fff;
}
.bar-item{
  flex: 1;
  display: flex;
}
.bar-left-item,.bar-right-item{
  flex: 1;
}
.icon{
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 0px;
  background: url('../../assets/img/detail/detail_bottom.png') 0 0/100%;
}
.text{
  font-size: 13px;
  color: #333;
}
.service{
  background-position: 0 -52px;
}
.shop{
  background-position: 0 -98px;
}
.select{
  background-position: 0 0px;
}
.selected{
  background-position: 0 -25px;
}
.bar-right{
  line-height: 49px;
}
.cart{
  background-color: yellow;
}
.buy{
  background-color: #ff8198;
  color: #fff;
}
</style>