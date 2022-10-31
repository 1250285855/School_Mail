import { ref } from 'vue'
import {get, post } from '@/api/index.js'

export async function login_request(data) {

  let value = await post('/api/login/', data)
  console.log(value)
  return value
}

export async function logout_request() {
  
    let value = await get('/api/logout/')
    console.log(value)
    return value
}

export async function register_request(data) {

  let value = await post('/api/register/', data)
  console.log(value)
  return value
}

export async function delete_request(data) {

  let value = await post('/api/delete_account/', data)
  console.log(value)
  return value
}

export async function account_list() {

  let value = await get('/api/account_list/')
  console.log(value)
  return value

}

export async function is_login() {
  
    let value = await get('/api/is_login/')
    console.log(value)
    return value
  
}