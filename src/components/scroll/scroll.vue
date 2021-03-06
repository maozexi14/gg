<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: '',
  props:{
    probeType:Number,
    default:0
  },
  data(){
    return {
      bscroll:null,
    }
  },
  mounted(){
    this.bscroll = new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      pullUpLoad:true,
      click:true

    })
    this.bscroll.on('scroll',(position)=>{
      console.log(position)
      this.$emit('scroll',position)
    })
    //监听上拉事件
    this.bscroll.on('pullingUp',()=>{
      // console.log('上拉加载更多')
      this.$emit('pullingUp')
    })
    
  },
  methods:{
    backtop(){
      this.bscroll.scrollTo(0,0,500)
    },
    refresh(){
      this.bscroll && this.bscroll.refresh()
    },
    finishPullUp(){
      this.bscroll && this.bscroll.finishPullUp()
    },
    scrollTo(x,y,time=200){
      console.log(y)
      this.bscroll.scrollTo(x,y,time)
    },
    getScrollY(){
      return this.bscroll.y
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>