import axios from 'axios';
import qs from 'qs';

export function login(name, password) {
  const url = 'api/appBaseController.do?applogin';
  const obj = {
    userName: name,
    passWord: password,
  }

  return axios.post(url, qs.stringify(obj), {
    timeout: 1000,
    header: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  }).then((res) => {
    return Promise.resolve(res.data);
  }).catch((err) => {
    return Promise.reject(err);
  })
}
