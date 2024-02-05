// main.js
import { createApp } from 'vue';
import App from './App.vue';
import axios from './plugins/axios.js'; // Import the Axios instance

const app = createApp(App);

// Make Axios available throughout the app
app.config.globalProperties.$axios = axios;

app.mount('#app');
