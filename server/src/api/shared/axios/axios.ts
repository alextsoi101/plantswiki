import axios from 'axios';

const PLANTS_API_URL: string = process.env.PLANTS_API_URL;
const PLANTS_API_TOKEN: string = process.env.PLANTS_API_TOKEN;

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