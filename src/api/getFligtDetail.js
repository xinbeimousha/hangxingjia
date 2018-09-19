import request from './config.js';
export function getFligtDetail(floatresult,showLoading) {
  return request({
    url: 'flightController.do?getFlightList',
    method: 'POST',
    data:floatresult,
  },showLoading).then(res => {
    return Promise.resolve(res.data)
  })
}
