<template>
  <div class="cate">
    <div class="cate-left">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item v-for="item in cateArr" :key="item._id" :title="item.cate_zh" />
      </van-sidebar>
    </div>
    <div class="cate-right">
      <van-grid :column-num="3">
        <van-grid-item @click="goDetail(item)" v-for="item in goodList" :key="item._id">
          <van-image
            :src="item.img"
          />
          <div class="good-name">{{item.desc}}</div>
        </van-grid-item>
      </van-grid>
    </div>
    <tabbar />
  </div>
</template>

<script>
import { tabbar } from "@/components";
import { fetchGoodList, fetchAllcategories } from "../../untils/api";
import { Col, Grid, GridItem, Image, Row, Sidebar, SidebarItem } from "vant";
import { mapMutations, mapState } from "vuex";
export default {
  components: {
    tabbar,
    [Col.name]: Col,
    [Row.name]: Row,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Image.name]: Image,
  },
  computed: {
    ...mapState({ cates: (state) => state.cate.cates }),
  },
  data: function () {
    return {
      activeKey: 0,
      cateArr: [],
      goodList: [],
    };
  },
  mounted() {
    document.getElementsByClassName("cate-left")[0].style.height =
      document.documentElement.clientHeight + "px";
    document.getElementsByClassName("cate-right")[0].style.height =
      document.documentElement.clientHeight + "px";
    this.init();
  },
  watch: {
    activeKey: function () {
      this.getList(this.cateArr[this.activeKey].cate);
    },
  },
  methods: {
    ...mapMutations({ addCate: "cate/addCate" }),
    async init() {
      await fetchAllcategories({}).then((res) => {
        this.cateArr = res.data.data;
      });
      this.getList(this.cateArr[0].cate);
    },
    getList(cate) {
      if (this.cates[this.activeKey]) {
        this.goodList = this.cates[this.activeKey];
      } else {
        fetchGoodList({ cate }).then((res) => {
          this.goodList = res.data.data;
          this.addCate({ index: this.activeKey, arr: res.data.data });
        });
      }
	},
	goDetail(item){
		this.$router.push({name:'good',query:item})
	}
  },
};
</script>

<style lang="scss" scoped>
html,
body {
  .cate {
    height: 100%;
    position: relative;

    .cate-left {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 1.33rem;
      width: 2.5rem;
      overflow: auto;
    }

    .cate-right {
      position: absolute;
      top: 0;
      bottom: 1.33rem;
      right: 0;
      left: 2.5rem;
      overflow: auto;
      padding-bottom: 1.333333rem;
    }
	.good-name{
		font-size: 0.48rem;
	}
  }
}
</style>
