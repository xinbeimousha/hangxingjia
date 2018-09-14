import request from 'api/config.js';
import qs from 'qs';

/**
 * @description 获取同行人接口
 */

export function getOthersInItinerary(expId){
  const url = 'appTmcItineraryController.do?getOthersInTravel';
  const method = 'post';

  return request({
    url,
    method,
    data:qs.stringify({expId})
  }).then(res => {
    return Promise.resolve(res.data)
  })
}