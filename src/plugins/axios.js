// axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:7055/api', // Replace with your API base URL
  timeout: 5000, // Set a reasonable timeout
});

export default instance;
