import request from './config.js';
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
