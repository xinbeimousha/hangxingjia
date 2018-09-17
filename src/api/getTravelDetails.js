import request from './config.js';
import qs from 'qs';
export function getTravelDetails(page,showLoading) {
  const Page ={
    state:page.state,
    page: page.page,
		pageSize: page.pageSize
  }
  return request({
    url: 'appTmcItineraryController.do?getTravelDetails',
    method: 'POST',
    data:qs.stringify(Page),
  },showLoading).then(res => {
    return Promise.resolve(res.data)
  })
}
