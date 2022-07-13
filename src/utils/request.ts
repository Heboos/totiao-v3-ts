import axios from 'axios'
import Cookies from 'js-cookie'

// 创建axios的实例，配置
// 1. 基地址
const redirect = axios.create({
  baseURL:'http://geek.itheima.net/'
})
// 请求拦截器
redirect.interceptors.request.use(config => {
  const token = Cookies.get('token')
  if (token) {
    if (config && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
},
err => {
  console.log(err)
}
)

export default redirect