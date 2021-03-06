<template>
  <div class="base-info">
    <div class="title">{{ goods.title }}</div>
    <div class="price">      
        <span class="newPrice">{{ goods.newPrice }}</span>
        <span class="oldPrice">{{ goods.oldPrice }}</span>
        <span v-if="goods.discount" class="discount">{{goods.discount}}</span>     
    </div>
    <div class="about">
      <span class="about-item">{{goods.columns[0]}}</span>
      <span class="about-item">{{goods.columns[1]}}</span>
      <span class="about-item">{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="service">
      <span class="service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  data(){
    return{
      
    }
  },
  props: {
    goods: {
      type: Object,
      default: {}
    }
  },
  created() {
    console.log(this.goods);
  },
  mounted(){
    
  },
  computed:{    

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.base-info {
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.title {
  color: #222;
  margin-top: 20px;
  padding: 0 10px 0 10px;
}
.price {
  margin-top: 10px;
  padding: 5px 0 20px 10px;
}
.newPrice {
  color: #ff8198;
  font-size: 20px;
}
.oldPrice {
  font-size: 10px;
  margin-left: 5px;
  text-decoration: line-through;
}
.discount{
  background-color: #ff8198;
  color: white;
  border-radius: 8px;
  padding: 2px 5px;
  font-size: 12px;
  position: relative;
  top: -8px;
}
.about{
  display: flex;
  font-size: 12px;
  text-align: center;
  justify-content: space-between;
  padding: 0 10px 0 10px;
}
.service{
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  padding: 0 10px 0 10px;
  margin-top: 30px;
  color: #333;
}
.service-item{
  flex: 1;
}
.service-item img{
  width: 12px;
  height: 12px;
  position: relative;
  top: 2px;
}

</style>
