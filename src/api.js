import { phone } from "faker";

const BASE_URL = 'http://localhost:8000';

async function callApi(endpoint, options = {}) {
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

const api = {
  getProducts() {
    return callApi(`/product/`);
  },
  getProduct(id) {
    return callApi(`/product/${id}`);
  },
  postBuy(name,phone,email,product,count) {
    return callApi('/buy/', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        phone: phone,
        email:email,
        product:product,
        productCount:count
      })
    })
  }
};

export default api;