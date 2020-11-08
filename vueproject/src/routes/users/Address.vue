<template>
  <div class="address">
    <van-nav-bar
      class="vnavbar"
      title="个人中心"
      left-text="返回个人中心"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <van-address-edit
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
    />
  </div>
</template>

<script>
import { AddressEdit, NavBar, Toast } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
    [AddressEdit.name]: AddressEdit,
    [Toast.name]: Toast,
  },
  data() {
    return {
      areaList: ["北京", "上海"],
      searchResult: [],
    };
  },
  methods: {
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
    onClickLeft() {
      this.$router.push("/user");
    },
  },
};
</script>

<style lang='scss' scoped>
</style>
