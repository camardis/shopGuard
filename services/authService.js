import axios from '../src/plugins/axios';

const authService = {
  async checkAuth(token) {
    try {
      // Use a different name for the response variable to avoid conflict
      const response = await axios.post('/Auth/check-auth', { token });
      // Change the variable name in the destructuring assignment
      if(response.status === 200) {
        return true;
      }
      return false;
    } catch (error) {
      throw error.response.data.message;
    }
  },
  logout() {
    localStorage.removeItem('jwt_token');
  },
  isAuthenticated() {
    return !!localStorage.getItem('jwt_token');
  }
};

export default authService;
