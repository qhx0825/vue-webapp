<template>
  <div class="good-item">
    <img
      :src="good.img"
    />
    <span class="good-desc">{{good.desc}}</span>
    <div class="good-rest">
      <span>￥</span>
      <span>{{good.price}}</span>
      <span>看相似</span>
    </div>
    <div class="good-rest"></div>
  </div>
</template>
<script>
export default {
  name:'GoodItem',
  data:function(){
    return {
      
    }
  },
  props:{
    good:{
      type:Object,
      require:true
    }
  },
};
</script>
<style lang="scss" scoped>
.good-item {
  flex: 1;
  background: white;
  border: 1px solid #eee;
  img {
    display: block;
    width:5rem;
    height: 5rem;
  }
  .good-desc {
    margin: .2rem 0;
    font-size: 0.35rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-height: .53rem;
  }
  .good-rest {
    height: 0.76rem;
    line-height: 0.76rem;
    overflow: hidden;
    & > span:nth-child(1) {
      float: left;
      color: red;
      font-size: 0.29rem;
    }
    & > span:nth-child(2) {
      float: left;
      color: red;
      font-size: 0.4rem;
    }
    & > span:nth-child(3) {
      float: right;
      font-size: 0.29rem;
      height: 0.4rem;
      line-height: 0.4rem;
      border: 1px solid #ccc;
      padding: 0.15rem 0.15rem;
    //   margin-top: 0.2rem;
    }
  }
}
</style>