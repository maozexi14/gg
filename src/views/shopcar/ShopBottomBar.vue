<template>
  <div class="bottom-bar">
    <div class="check-button" @click="select_none">
      <img
        :class="{ checked: selectall }"
        src="../../assets/img/cart/tick.svg"
        alt=""
      />
      <div>全选</div>
    </div>
    <div class="total-price">合计:{{ total_price }}</div>
    <div class="calculate">去计算({{ calculated }})</div>
  </div>
</template>

<script>
export default {
  name: "",
  computed: {
    total_price() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter(item => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    calculated() {
      return this.$store.state.cartList.filter(item => item.checked).length;
    },
    selectall() {
      if (this.$store.state.cartList.length === 0) return false;
      return !this.$store.state.cartList.find(item => !item.checked);
    }
  },
  methods: {
    select_none() {
      if (this.selectall) {
        this.$store.state.cartList.forEach(item => (item.checked = false));
        // this.selectall = false
      } else {
        this.$store.state.cartList.forEach(item => (item.checked = true));
      }

      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottom-bar {
  /* border: 1px solid #333; */
  display: flex;
  height: 40px;
  background-color: #eee;
  line-height: 40px;
}
.check-button {
  width: 80px;
  height: 40px;
  display: flex;
  line-height: 40px;
}
.check-button img {
  margin: auto 10px;
  width: 22px;
  height: 22px;
  border: 1px solid #333;
  border-radius: 50%;
  /* background-color: ; */
}
.checked {
  background-color: crimson;
}
.total-price {
  flex: 1;
  text-align: center;
  font-size: 18px;
}
.calculate {
  background-color: orangered;
  width: 100px;
  color: #eee;
  text-align: center;
}
</style>
