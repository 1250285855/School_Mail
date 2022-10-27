import post from '@/api/index.js'

function login_request(data) {
  return post('/api/login/', data)
}