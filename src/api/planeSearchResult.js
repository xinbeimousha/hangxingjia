import request from './config.js';
import { getDate2 } from 'common/js/day.js';
import qs from 'qs'
/**
 * @description 查询国内机票接口
 */
export function searchPlaneList(searchData) {
  return request({
    url: 'flightController.do?queryFlightsList',
    method: 'post',
    data: qs.stringify(searchData)
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
/**
 * @description 验价接口
 */
export function checkPrice(flight,seat) {
  const url = 'flightController.do?checkPriceWithoutPNR';
  const obj = {
    carrier: flight.airlineCode,
    flightNo: flight.flightNo,
    classCode: seat.code,
    depart: flight.depAirportCode,
    arrival: flight.arrAirportCode,
    departDate: getDate2(flight.depDate)
  }
  return request({
    url,
    method: 'post',
    data: qs.stringify(obj)
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
