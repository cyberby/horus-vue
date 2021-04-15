import axios from 'axios';



console.log("VUE_APP_BASE_URL - s");
console.log(process.env);
console.log("VUE_APP_BASE_URL - e");
const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

api.interceptors.response.use(
  (request) => request,
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
