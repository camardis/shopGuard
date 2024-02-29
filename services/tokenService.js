// services/tokenService.js
import axios from '../src/plugins/axios';

const tokenService = {
  async login(email, password) {
    const response = await axios.post('/Auth/login', { email, password });
    if(response.status == 200){
      console.log('axios request url: ', response.config.url)
      const { token } = response.data;
      localStorage.setItem('jwt_token', token);
      return token;
    }
    return null;
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
