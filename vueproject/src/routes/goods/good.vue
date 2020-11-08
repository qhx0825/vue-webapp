<template>
  <div class="good">
    <van-nav-bar
      class="vnavbar"
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div class="good-img">
      <img :src="detail.img" />
    </div>
    <div class="good-desc">
      <div>
        <span>商品名</span>
        <span>{{detail.desc}}</span>
      </div>
      <div>
        <span>商品价格</span>
        <span style="color:red;">￥{{detail.price}}</span>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button type="danger" text="加入购物车" @click="onClickButton(detail._id)" />
    </van-goods-action>
  </div>
</template>

<script>
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  NavBar,
  Toast,
  Image,
} from "vant";
import { fetchAddGoods } from "../../untils/api";
export default {
  name: "good",
  components: {
    [NavBar.name]: NavBar,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [Toast.name]: name,
    [Image.name]: Image,
  },
  data:function(){
      return {
          detail:[]
      }

  },
  mounted() {
      this.init()
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickButton(id) {
        let data={
            num:1,
            good_id:id
        }
      fetchAddGoods(data).then(res=>{
         if(res.data.err=='0'){
             Toast(res.data.msg);
         }else{
             Toast(res.data.msg)
         }
      })
    },
    init(){
        this.detail=this.$route.query
    }
  },
};
</script>

<style lang="scss" scoped>
.good {
  padding-bottom: 1.333333rem;
  .van-nav-bar {
    border-bottom: 1px solid gray;
  }
  .good-img {
    margin-top: 1.48rem;
    img {
      width: 10rem;
      height: 7.5rem;
    }
  }
  .good-desc {
    font-size: 0.533333rem;
    & > div:nth-child(1) {
      border: 1px solid black;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.133333rem;
      & > span:nth-child(1) {
        margin-left: 0.2rem;
        color: black;
        font-weight: 600;
      }
      & > span:nth-child(2) {
        margin-right: 0.2rem;
        color: gainsboro;
        font-weight: 600;
      }
    }
    & > div:nth-child(2) {
      border: 1px solid black;
      display: flex;
      justify-content: space-between;
      & > span:nth-child(1) {
        margin-left: 0.2rem;
        color: black;
        font-weight: 600;
      }
      & > span:nth-child(2) {
        margin-right: 0.2rem;
        color: gainsboro;
      }
    }
  }
}
</style>
