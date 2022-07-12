import axios from '../utils/request.js'

export const login = (user: any) => {
  return axios({
    url: '/v1_0/authorizations', // 接口地址
    method: 'POST', // 方式
    // 如果参数通过请求体来发(post)，就用data
    // 如果参数通过请求行来发(get)，就用params
    data: user
  })
}
