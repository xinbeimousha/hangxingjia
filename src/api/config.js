import axios from 'axios';
import { Toast } from 'vant';
import { getLocal } from 'common/js/storage.js';

const [baseURL, timeout] = ['api', 60*1000];
const instance = axios.create({
  baseURL,
  timeout
});
// 添加请求拦截器
instance.interceptors.request.use(config => {
  let token = getLocal('token');
  if (token) {
    token = `${token};app;`;
    config.headers.Token = token
  }
  if (config.showLoading) {
    Toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true, // 禁用背景点击
    })
  }
  return config;
}, error => {
  return Promise.reject(error)
})
// 响应拦截
instance.interceptors.response.use(response => {
  if (response.config.showLoading) {
    Toast.clear();
  }
  return response;
}, error => {
  if(error.response){
    const status = error.response.status;
    switch(status){
      case 400 :
      Toast('错误的请求');
      break;
      case 500 :
      Toast('请检查网络');
      default:
      Toast('未知的错误');
    }
  }else{
    if(error.message.indexOf('timeout') > -1){
      Toast('连接超时');
    }
  }
  return Promise.reject(error)
})
/**
 * @description 全局请求方法，默认是会有loading显示
 * @param {config} 请求的参数
 * @param {showLoading} 是否显示loading，默认显示
 */
export default (config, showLoading = true) => {
  config = Object.assign({}, config, {
    showLoading
  })
  return instance(config);
};
