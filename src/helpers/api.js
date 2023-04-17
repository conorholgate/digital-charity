const contentful = require('contentful')

export const client = contentful.createClient({
  space: 'uc04f7xuy4zy',
  environment: 'master', // defaults to 'master' if not set
  accessToken: '9VwGreFjYMQMCamE2GCV-j4L7Fh9s4-TpqIlWa1embw',
})

export default client
