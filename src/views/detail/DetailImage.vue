<template>
  <div id="detailInfo">
    <div class="desc">{{detailInfo.desc}}</div>
    <div class="text">{{detailInfo.detailImage[0].key}}</div>
    <div v-for="item in detailInfo.detailImage[0].list" class="image">
      <img :src="item" alt="" @load="d_imageLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    detailInfo:{
      type:Object,
      default:{}
    }
  },
  methods:{
    d_imageLoad(){
      this.$bus.$emit('d_imageLoad')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#detailInfo{
  margin-top: 20px;
}
.desc{
  padding: 0 10px 0 10px;
}
.text{
  margin-top: 10px;
  padding: 0 10px 0 10px;
}
.image img{
  margin-top: 10px;
  width: 100%;
}
</style>