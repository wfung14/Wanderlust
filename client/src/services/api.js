import axios from 'axios'

export const BASE_URL = 'http://localhost:3001'

const Client = axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    console.log(token)
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    console.log(config)
    return config
  },
  (error) => Promise.reject(error)
)

export default Client