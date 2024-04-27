import { authGuard } from '../src/plugins/axios';

const signup = async (formData) => {
  try {
    const response = await authGuard.post('/Register/signup', formData);
    console.log(response);
    if (response.status === 200) {
      const { token } = response.data;
      localStorage.setItem('jwt_token', token);
      console.log("signupService: ", token)
      return response;
    }
    // Return null or handle other response statuses as needed
    console.log("signupService: ", response)
    return null;
  } catch (error) {
    // Handle signup error
    throw error.response.data.message;
  }
};

export default {
  signup
};
