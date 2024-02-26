// services/loginService.js
import tokenService from './tokenService'; // Import tokenService

const login = async (email, password) => {
  // Call the login method from tokenService
  const token = await tokenService.login(email, password);
  return token;
};

export default {
  login
};
