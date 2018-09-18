import request from './config.js';
import qs from 'qs';
export function getTripOrderList(itineraryId, showLoading) {
  let data = {
    itineraryId: itineraryId
  }
  return request({
    url: 'appTmcItineraryController.do?getOrdersByItineraryId',
    method: 'POST',
    data: qs.stringify(data),
  }, showLoading).then(res => {
    return Promise.resolve(res.data)
  })
}
