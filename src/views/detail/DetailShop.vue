<template>
  <div class="shopInfo">
    <div class="shopTop">
      <img :src="shopInfo.shopLogo" alt="" />
      <span class="shopName">{{ shopInfo.name }}</span>
    </div>
    <div class="shopMiddle">
      <div class="shop-left shop-item">
        <div class="cSells">
          <div class="">{{ shopInfo.cSells | sellCountFilter }}</div>
          <div class="text">总销量</div>
        </div>
        <div class="cGoods">
          <div>{{ shopInfo.cGoods }}</div>
          <div class="text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-right shop-item">
        <table>
          <tr v-for="(item,index) in shopInfo.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more':item.isBetter}">
              <span>{{item.isBetter ? '高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props: {
    shopInfo: {
      type: Object,
      default: {}
    }
  },
  filters:{
    sellCountFilter(value){
      let result = value
      if(value > 10000){
        result = (value / 10000).toFixed(1) + '万'
      }
      return result
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shopInfo {
  padding: 20px 10px 0 10px;
  border-bottom: #333 1px solid;
}
.shopTop {
  line-height: 45px;
  display: flex;
  align-items: center;
}
.shopTop img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
}
.shopName {
  margin-left: 10px;
  vertical-align: center;
}
.shopMiddle {
  
  margin-top: 30px;
  display: flex;
}
.shop-left{
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
  color: #333;
}
.shop-item {
  flex: 1;
}
.cSells,.cGoods{
  display: inline-block;
}
.cGoods{
  margin-left: 20px;
  text-align: center;
}
.text{
  margin-top: 5px;
}
.shop-right{
  margin-left: 20px;
  color: #333;
}
.score{
  padding: 0 8px 0 8px;
  color: #5ea732;
  text-align: left;
}
.better{
  background-color:#5ea732;
  color: #fff;
}
.score-better{
  color: #f13e3a;
}
.better-more{
  background-color: #f13e3a;
  color: #fff;
}
.shop-bottom{
  text-align: center;
  margin-top: 10px;
}
.enter-shop{
  display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
}
</style>
