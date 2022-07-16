<script setup lang='ts'>
import { ref } from 'vue';
const emit = defineEmits<{
  (event: 'un-like'): void
}>()
const hUnlike = () => {
  emit('un-like');
}
const isReport = ref(false)
</script>

<template>
  <div class="more-action">
    <!-- 状态一 -->
    <van-cell-group v-if="!isReport">
      <van-cell @click="hUnlike">不感兴趣</van-cell>
      <van-cell is-link @click="isReport=true">举报垃圾内容</van-cell>
      <van-cell>拉黑作者</van-cell>
    </van-cell-group>
    <!-- 状态二 举报-->
    <van-cell-group v-else>
      <van-cell icon="arrow-left" @click="isReport=false">返回</van-cell>
      // --- 省略其他
    </van-cell-group>
  </div>
</template>

<style lang='less' scoped>

</style>