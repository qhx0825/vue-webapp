<template>
  <div class="home">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-notice-bar left-icon="volume-o" mode="closeable" scrollable text="技术是开发它的人的共同灵魂。" />
      <van-search
        background="#c82519"
        disabled
        show-action
        shape="round"
        :placeholder="rand_list[rand].text"
      >
        <template #action>
          <div style="color:#fff" class="search-btn" @click="goLogin">{{isLogin?'欢迎你':'登录'}}</div>
        </template>
      </van-search>
      <div class="void">
        <div class="void-top">
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img v-lazy="image" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="void-bottom"></div>
      </div>
      <van-swipe :loop="false" touchable>
        <van-swipe-item>
          <div class="item">
            <div class="inline-item" v-for="i in 5" :key="i">
              <img
                src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/142596/7/1864/4759/5efbf5a9E60c62b8a/49cdd24cb2bfecf5.png.webp"
                alt
              />
              <span>京东国际</span>
            </div>
          </div>
          <div class="item">
            <div class="inline-item" v-for="i in 5" :key="i">
              <img
                src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/125193/15/5993/3443/5efbf5dbEa3327124/a4282d5cb2879c8b.png.webp"
                alt
              />
              <span>京东国际</span>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="item">
            <div class="inline-item" v-for="i in 5" :key="i">
              <img
                src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/125193/15/5993/3443/5efbf5dbEa3327124/a4282d5cb2879c8b.png.webp"
                alt
              />
              <span>京东国际</span>
            </div>
          </div>
          <div class="item">
            <div class="inline-item" v-for="i in 5" :key="i">
              <img
                src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/142596/7/1864/4759/5efbf5a9E60c62b8a/49cdd24cb2bfecf5.png.webp"
                alt
              />
              <span>京东国际</span>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
      <div class="good-title">
        <img
          src="//m.360buyimg.com/mobilecms/s750x80_jfs/t1/120788/8/5449/24646/5ef008ccEa30f561d/b59f6d8807cfb020.png!q70.jpg.dpg"
          alt
        />
      </div>
      <van-list
        offset="30"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="good-list-item">
          <div class="list-item" v-for="i in goodList.length/2" :key="i">
            <GoodItem :good="goodList[2*i-2]" />
            <GoodItem :good="goodList[2*i-1]" />
          </div>
        </div>
      </van-list>
      <tabbar />
    </van-pull-refresh>
  </div>
</template>

<script>
import Vue from "vue";
import {
  Search,
  NoticeBar,
  Swipe,
  SwipeItem,
  Lazyload,
  List,
  PullRefresh,
  Toast,
} from "vant";
import { tabbar, GoodItem } from "@/components";
import { fetchHotGood } from "../../untils/api";
Vue.use(Lazyload);
export default {
  components: {
    [Search.name]: Search,
    [NoticeBar.name]: NoticeBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    [Toast.name]: Toast,
    tabbar,
    GoodItem,
  },
  methods: {
    onRefresh() {
      this.page = 1;
      this.goodRes();
    },
    onLoad() {
      this.page++;
      this.goodRes();
    },
    goodRes() {
      let params = {
        hot: false,
        page: this.page,
        size: 6,
      };
      fetchHotGood(params).then((res) => {
        if (this.refreshing) {
          this.refreshing = false;
          this.finished = false;
          this.goodList = res.data.data.list;
        } else {
          this.loading = false;
          this.goodList = [...this.goodList, ...res.data.data.list];
        }
        if (this.goodList.length >= res.data.data.total) {
          this.finished = true;
        }
      });
    },
    islogin() {
      let token = localStorage.getItem("token");
      if (token) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    goLogin() {
      let token = localStorage.getItem("token");
      if (token) {
        this.isLogin = true;
        Toast("已经登录,无需再次登录");
      } else {
        this.isLogin = false;
        this.$router.push("/login");
      }
    },
  },
  mounted() {
    this.goodRes();
    this.islogin();
  },
  data: function () {
    return {
      rand_list: [
        {
          id: 1,
          text: "手机",
        },
        {
          id: 2,
          text: "电脑",
        },
        {
          id: 3,
          text: "书籍",
        },
        {
          id: 4,
          text: "食品",
        },
      ],
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
      loading: false, // 为true时可上拉
      finished: false, // 控制上拉记载,为true时不可上拉
      refreshing: false, // 控制下拉刷新,当它为true时,表示正在下拉
      page: 1,
      goodList: [],
      isLogin: false,
    };
  },
  computed: {
    rand: function () {
      return Math.floor(Math.random() * this.rand_list.length);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 1.6rem;
  width: 100%;
  height: 100%;

  .van-pull-refresh {
    width: 100%;
    height: 100%;

    .van-swipe {
      width: 100%;
      height: 4.67rem;
      margin-top: 0.4rem;
      background: #f0f0f0;

      .van-swipe-item {
        width: 100%;
        height: 4.34rem;
        display: flex;
        flex-direction: column;

        .item {
          width: 100%;
          height: 50%;
          display: flex;

          .inline-item {
            width: 25%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 0.213333rem;
            justify-content: space-evenly;

            img {
              width: 1.066667rem;
              height: 1.066667rem;
            }
          }
        }
      }
    }

    .good-list-item {
      .list-item {
        display: flex;
      }
    }

    .void {
      width: 100%;
      height: 4rem;
      position: relative;

      .void-top {
        width: 100%;
        height: 75%;
        display: flex;
        justify-content: center;
        background: #c82519;
        border-radius: 0 0 0.6rem 0.6rem;

        .van-swipe {
          width: 90%;
          height: 4rem;
          border-radius: 0.2rem 0.2rem 0.2rem 0.2rem;
          position: absolute;
          top: 0.1rem;

          img {
            width: 100%;
            height: 100%;
            display: inline-block;
          }
        }
      }
    }

    .good-title {
      width: 100%;
      height: 0.8rem;
      margin-bottom: 0.2rem;

      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
