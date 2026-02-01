import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  withCredentials: true, // Important for CORS if using cookies/sessions in future, harmless now
});

export default api;
