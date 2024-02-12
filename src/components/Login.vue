<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
  
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
  
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthentGuardLogin',
  data() {
    return {
      isVisible: false,
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$axios.post('/Auth/login', {
          UserName: this.username,
          Password: this.password,
        });

        console.log('Login successful:', response.data);

        // Redirect or perform other actions as needed

        // Close the modal after successful login
        this.closeModal();
      } catch (error) {
        // Handle login error (display an error message, redirect, etc.)
        console.error('Login failed:', error);
      }
    },
    openModal() {
      // Show the modal
      this.isVisible = true;
    },
    closeModal() {
      // Close the modal
      this.isVisible = false;
    }
  }
};
</script>

<style scoped>
/* Modal styles */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
