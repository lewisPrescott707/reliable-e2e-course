const axios = require('axios');

exports.getMyCourses = (endpoint) => {
  const url = endpoint.url
  const port = endpoint.port
  const token = endpoint.token

  return axios.get(`${url}:${port}/courses`, {
    headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
    }
  })
}
