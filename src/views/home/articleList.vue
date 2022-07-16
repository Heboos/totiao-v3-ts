<script setup lang='ts'>
import { Toast } from 'vant';
import { ref } from 'vue'
import useStore from '../../store/index'
import { relativeTime } from '../../utils/formateDate'
import MoreAction from './moreAction.vue'
const { homeList , userList } = useStore() 
homeList.getList(homeList.id)
const { list } = defineProps<{list:{id: number, name: string}}>()
const hList = ref<[]>([])
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)
// 控制弹层
const isShowMoreAction = ref(false)
const articleId = ref('')
const onRefresh = async () => {
  homeList.getList(homeList.id)
  refreshing.value = false
  Toast.success('加载成功')
}
const hActionMore = (art_id: string) => {
      isShowMoreAction.value = true
      articleId.value = art_id
      // console.log(isShowMoreAction.value)
      
}
const hUnlike = async() => {
    const message = await homeList.unLike(articleId.value)
    await homeList.hDel(articleId.value)
    // 2. 关闭弹层
    isShowMoreAction.value = false
    if(message === 'OK') {
      Toast.success('操作成功')

    } else {

      Toast.fail('操作失败')
    }
    // 3. 删除文章
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
            :key="imgSrc">
            <!-- {{imgSrc}} -->
            <van-image :src="imgSrc"/>
          </van-grid-item>
        </van-grid>
        <van-grid>
        <div class="meta">
          <div class="box">
            <span>{{item.aut_name}}</span>
            <span>{{item.comm_count}}评论</span>
            <span>{{ relativeTime(item.pubdate) }}</span>
          </div>
          <!-- 如果是登陆用户(有没有token)，则显示x按钮 -->
          <span @click="hActionMore(item.art_id)" class="close" v-if="userList.token">
              <van-icon name="cross"></van-icon>
          </span>

        </div>
        </van-grid> 
      </template>


      </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
  <van-popup v-model:show="isShowMoreAction" :style="{ width: '80%' }">
	  <more-action @un-like="hUnlike"></more-action>
  </van-popup>
</template>

<style lang='less' scoped>

.meta {
  width: 100%;
  display:flex;
  .box {
    span {
      margin-right:10px;
    }
  }
  // 让它在最右边
  .close {
    margin-left: auto;
  }
}
</style>