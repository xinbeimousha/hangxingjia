import axios from 'axios';
import { Toast } from 'vant';
import { getSession } from 'common/js/storage.js';

const [baseURL, timeout] = ['api', 60000];
const instance = axios.create({
  baseURL,
  timeout
});
// 添加请求拦截器
instance.interceptors.request.use(config => {
  config.showLoading = true;
  console.log(config)
  let token = getSession('token');
  if (token) {
    token = `${token};app;`;
    config.headers.Token = token
  }
  Toast.loading({
    duration: 0, // 持续展示 toast
    forbidClick: true, // 禁用背景点击
  })
  return config;
}, error => {
  return Promise.reject(error)
})
// 响应拦截
instance.interceptors.response.use(response => {
  console.log(response)
  Toast.clear();
  return response;
}, error => {
  Toast.clear();
  Toast('连接超时');
  return Promise.reject(error)
})
export default instance;
