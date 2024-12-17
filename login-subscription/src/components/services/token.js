export async function getToken(credentials, setToken) {
  const token = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)   
  }).then((response) => {
    return response.json()
  })

/*   setToken(token) */
}