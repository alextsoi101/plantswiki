import axios from 'axios';

const plantsAPI = axios.create({
  baseURL: '',
  timeout: 10000,
});

plantsAPI.interceptors.request.use(config => {
  const token = '';

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
}, error => {
  return Promise.reject(error);
});

export default plantsAPI;