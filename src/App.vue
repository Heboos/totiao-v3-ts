<script setup lang="ts">
import axios from './utils/request'

</script>

<template>
  <div id="app">
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<style>
.van-button{
  width: 300px;
  height: 500px;
}
</style>
