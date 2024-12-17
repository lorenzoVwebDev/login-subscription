export async function loginUser(credentials) {
  console.log(credentials)
  const response =  await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(response => {return response.json()})
}

export function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
  console.log('hello')
}

export function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken.token
}