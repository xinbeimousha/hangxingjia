import request from './config.js';
import qs from 'qs';

/**
 * @description 获取国内机票订单列表接口
 */
export function getFlightOrders(page,showLoading){
  const url = 'flightController.do?getFlightOrders';
  const obj = {
    page:page,
    rows:10
  };

  return request({
    url,
    method:'post',
    data:qs.stringify(obj)
  },showLoading).then(res => {
    return Promise.resolve(res.data)
  })
}