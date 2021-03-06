<template>
  <div class="detail-params">
    <div class="text">{{itemParams.info.key}}</div>
    <div class="item_img" v-for="item_img in itemParams.info.images" >
      <img :src="item_img" alt="">
    </div>
    
    <table class="rule">
      <tr v-for="item_tr in itemParams.rule.tables[0]">
        <td v-for="item_td in item_tr">{{ item_td }}</td>
        <!-- {{item_tr}} -->
      </tr>
    </table>
    <table class="info">
      <tr v-for="item_tr in itemParams.info.set">
        <td class="key">{{item_tr.key}}</td>
        <td class="value">{{item_tr.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    itemParams: {
      type: Object,
      default: {}
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail-params{
  color: rgb(82, 81, 81);
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
}
.item_img img{
  width: 100%;
}
.detail-params table {
  width: 100%;
  border-collapse: collapse;
}
tr,td{
  border-bottom: 2px solid rgba(63, 63, 63, 0.1);
}
tr{  
  height: 42px;
}
td{
  padding-left: 10px;
  
}
.text {
  margin-top: 10px;
  padding: 0 10px 0 10px;
}
.rule {
  margin-top: 20px;
  padding: 0 10px 0 10px;
}
.key{
  width: 40px;
}
.info .value{
  color: #ff8198;
}
</style>
