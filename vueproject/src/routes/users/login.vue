<template>
  <div class="login">
    <van-nav-bar
      class="vnavbar"
      title="登录"
      left-text="返回"
      left-arrow
      right-text="注册"
      @click-right="onClickRight"
      @click-left="onClickLeft"
      fixed
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { fetchLogin } from "../../untils/api";
import { NavBar, Toast, Form, Field, Button } from "vant";
export default {
  name: "login",
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Toast.name]: Toast,
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
    [Toast.name]: Toast,
  },
  methods: {
    onClickRight() {
      this.$router.push("/register");
    },
    onClickLeft() {
      let token = localStorage.getItem("token");
      if (!token) {
        this.$router.go(-1);
      }
    },
    onSubmit(val) {
      fetchLogin(val).then((res) => {
        if (res.data.msg == "success") {
          let storage = window.localStorage;
          storage.setItem("token", res.data.data.token);
          Toast.loading({
            message: "登陆成功,请稍候...",
            forbidClick: true,
          });
          setTimeout(() => {
            this.$router.replace("/");
          }, 1000);
        } else {
          Toast("用户名或密码有误,请检查重试");
        }
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.login {
  .van-form {
    margin-top: 1.3rem;
  }
}
</style>
