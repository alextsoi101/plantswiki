import axios from 'axios';

const PLANTS_API_URL: string = process.env.PLANTS_API_URL || 'https://trefle.io/api/v1/';
const PLANTS_API_TOKEN: string = process.env.PLANTS_API_TOKEN || 'ot6CXjhUI_IeB0RwYTdJB4lgI-Rcmzq4U1mEEPa6v7M';

const plantsAPI = axios.create({
  baseURL: PLANTS_API_URL,
  timeout: 10000,
});

plantsAPI.interceptors.request.use(config => {
  const token = PLANTS_API_TOKEN;

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
}, error => {
  return Promise.reject(error);
});

export default plantsAPI;