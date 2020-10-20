import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.coinpaprika.com/v1/',
});

export default api;
