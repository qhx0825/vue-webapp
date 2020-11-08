<template>
  <div class="tabbar">
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/cate">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/cart" :badge="len?len:''">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/user">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "Tab",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data: function () {
    return {};
  },
  computed: {
    ...mapGetters({ len:'cart/len' }),
  },
  watch: {
    len: function (val) {console.log(val)},
  },
};
</script>

<style>
</style>
