// axios.js
import axios from 'axios';

const instance = axios.create({
  //baseURL: 'https://localhost:7055/api', // dev
  baseURL: 'https://authentguardapi-prod.azurewebsites.net/api', // prod
  timeout: 5000, // Set a reasonable timeout
});

export default instance;
