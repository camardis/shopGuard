<!-- LoginAuthentGuard.vue -->
<template>
    <div>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" v-model="UserName" required />
  
        <label for="password">Password:</label>
        <input type="password" v-model="Password" required />
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      UserName: '',
      Password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$axios.post('/Auth/login', {
          UserName: this.UserName,
          Password: this.Password,
        });

        console.log('Login successful:', response.data);

        // Redirect or perform other actions as needed
      } catch (error) {
        // Handle login error (display an error message, redirect, etc.)
        console.error('Login failed:', error);
      }
    },
  },
};
</script>
  
  <style>
  /* Add your custom styles here */
  </style>
  