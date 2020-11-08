<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { Button, Search } from "vant";
export default {
  name: "App",
  components: {
    [Button.name]: Button,
    [Search.name]: Search,
  },
};
</script>

<style lang="scss" scoped>
html,
body {
  background: #f6f6f6;
  width: 100%;
  height: 100%;
  #app {
    width: 100%;
    height: 100%;
  }
}
</style>
