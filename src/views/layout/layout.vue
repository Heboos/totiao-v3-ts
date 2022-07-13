<script setup lang='ts'>
import { ref , watch } from 'vue';
import useStore from '../../store/index'
const { userList } = useStore() 
const route = ref(0)
watch(() =>route,()=>{})
</script>

<template>
    <div class="container">
    <!-- logo导航  logo + 按钮 -->
    <!-- 头部：logo+搜索 -->
      <van-nav-bar fixed
      v-show="$route.path !== '/setting'">
      <!-- <template #left>
        #left就是slot="left"的简写，具名插槽
        template:是逻辑上的容器，它不会生成对应的dom
      -->
        <template #left>
          <div class="logo"></div>
        </template>

        <template #right>
          <van-button
            round
            block
            icon="search"
            size="small"
          > 搜索 </van-button>
        </template>
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
    <van-tabbar v-model="route">
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
  width: 100px;
  height: 30px;
}


</style>