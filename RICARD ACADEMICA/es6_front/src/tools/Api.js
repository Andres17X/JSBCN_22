/* api related functions */

const API_URL = "http://localhost:3030/api";


const login = (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  };

  return fetch(API_URL + "/usuari/login", requestOptions)
    .then(response => response.json())
    .catch(error => []);
}


const checkToken = (token) => {
  console.log("verificant", token)


  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token })
  };

  return fetch(API_URL + "/usuari/checktoken", requestOptions)
    .then(response => response.json())
    .catch(error => []);
}



export {
  login,
  checkToken
};