import axios from 'axios'

// 创建axios的实例，配置
// 1. 基地址
const redirect = axios.create({
  baseURL:'http://geek.itheima.net/'
})

export default redirect