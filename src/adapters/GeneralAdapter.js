import Axios from "axios";

// const axios = require('axios').create({
//     baseURL: 'https://httpbin.org'
//   });
//   // Sends request to 'https://httpbin.org/get' 
//   const res = await axios.get('/get?hello=world');

// React components become coupled to the API
// React components are harder to maintain
// The view layer becomes more bloated
// Using new versions of API endpoints will break your views

// General adapter to call API
function returnAxiosInstance() {
  return Axios.create(initializers);
}

// Basic get
export function get(url){
    const axios = returnAxiosInstance();
    return axios.get(url);
}

// Basic post
export function post(url, requestData){
  const axios = returnAxiosInstance();
  return axios.post(url, requestData);
}