// services/tokenService.js
import { authGuard } from '../src/plugins/axios';

const tokenService = {
  async login(email, password) {
    try {
      const response = await authGuard.post('/Auth/login', { email, password });
      if (response.status === 200) {
        console.log('axios request url: ', response.config.url);
        const { token } = response.data;
        localStorage.setItem('jwt_token', token);
        return token;
      } else {
        throw new Error('Unexpected response from server');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Throw specific error when credentials are incorrect
        throw new Error('Invalid email or password', 401);
      }
    }
  },
  
  logout() {
    // Clear token from localStorage upon logout
    localStorage.removeItem('jwt_token');
  },
  
  getToken() {
    // Retrieve token from localStorage
    return localStorage.getItem('jwt_token');
  },
  
  isAuthenticated() {
    // Check if token exists in localStorage
    return !!localStorage.getItem('jwt_token');
  }
};

export default tokenService;
