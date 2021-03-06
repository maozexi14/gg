<template>
  <div class="item">
    <div class="checkbox" :class="{checked:item.checked}" @click="check_">
      <img src="../../assets/img/cart/tick.svg" alt="" />
    </div>
    <div class="item-img"><img :src="item.image" alt="" /></div>
    <div class="item-info">
      <div class="item-title">
        {{ item.title }}
      </div>
      <div class="item-desc">
        {{ item.desc }}
      </div>
      <div class="item-info-bottom">
        <div class="item-price bottom-item">￥{{ item.price }}</div>
        <div class="item-count bottom-item">x {{ item.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopListItem",
  data(){
    return{
      isChecked:false
    }
  },
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  methods:{
    check_(){
      this.item.checked = !this.item.checked
      console.log(this.item.checked)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  overflow: hidden;
  padding: 10px 20px 10px 5px;
  display: flex;
  border-bottom: 0.5px solid #ccc;
}
.checkbox { 
  height: 100%;
  margin: auto;
  margin-right: 5px;
}
.checkbox img{
  border: 1px solid #ccc;
  border-radius: 50%;
}
.checked img{
  background-color: #ff8198;
}
.item-img img {
  border-radius: 12px;
  width: 80px;
  height: 100px;
}
.item-info {
  color: #333;
  overflow: hidden;
  padding: 0 0 10px 10px;
}
.item-desc {
  margin-top: 20px;
  font-size: 14px;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-info-bottom {
  margin-top: 25px;
  display: flex;
}
.bottom-item{
  flex: 1;
}
.item-price{
  color: #ff8198;
}
.item-count{
  text-align: right;
}
</style>
