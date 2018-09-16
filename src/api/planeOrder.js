import request from 'api/config';
import qs from 'qs';

/**
 * @description 机票校验规则
 */
export function checkFlightRule({
  itineraryId,
  al,
  fTotalPrice,
  cause,
  contactTelephone,
  passengers,
  flightCheckPriceDTOList
}) {
  const url = 'flightController.do?checkFlightRule';
  const method = 'post';
  const checkRuleData = {
    itineraryId,
    al,
    fTotalPrice,
    cause,
    contactTelephone,
    passengers,
    flightCheckPriceDTOList
  }
  return request({
    url,
    method,
    data: checkRuleData
  }).then(res => {
    return Promise.resolve(res.data);
  })
}
/**
 * @description 提交订单
 */
export function planeBook(orderData) {
  const url = 'flightController.do?planeBook';
  const method = 'post';

  return request({
    url,
    method,
    data: orderData,
  }).then(res => {
    return Promise.resolve(res.data);
  })
}
