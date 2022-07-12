<script name="login" setup lang='ts'>
import { reactive, ref } from 'vue';
import { login } from '../../api/user';

const onSubmit = (val: any) => {
  console.log('验证成功')
  doLogin()
}
const onFailed = (val: any) => {
  console.log('验证失败')
}
const doLogin = async() => {
  // 具体的登录逻辑
  try {
    const res = await login(user)
    console.log(res)
    alert('登录成功')
  } catch (err) {
    console.log(err)
    alert('登录失败')
  }
}
const user = reactive({
  mobile: '18912345678',
  code: '246810'
})
</script>

<template>
<div>
    <!-- 1. nav-bar -->
    <van-nav-bar
      title="登录"
    />
    <!-- 2. 表单登录 -->
    <van-form       
      @failed="onFailed"
      @submit="onSubmit">
      <van-field
        v-model.trim="user.mobile"
        name="手机号"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ pattern: /^1\d{10}$/, message: '请输入正确的手机号'}]"
      />
      <van-field
        v-model.trim="user.code"
        type="password"
        name="密码"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ pattern: /^\d{6}$/, message: '请输入正确的密码'}]"
      />
      <div style="margin: 16px; padding:20px;">
        <van-button class="van-button" block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<style lang='less' scoped>
  // 按钮
    
    .van-button{
      width: 100%;
      background-color: #6db4fd;
      color:#fff;
    }

</style>