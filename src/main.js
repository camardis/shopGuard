// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router instance

const app = createApp(App);

// Use the router instance
app.use(router);

app.mount('#app');
