import axios from 'axios'

axios.baseURL = "127.0.0.1:8000"

export async function get(url, params = {}) {

  let value;

  await axios.get(
    url, 
    params,
  )
  .then((response) => {
    value = response.data
  })
  .catch((error) => {
    console.log(error)
    value = error
  })

  return value;

}

export async function post(url, data = {}) {

  let value;
  
  await axios.post(
    url,
    data,
  )
  .then((response) => {
    value = response.data
  })
  .catch((error) => {
    console.log(error)
    value = error
  })

  return value;
}

async function getToken() {
  const value = await get('/api/foo')
  if (value.status == 200) {
    return value['data']
  }
  return null
}