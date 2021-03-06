<template>
  <div class="tab-controll">
    <div
      class="tab-controll-item"
      v-for="(item, index) in title"
      @click="itemclick(index)"
    >
      <span :class="{ active: index === currentIndex }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControll",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemclick(index) {     
      this.currentIndex = index;
      this.$emit('tabclick',index);
      console.log(index)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-controll {
  display: flex;
  text-align: center;
  color: black;
  font-size: 14px;
  background-color: #fff;
  line-height:50px;
  height: 50px;
  z-index: 8;
}
.tab-controll-item {
  flex: 1;
}
.tab-controll-item span{
  padding: 5px;
}
.active {
  color: #ff8198;
  border-bottom: 3px solid #ff8198;
}
</style>
