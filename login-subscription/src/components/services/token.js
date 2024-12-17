export async function setToken(credentials) {
  const token = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)   
  }).then((response) => {
    return response.json()
  })

 sessionStorage.setItem('token', JSON.stringify(token))
}

export function getToken() {
  const userToken  = JSON.parse(sessionStorage.getItem('token')) || '';
  return userToken?.token;
}