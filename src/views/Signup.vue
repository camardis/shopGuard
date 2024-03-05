<!--views/Signup.vue-->
<template>
  <div class="signup-page">
    <div class="signup-form">
      <h1 class="main-text">Welcome to Shop Guard</h1>
      <p class="sigin-link">Already have an account? <router-link to="/login">login</router-link></p>

      <form @submit.prevent="submitForm">
        <!-- Email field with custom alert message -->
        <div class="form-group">
          <label for="email">Email address</label>
          <div class="input-wrapper">
            <input type="email" id="email" v-model="formData.email">
          </div>
          <!-- Display custom alert message -->
          <div v-if="formErrors.email" class="alert-message">{{ formErrors.email }}</div>
        </div>

        <!-- Password field -->
        <div class="form-group">
          <label for="password">Password</label>
          <div class="input-wrapper">
            <input type="password" id="password" v-model="formData.password">
          </div>
          <div v-if="formErrors.password" class="alert-message">{{ formErrors.password }}</div>
        </div>

        <!-- Confirm Password field with custom alert message -->
        <div class="form-group">
          <label for="confirm-password">Confirm Password</label>
          <div class="input-wrapper">
            <input type="password" id="confirm-password" v-model="confirmPassword">
          </div>
          <!-- Display custom alert message -->
          <div v-if="formErrors.confirmPassword" class="alert-message">{{ formErrors.confirmPassword }}</div>
        </div>

        <!-- Checkbox for terms and conditions -->
        <div class="form-group">
          <div class="input-wrapper">
            <input type="checkbox" id="terms" v-model="formData.agreeToTerms">
            <label for="terms">I agree to the terms and conditions</label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">GET STARTED</button>
      </form>
    </div>
  </div>
</template>

<script>
import signupService from '../../services/signupService';

export default {
  name: 'SignupPage',
  data() {
    return {
      formData: {
        email: '',
        password: '',
        agreeToTerms: false
      },
      confirmPassword: '',
      formErrors: {
        email: '',
        password: '',
        confirmPassword: ''
      }
    };
  },
  methods: {
    async submitForm() {
      // Form validation logic
      if (!this.validateForm()) {
        // If form validation fails, prevent form submission
        return;
      }

      try {
        // Call signup service
        const token = await signupService.signup(this.formData);
        if (token) {
          // Signup successful
          this.$router.push('/home'); // Redirect to home page
        } else {
          // Handle signup failure
          console.error('Signup failed');
        }
      } catch (error) {
        // Handle signup error
        console.error('Signup error:', error);
      }
    },
    validateForm() {
      // Reset form errors
      this.formErrors = { email: '', password: '', confirmPassword: '' };

      // Validate email field
      if (!this.formData.email) {
        this.formErrors.email = 'Email address is required';
      } else if (!this.validateEmail(this.formData.email)) {
        this.formErrors.email = 'Invalid email address';
      }

      // Validate password field
      if (!this.formData.password) {
        this.formErrors.password = 'Password is required';
      } else if (this.formData.password.length < 8) {
        this.formErrors.password = 'Password must be at least 8 characters';
      } else if (this.formData.password.length > 20) {
        this.formErrors.password = 'Password must be at most 20 characters';
      }

      // Validate confirm password field
      if (this.formData.password !== this.confirmPassword) {
        this.formErrors.confirmPassword = 'Passwords do not match';
      }

      // Check if any form errors exist
      return !Object.values(this.formErrors).some(error => error !== '');
    },
    validateEmail(email) {
      // Regular expression pattern for validating email address
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  }
};
</script>
  
  <style lang="scss" scoped>
  /* Ensure HTML and body take up the full viewport height */
  html, body {
    height: 100%;
    margin: 0; /* Remove default margin */
    padding: 0; /* Remove default padding */
  }
  
  .signup-page {
    /* Center content vertically and horizontally */
    display: flex;
    justify-content: center;
    /* Set background color */
    background-color: var(--background-color);
    /* Ensure the background covers the entire viewport */
    min-height: 100vh;
  }

  .signup-form {
    padding-top: var(--form-padding-top);
    width: var(--form-width);
  }

  .main-text{
    color: var(--text-color);
    padding-bottom: 20px;
  }

  .sigin-link{
    color: var(--text-color);
    padding-bottom: 10px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }

  .alert-message {
    color: red;
  }
  
  label {
    display: block;
    font-weight: bold;
    padding-bottom: 5px;
    color: var(--text-color);
  }
  
  .input-wrapper {
    display: flex;
    align-items: center;
  }
  
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .input-wrapper input[type="checkbox"] {
  margin-right: 15px; 
  }
  
  button {
    width: 100%;
    padding: 10px 20px;
    font-size: 16px;
    border: none; /* Remove button border */
    border-radius: 5px; /* Make button edges rounded */
    background-color: var(--button-color); /* Set button background color */
    color: var(--text-color); /* Set button text color */
    cursor: pointer; /* Change cursor to pointer on hover */
  }
  </style>
  