const BASE_URL = 'http://localhost:8000';
const base64 = require('base-64');

async function callApi(endpoint, options = {}) {
  options.headers = {
    ...options.headers,
    'Content-Type': 'application/json',
  };
  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

const api = {
  createUser(data) {
    const { name, phone, email, password } = data;
    return callApi('/user/', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        password: password,
        phone: phone,
        email: email,
      })
    })
  },
  singIn(data) {
    const { email, password } = data;
    const username = email;
    return callApi('/auth/sign-in', {
      method: 'POST',
      headers: { 'Authorization': `Basic ${base64.encode(username + ":" + password)}` }
    })
  }
};

export default api;