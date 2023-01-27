const axios = require('axios')

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on('task', {
    getStub(url) {
      
      const result = axios.get(`https://ministryoftesting.pactflow.io/pacts/provider/Course_API/consumer/Student/version/0.0.2/stub${url}`,
        {
          headers: {
            Authorization: 'Bearer 123',
            Accept: 'application/json'
          }
        }).then(response => { 
          console.log(response.data)
          return response.data })
      return result
    },
  })
}
