<template>
  <div class="register">
    <van-nav-bar
      class="vnavbar"
      title="注册"
      left-text="返回"
      left-arrow
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
      <van-field
        v-model="password2"
        type="password"
        name="password2"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请确认密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { fetchRegister } from "../../untils/api";
import { NavBar, Toast, Form, Field, Button, Circle } from "vant";
export default {
  name: "login",
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    },
  },
  data: function () {
    return {
      username: "",
      password: "",
      password2: "",
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Toast.name]: Toast,
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
    [Toast.name]: Toast,
    [Circle.name]: Circle,
  },
  methods: {
    onClickLeft() {
      this.$router.push("/login");
    },
    onSubmit(val) {
      val.username != "" || val.password != ""
        ? val.password === val.password2
          ? fetchRegister(val).then((res) => {
              if (res.data.msg == "success") {
                this.username = "";
                this.password = "";
                this.password2 = "";
                Toast.loading({
                  message: "注册成功,准备前往登录页...",
                  forbidClick: true,
                });
                setTimeout(() => {
                  this.$router.push("/login");
                }, 2000);
              } else if (res.data.err == "1") {
                Toast(res.data.msg);
              }
            })
          : Toast("两次密码输入不一致")
        : Toast("用户名或密码不允许为空");
    },
  },
};
</script>

<style lang='scss' scoped>
.register {
  .van-form {
    margin-top: 1.3rem;
  }
}
</style>
