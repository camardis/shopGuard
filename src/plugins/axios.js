// axios.js
import axios from 'axios';

export const authGuard = axios.create({
  baseURL: 'https://localhost:7055/api', // dev
  //baseURL: 'https://authentguardapi-prod.azurewebsites.net/api', // prod
  timeout: 5000, // Set a reasonable timeout
});

export const productGuard = axios.create({
  baseURL: 'https://localhost:7110/api', // dev
  //baseURL: 'https://productguardapi-prod.azurewebsites.net/api', // prod
  timeout: 5000, // Set a reasonable timeout
});
