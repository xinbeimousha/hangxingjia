import request from 'api/config';
import { PAGE_SIZE } from 'common/js/constant.js';
/**
 * @description 获取行程列表
 */

export function getItinerInfo(page,flowState,showLoading = false){
  const url = 'appTmcItineraryController.do?getItinerInfo';
  const method = 'post';
  const obj = {
    flowState,
    page,
    pageSize:PAGE_SIZE
  }

  return request({
    url,
    method,
    obj
  }).then(res => {
    console.log(res)
  })
}