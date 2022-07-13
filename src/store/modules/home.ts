import { defineStore } from 'pinia'
import axios from 'axios'
import { channels, ChannelsRes, NewsItem, NewsRes } from '../../types/data'
const DoChannel = defineStore('channel', {
  state() {
    return {
      list: <channels>[],
      id: <number>(0),
      nums: <NewsItem[]>([])
    }
  },
  actions: {async getList(id: number) {
    const res = await axios.get<NewsRes>(`http://geek.itheima.net/v1_0/articles?channel_id=${id}&timestamp=${Date.now()}`)
    this.nums.unshift(...res.data.data.results)

  },
    async getMenu() {
      const res = await axios.get<ChannelsRes>('http://geek.itheima.net/v1_0/channels')
      // console.log(res);
      this.list = res.data.data.channels
      this.id = res.data.data.channels[0].id
    },
    addId(id: number) {
      this.id = id
    }
  }
})

export default DoChannel