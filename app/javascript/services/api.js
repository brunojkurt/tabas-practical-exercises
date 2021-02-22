import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3000/api/v1'
})

export default api