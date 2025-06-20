import axios from 'axios';

const api = axios.create({
  baseURL: 'https://central-bank-communication-in-india.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;