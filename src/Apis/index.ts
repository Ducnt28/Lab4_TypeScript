import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:200011111',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 3000
})

export default instance
