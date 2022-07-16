import { defineStore } from 'pinia'
import axios from '../../utils/request'
import { channels, ChannelsRes, NewsItem, NewsRes, noList } from '../../types/data'
const DoChannel = defineStore('channel', {
  state() {
    return {
      list: <channels>[],
      allChannels: <channels>[],
      id: <number>(0),
      nums: <NewsItem[]>([])
    }
  },
  actions: {
    async delChannel(channelId:number) {
      const res = await axios.delete(`/v1_0/user/channels/${channelId}`)
      // console.log(res);
      
    },
    hDel(id: string) {
      this.nums = this.nums.filter(it => it.art_id !== id)
    },
    async unLike(articleId:string) {
    const res = await axios.post<noList>(`v1_0/article/dislikes`, {target: articleId})
    // console.log(res);
    return res.data.message
    },
    async addChannels(channels: {
      id: string | number;
      seq: number;
  }[]) {
    const res = await axios.patch<ChannelsRes>('/v1_0/user/channels',{channels})
    console.log(res)
    

    },
    async getList(id: number) {
    const res = await axios.get<NewsRes>(`/v1_0/articles?channel_id=${id}&timestamp=${Date.now()}`)
    this.nums.unshift(...res.data.data.results)

    },
    async getMenu() {
      const res = await axios.get<ChannelsRes>('/v1_0/user/channels')
      const res1 = await axios.get<ChannelsRes>('/v1_0/channels')
      // console.log(res);
      this.list = res.data.data.channels
      this.allChannels = res1.data.data.channels
      this.id = res.data.data.channels[0].id
    },

    addId(id: number) {
      this.id = id
    }
  },
  getters: {
    recommendChannels () :{id: number, name: string}[] {
      // 已有频道： [{id:1,name:'a'}]
      // 所有频道： [{id:1,name:'a'},{id:2,name:'b'},{id:3,name:'c'}]

      // 推荐频道： 所有频道 - 已有频道  ===> [{id:2,name:'b'},{id:3,name:'c'}]

      // 对所有频道的数据进行过滤：
      //   保存数据的条件是：当前这个频道没有在已有频道中出现
      const arr = this.allChannels.filter(channel => {
        const idx = this.list.findIndex(item => item.id === channel.id)
        if (idx === -1) {
          return true
        }
      })
      return arr
      // return this.allChannels - this.channels
    }
  }
})

export default DoChannel