<script setup lang='ts'>
import { ref } from 'vue';
import useStore from '../../store/index'
import ArticleList from './articleList.vue';
const { homeList } = useStore() 
homeList.getMenu()
const active = ref(0)
const onId = () => {
  homeList.addId(active.value)

}
</script>

<template>
    <div class="index">
      <van-tabs v-model:active="active" @click-tab="onId">
        <!-- {{hChannel.name}}111 -->
        <van-tab v-for="item in homeList.list" :title="item.name" :key="item.id">
          <!-- {{ item.name }} -->
          <!-- <div class="scroll-wrapper">
            频道内容 {{ item.name }}
      	    <p v-for="idx in 20" :key="idx">第{{idx}}篇文章</p>
          </div> -->
          <ArticleList :list="item"></ArticleList>
        </van-tab>
      </van-tabs>
    </div>
</template>

<style lang='less' scoped>

</style>