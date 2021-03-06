<template>
  <div class="comment">
    <div class="text">
      <span>用户评价:</span>
      <span>{{ commentInfo.cRate }}</span>
    </div>
    <div class="comment-item">
      <div class="user">
        <img :src="commentInfo.list[0].user.avatar" alt="" />
        <span class="uname">{{ commentInfo.list[0].user.uname }}</span>
      </div>
      <div class="content">{{commentInfo.list[0].content}}</div>
      <div class="about">
        <span>{{commentInfo.list[0].created | showDate()}}</span>
        <span>{{commentInfo.list[0].style}}</span>
      </div>
      <div class="image" v-show="commentInfo.list[0].images">
        <div v-for="item in commentInfo.list[0].images" class="img">
          <img :src="item" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from '../../common/utils'
export default {
  name: "",
  props: {
    commentInfo: {
      type: Object,
      default: {}
    }
  },
  filters:{
    showDate(value){
      const date = new Date(value * 1000)
      return formatDate(date,'yyyy/MM/dd')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comment {
  padding: 20px 0 20px 0;
  margin-bottom: 20px;
}
.comment-item {
  padding-bottom: 20px;
  border-bottom: #333 solid 1px;
}
.text {
  padding: 0 10px 0 10px;
}
.user {
  position: relative;
  margin-top: 20px;
  line-height: 50%;
  padding: 0px 0 0 10px;
}

.user img {
  width: 50px;
  height: 50px;
  border: 1px solid #333;
  border-radius: 50%;
}
.uname {
  position: absolute;
  top: 20px;
  left: 70px;
}
.content{
  margin-top: 30px;
  padding: 0 10px 0 10px;
  font-size: 16px;
  color: #333;
}
.about{
  margin-top: 10px;
  font-size: 12px;
  color: rgb(92, 92, 92);

}
.about span{
  margin-left: 10px;
}
.image{
  margin-top: 10px;
}
.img{
  margin-left: 10px;
  display: inline-block;
}
.img img{
  width: 100px;
  height: 100px;
}
</style>
