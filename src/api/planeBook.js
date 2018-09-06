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
/**
 * @description 查询国内机票接口
 * @param {departDate} 起飞日期
 */
export function searchPlaneList(searchData) {
  console.log(searchData)
  const data = {
    fromCity: searchData.tmcItineraryTrips[0].itinerFromCode,
    toCity: searchData.tmcItineraryTrips[0].itinerToCode,
    airDate: departDate,
    siteType: searchData.classRequire,
    cmdShare: "1",
    stopType: "N"
  }
  // return request({
  //   url: 'flightController.do?queryFlightsList',
  //   method: 'post'
  // })
}
