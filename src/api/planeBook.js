import request from './config.js';
import axios from 'axios';
/**
 * @description 获取舱位等级接口
 */
export function getBudgetSpaceType() {
  return request({
    url: 'appBudgetRuleController.do?getBudgetSpaceType',
    method: 'post'
  }).then(res => {
      return Promise.resolve(res.data)
  })
}
/**
 * @description 获取行程接口
 */
export function getItineraryList() {
  return request({
    url: 'appTmcItineraryController.do?queryForExp',
    method: 'post'
  }).then(res => {
      return Promise.resolve(res.data);
  })
}

