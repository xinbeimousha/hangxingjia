import request from 'api/config';
import qs from 'qs';

export function login(name, password) {
  const obj = {
    userName: name,
    passWord: password,
  }

  return request.post('/appBaseController.do?applogin', qs.stringify(obj), {
    header: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  }).then((res) => {
    return Promise.resolve(res.data);
  }).catch((err) => {
    return Promise.reject(err);
  })
}
