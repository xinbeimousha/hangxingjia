import request from './config.js';
import qs from 'qs';

/**
 * @description 获取国内机票订单列表接口
 */
export function getFlightOrders(page){
  const url = 'flightController.do?getFlightOrders';
  const obj = {
    page:1,
    rows:10
  };

  return request({
    url,
    method:'post',
    data:qs.stringify(obj)
  }).then(res => {
    console.log(res)
  })
}