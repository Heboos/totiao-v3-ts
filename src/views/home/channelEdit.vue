<script setup lang='ts'>
import { watch } from 'fs';
import { ref, watchEffect } from 'vue';
import useStore  from '../../store'
const { homeList } = useStore()
const { channels, curIndex } = defineProps<{channels: {id: number, name: string}[], curIndex: number}>()
const emit = defineEmits<{
  (event: 'change-channel', i: number): void
}>()
const hClickMyChannel = (i:number) => {
  if(!btn) {
    emit('change-channel',i)
  }
}
const btn = ref(false)
const hBtn = () => {
  btn.value = !btn.value
}
const hAddChannel = async(channel:{id: number, name: string}) => {
  if(btn) {
    const arr = [...channels, channel].map((item, idx) => ({ id: item.id, seq: idx }))
    arr.splice(0,1)
    await homeList.addChannels(arr)
    homeList.getMenu()
  }
}
const delChannel = async (id:number) => {
  await homeList.delChannel(id)
  homeList.getMenu()
}
</script>

<template>
  <div class="channel-edit">
    <!-- 当前登陆用户已经订阅的频道 -->
    <div class="channel">
      <van-cell title="我的频道" :border="false">
        <van-button @click="hBtn" style="width: 30%; margin-left: 70%;" size="mini" type="primary">{{!btn ? '编辑' : '完成'}}</van-button>
        <!-- <van-button v-else @click="hBtn" style="width: 30%; margin-left: 70%;" size="mini" type="primary">完成</van-button> -->
      </van-cell>
      <van-grid>
        <van-grid-item :class="{red: curIndex === i}"  v-for="(channel,i) in channels" :key="channel.id"  >
          <span @click="hClickMyChannel(i)">{{channel.name}}</span>
          <van-icon @click="delChannel(channel.id)" v-if="btn" name="cross" class="btn"></van-icon>
        </van-grid-item>
      </van-grid> 
    </div>
     <!-- 当前登陆用户没有订阅的频道 -->
    <div class="channel">
      <van-cell title="可选频道" :border="false"></van-cell>
      <van-grid>
        <van-grid-item @click="hAddChannel(it)" v-for="it in homeList.recommendChannels" :key="it.id">
          <span>{{it.name}}</span>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<style lang='less' scoped>
  .channel{
    padding:15px;
    font-size:14px;
  }
  .btn {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 22px;
    color: rgb(229, 97, 91) !important;
    // margin-right:10px;
    // padding:0 10px;
    border-color: rgb(229, 97, 91);
    
      // 高亮显示

  

}
.red {
    color:red;
    font-weight:bold;
  }
</style>