import { defineStore } from "pinia"
import axios from '../../utils/request'
import Cookies from 'js-cookie'

export default defineStore('home', {
  state: () => ({
    token:Cookies.get('token') || ''
  }),
  actions: {
    async getBannerList(user: {code:string, mobile: string}) {
      const res = await axios.post<{ message: string, data:{ refresh_token: string, token: string } }>('/v1_0/authorizations', user)
      console.log(res)
      this.token = res.data.data.token
      Cookies.set("token", res.data.data.token)
    },
    async aaaa() {
      const res = await axios.get<{ message: string, data:{ refresh_token: string, token: string } }>('/v1_0/user/profile')
      console.log(res)
    },
  },
})