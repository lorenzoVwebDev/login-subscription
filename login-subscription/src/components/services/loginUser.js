export function loginUser(credentials) {
  const token = fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)   
  }).then((response) => {
   return response.json()
  }).catch((error) => {
    console.error('Error:', error)
  })

  return token;
}