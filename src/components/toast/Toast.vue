<template>
  <div v-show="isShow" class="toast">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data(){
    return {
      message:'',
      isShow:false
    }
  },
  methods:{
    show(message,delay){
      console.log('show')
      this.isShow = true
      this.message = message
      setTimeout(()=>{
        this.isShow = false
        this.message = ''
      },delay)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .toast{
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 999;
    transform: translate(-50%,-50%);
    background-color: rgba(78, 78, 78, 0.5);
    color: #fff;
    border: 1px solid #333;
    border-radius: 12px;
    padding: 5px 10px;
  }
</style>