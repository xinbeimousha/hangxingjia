import request from 'api/config';
import qs from 'qs';

export function login(name, password) {
  const obj = {
    userName: name,
    passWord: password,
  }
  return request({
    url:'appBaseController.do?applogin',
    method:'post',
    data:qs.stringify(obj),
    header:{
      'Content-type': 'application/x-www-form-urlencoded'
    }
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
