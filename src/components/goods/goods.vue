<template>
  <div class="goods" key="goods">
    <goods-item v-for="(item,index) in goods" :goodsitem="item" :key="index" />
  </div>
</template>

<script>
import GoodsItem from './goodsItem.vue';
export default {
  name: "goods",
  components:{
    GoodsItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goods {
  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>
