<!-- Compoents/Login.vue -->
<template>
  <div class="modal" v-if="modalActive">
    <div class="modal-content">
      <h2>Welcome back</h2>
      <p>Don't have an account? <a href="#">Sign Up</a></p>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
          <a href="#" class="forgot-password">Forgot Password?</a>
        </div>
        <button type="submit" class="login-btn">LOGIN</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthentGuardLogin',
  props: {
    modalActive: Boolean
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        // Perform login logic here
        console.log('Login successful');

        // Close the modal after successful login
        this.closeModal();
      } catch (error) {
        // Handle login error
        console.error('Login failed:', error);
      }
      this.$emit('close-modal');
    },
    closeModal() {
      // Close the modal
      this.$emit('close');
      console.log("$emit is being called");
    }
  }
};
</script>

<style scoped>
/* Modal styles */
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 400px;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.forgot-password {
  display: block;
  margin-top: 10px;
}

.login-btn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.login-btn:hover {
  background-color: #45a049;
}

.close {
  color: #aaa;
  float: right;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>

