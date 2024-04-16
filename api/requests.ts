import axios from "axios"
let request = (method: any, url: any, params: any, header: any,) => {
  let headers = {
    'Content-Type': 'application/json',
    'Accept': '*/*',
    ...header
  }

  let config = {
    method,
    url: `http://${url}`,
    headers,
    data: params
  };
  return axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}
export { request }