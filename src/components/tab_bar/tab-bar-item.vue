<template>     
    <div class="tab-bar-item" @click="item_click">
        <div v-if="isActive">
            <slot name="item_icon"></slot>
        </div>
        <div v-else>
            <slot name="item_icon_active"></slot>
        </div>
        <div :style="active">
            <slot name="item_text"></slot>
        </div>
    </div> 
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
      path: String,
      activeColor:{
          type:String,
          default: '#d4237a'
      }
  },
  data(){
      return{
          
      }
  },
  computed:{
      isActive(){
          return this.$route.path.indexOf(this.path)
      },
      active(){
          return this.isActive ? {} : { color: this.activeColor}
      }
  },
  methods:{
      item_click(){
        this.$router.push(this.path)       
      }
  }
  
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}
.tab-bar-item img{
    margin-top: 3px;
    width: 24px;
    height: 24px;
}

</style>
