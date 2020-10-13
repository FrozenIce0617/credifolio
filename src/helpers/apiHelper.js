import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.credifolio.com/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
