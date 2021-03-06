<template>
  <div class="swiper">
    <swiper class="detail-swiper">
      <swiper-item class="detail-swiper-item"  v-for="(item,index) in topImage" :key="index">
        <img :src="item" alt="" >
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '../../components/swiper/index'

export default {
  components: { Swiper,SwiperItem },
  name: 'DetailSwiper',
  props:{
    topImage:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper{
  margin-top: 44px;
}
  .detail-swiper{
    height: 300px;
    overflow: hidden;
  }
</style>