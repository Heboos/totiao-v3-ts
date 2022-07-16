<script setup lang='ts'>
import { ref } from 'vue';
import useStore from '../../store/index'
import ArticleList from './articleList.vue';
import ChannelEdit from './channelEdit.vue';
const { homeList } = useStore() 
homeList.getMenu()
const active = ref(0)
const onId = () => {
  homeList.addId(active.value)

}
const isShowChannelEdit = ref(false)
const hChangeChannel = (curIdx:number) => {
     // 1. 切换频道
   active.value = curIdx
   // 2. 关闭弹层
   isShowChannelEdit.value = false
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
      <div class="bar-btn" @click="isShowChannelEdit=true">
        <van-icon name="wap-nav"/>
      </div>
      <!-- 弹层 -->
      <van-action-sheet v-model:show="isShowChannelEdit" title="标题">
        <ChannelEdit :curIndex="active" :channels="homeList.list" @change-channel="hChangeChannel"></ChannelEdit>
      </van-action-sheet>
    </div>
</template>

<style lang='less' scoped>
// 频道管理的开关按钮
  .bar-btn {
    position: fixed;
    right: 5px;
    top: 57px;
    display: flex;
    align-items: center;
    background-color: #fff;
    opacity: 0.8;
    z-index:1;
    .van-icon-wap-nav{
      font-size: 20px;
    }
  }
</style>