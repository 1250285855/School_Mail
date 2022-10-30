import { ref } from 'vue'
import {get, post } from '@/api/index.js'

export async function login_request(data) {

  let value = await post('/api/login/', data)

  return value
}

export async function logout() {
  
    let value = await get('/api/logout/')
  
    return value
}

export async function register_request(data) {

  let value = await post('/api/register/', data)

  return value
}

export async function delete_request(data) {

  let value = await post('/api/delete_account/', data)

  return value
}

export async function account_list() {

  let value = await get('/api/account_list/')
  console.log(value)
  return value

}

export async function isLogin() {
  
    let value = await get('/api/is_login/')
    return value
  
}