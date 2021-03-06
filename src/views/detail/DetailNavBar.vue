<template>
  <nav-bar>
    <div slot="left" class="back" @click="back_click">
      <img src="../../assets/img/home/back.svg" alt="" />
    </div>
    <div slot="center" class="titles">
      <div
        v-for="(item, index) in titles"
        class="titles-item"
        :class="{ active: index === currentIndex }"
        @click="title_click(index)"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import navBar from "../../components/nav_bar/nav-bar.vue";
export default {
  components: { navBar },
  name: "",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    title_click(index) {
      this.currentIndex = index;
      this.$emit("tab_click", index);
    },
    back_click() {
      this.$router.back();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titles {
  display: flex;
  font-size: 14px;
}
.titles-item {
  flex: 1;
}
.active {
  color: #ff8198;
}
.back {
  margin-top: 5px;
}
</style>
