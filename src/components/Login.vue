<!-- Compoents/Login.vue -->
<template>
  <div class="modal" v-if="modalActive">
    <div class="modal-content">
      <i class="fa-regular fa-circle-xmark" @click="closeModal"></i>
      <h2 class="main-text">Welcome back</h2>
      <p class="signup-link">Don't have an account? <a href="#">Sign Up</a></p>
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
      this.$emit('close-modal');
      console.log("$emit is being called");
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/colors.scss';

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: var(--modalbackground-color);
}

.modal-content {
  background-color: var(--background-color);
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 400px;
  border-radius: 8px;
}

.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}

.main-text {
  margin-bottom: 5px;
}

.signup-link {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
  color: var(--text-color);
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
  color: var(--primary-color);
}

.login-btn {
  background-color: var(--primary-color);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
}

.login-btn:hover {
  background-color: #a04545;
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
