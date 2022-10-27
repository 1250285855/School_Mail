import axios from 'axios'

axios.baseURL = "127.0.0.1:8000"

function get(url, params = {}) {
  return axios.get(
    url, 
    params,
  )
}

function post(url, data = {}) {
  return axios.post(
    url,
    data,
  )
}