import axios from 'axios';
import store from '@/store';

const [baseURL,timeout] = ['api',6000];
const [sessionId,ticket] = [store.getters.sessionId,store.getters.ticket];
const cookie = `JSESSIONID=${sessionId};ticket=${ticket};type=app;`
const headers = {
    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Encoding':'gzip, deflate, sdch',
    'Accept-Language':'zh-CN,zh;q=0.8',
    'Connection':'keep-alive',
    'Cookie':cookie
}
const isntance = axios.create({
    baseURL,
    timeout,
    headers,
});

// 响应拦截
isntance.interceptors.response.use(function (response) {
    console.log(response)
    return response;
  }, function (error) {
    // 对响应错误做点什么
    console.log(error)
    return Promise.reject(error);
  });

export default isntance;