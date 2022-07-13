<script setup lang='ts'>
import { Toast } from 'vant';
import { ref } from 'vue'
import useStore from '../../store/index'
import { relativeTime } from '../../utils/formateDate'
const { homeList } = useStore() 
homeList.getList(homeList.id)
const { list } = defineProps<{list:{id: number, name: string}}>()
const hList = ref<any>([])
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)
const onRefresh = async () => {
  homeList.getList(homeList.id)
  refreshing.value = false
  Toast.success('加载成功')
}
</script>

<template>
  <div class="scroll-wrapper">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list>
      	<van-cell
      v-for="item in homeList.nums"
      :key="item.art_id"
      :title="item.title">
      <template #label>
 
          <van-grid v-if="item.cover.images" :column-num="item.cover.images.length">
          <van-grid-item
            v-for="(imgSrc,idx) in item.cover.images"
            :key="idx">
            <!-- {{imgSrc}} -->
            <van-image :src="imgSrc"/>
          </van-grid-item>
        </van-grid>
        <van-grid>
                  <div class="meta">
          <span>{{item.aut_name}}</span>
          <span>{{item.comm_count}}评论</span>
          <span>{{ relativeTime(item.pubdate) }}</span>
        </div>
        </van-grid> 
      </template>


      </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
  <div class="scroll-wrapper">

    
  </div>
</template>

<style lang='less' scoped>
.meta {
  span{
    margin-right: 10px;
  }
}
</style>