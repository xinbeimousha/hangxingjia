import request from './config.js';
import qs from 'qs'
/**
 * @description 查询国内机票接口
 * @param {departDate} 起飞日期
 */
export function searchPlaneList(searchData) {
  return request({
    url: 'flightController.do?queryFlightsList',
    method: 'post',
    data:qs.stringify(searchData)
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
