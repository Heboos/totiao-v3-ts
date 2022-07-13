<script setup lang='ts'>
import useStore from '../../store/index'
const { userList } = useStore() 

</script>

<template>
    <div class="container">
    <!-- logo导航  logo + 按钮 -->
    <!-- 头部：logo+搜索 -->
    <van-nav-bar>
      <!-- 注意插槽的问题 -->
      <div slot="left" class="logo"></div>
      <van-button slot="right"
        round
        type="default"
        size="small"
        icon="search"
      >搜索</van-button>
    </van-nav-bar>

    <!-- 二级路由出口
      1. 首页
      2. 问答
      3. 视频
      4. 我的
    -->
    <router-view></router-view>
    <!-- 底部的tabbar -->
    <!-- 启用路由导航功能
      -route : 启用路由导航
      -to : 导航路由的path
    -->
    <!-- 底部的tabbar -->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/">主页</van-tabbar-item>
      <van-tabbar-item icon="question-o" to="/question">问答</van-tabbar-item>
      <van-tabbar-item icon="video-o" to="/video">视频</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/setting">{{userList.token ? '我的' : '未登录'}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang='less' scoped>
 .logo {
    background: url("../../assets/images/logo.png") no-repeat;
    background-size: cover;
    color: #fff;
    width: 100px;
    height: 30px;
  }
  .van-nav-bar .van-icon{
    color: #fff;
  }
</style>