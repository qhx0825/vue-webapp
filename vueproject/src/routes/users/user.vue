<template>
  <div class="user">
    <van-nav-bar
      class="vnavbar"
      title="个人中心"
      left-text="返回首页"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div class="userim">
      <div class="userimg">
        <img
          src="https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png"
          alt
        />
      </div>
      <div class="userimf">
        <span>jd_132095ves</span>
        <span>
          <div style="margin-right:0.24rem;">京享值1396</div>
          <div>小白信用80.2></div>
        </span>
      </div>
      <div class="userlist">
        <div>
          <span>0</span>
          <span>商品收藏</span>
        </div>
        <div>
          <span>23</span>
          <span>店铺收藏</span>
        </div>
        <div>
          <span>1</span>
          <span>我的足迹</span>
        </div>
      </div>
    </div>
    <div class="goodlist">
      <div class="list-left">
        <span>
          <img
            src="https://img12.360buyimg.com/img/s60x60_jfs/t1/125209/17/7530/933/5f16524bE43b4a5f7/71971b102d1fcbc5.png"
            alt
          />
          <span>待付款</span>
        </span>
        <span>
          <img
            src="https://img12.360buyimg.com/img/s120x120_jfs/t1/123660/33/7797/4674/5f1804aeE308173db/b392f9ce63eb8490.png"
            alt
          />
          <span>待收货</span>
        </span>
        <span>
          <img
            src="https://img12.360buyimg.com/img/s60x60_jfs/t1/120478/38/7592/2211/5f165256E02190e99/1491d4cb340074bb.png"
            alt
          />
          <span>退换/售后</span>
        </span>
      </div>
      <div class="list-right">
        <img
          src="https://img12.360buyimg.com/img/s60x60_jfs/t1/145618/2/3439/692/5f16525eE30cd2db1/3ab434ec2686a256.png"
          alt
        />
        <span>全部订单</span>
      </div>
    </div>
    <div class="addedit" @click="toAddress">
      修改收货地址
      <span>></span>
    </div>
    <tabbar />
  </div>
</template>

<script>
import { tabbar } from "@/components";
import { AddressEdit, NavBar } from "vant";
export default {
  components: {
    tabbar,
    [NavBar.name]: NavBar,
    [AddressEdit.name]: AddressEdit,
  },
  methods: {
    onClickLeft() {
      this.$router.push("/");
    },
    toAddress() {
      this.$router.push("/address");
    },
  },
};
</script>

<style lang='scss' scoped>
.user {
  background: gainsboro;
  margin-top: 1.533333rem;
  position: relative;
  .userim {
    background: brown;
    width: 100%;
    height: 5.5rem;
    padding-left: 0.333333rem;
    padding-right: 0.333333rem;
    padding-top: 0.333333rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    .userimg {
      width: 23%;
      height: 2rem;

      & > img {
        width: 100%;
        height: 100%;
      }
    }
    .userimf {
      width: 70%;
      height: 2rem;
      display: flex;
      margin-left: 0.32rem;
      flex-direction: column;
      & > span:nth-child(1) {
        font-size: 0.68rem;
        text-align: left;
        color: white;
        margin-top: 0.2rem;
      }
      & > span:nth-child(2) {
        font-size: 0.42rem;
        display: flex;
        margin-top: 0.32rem;
        font-weight: 600;
        color: rgb(255, 255, 255);
        & > div {
          padding: 0.066667rem;
          background: darkgoldenrod;
          border-radius: 0.25rem;
        }
      }
    }
    .userlist {
      width: 100%;
      height: 2.5rem;
      display: flex;
      justify-content: space-evenly;
      & > div {
        width: 33%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #ffffff;
        font-size: 0.5rem;
        font-weight: 600;
        justify-content: space-evenly;
      }
    }
  }
  .goodlist {
    background: white;
    box-sizing: border-box;
    padding: 0 0.373333rem;
    height: 2.5rem;
    display: flex;
    border-radius: 0.5rem;
    .list-left {
      width: 75%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      & > span {
        width: 33%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        color: #333;
        font-size: 0.2rem;
        & > img {
          width: 50%;
          height: 50%;
        }
      }
    }
    .list-right {
      width: 25%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      color: #333;
      font-size: 0.2rem;
      & > img {
        width: 65%;
        height: 50%;
      }
    }
  }
  .addedit {
    width: 100%;
    height: 1.5rem;
    font-size: 0.5rem;
    font-weight: 600;
    color: #333;
    background: white;
    border-radius: 0.5rem;
    margin: 0.15rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 0.373333rem;
  }
}
</style>
