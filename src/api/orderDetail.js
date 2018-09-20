import request from 'api/config.js';
import qs from 'qs';
/**
 * @description 获取国内机票订单详情
 */
export function getDomeFlightorderDetail(orderId){
  const url = 'flightController.do?getFlightOrderDetailByOrderCode';
  const method = 'get';
  const obj = {
    orderId
  }
  return request({
    url,
    method,
    params:obj
  }).then(res => {
    return Promise.resolve(res.data)
  })

}
/**
 * @description 取消国内机票订单
 */
export function cancelFlight(detailId){
  const url = 'flightController.do?cancelFlight';
  const method = 'post';
  const obj = {
    detailId
  }
  return request({
    url,
    method,
    data:qs.stringify(obj)
  }).then(res => {
    return Promise.resolve(res.data);
  })
}
/**
 * @description 获取国际机票订单详情
 */
export function getInterFlightorderDetail(detailId,orderId){
  const url = 'interFlightController.do?getInterFlightOrderDetails';
  const method = 'post';
  const obj = {
    detailId,
    orderId
  }
  return request({
    url,
    method,
    data:qs.stringify(obj)
  }).then(res => {
    return Promise.resolve(res.data)
  })
}