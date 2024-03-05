<!--view/Login.vue-->
<template>
  <div class="login-page">
    <div class="login-form">

      <!-- Error message -->
      <div class="error-message">
       <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>

      <h1 class="main-text">Welcome back</h1>
      <p class="sigin-link">Don't have an account? <router-link to="/signup">Sign up</router-link></p>

      <!-- Bind the loginform method to the form's submit event -->
      <form @submit="handleSubmit">
        <!-- Email field -->
        <div class="form-group">
          <label for="email">Email address</label>
          <div class="input-wrapper">
            <input type="email" id="email" v-model="email" placeholder="Fx shop@example.dk">
          </div>
          <!-- email Error -->
          <div class="alert-message">
            <p v-if="emailError" class="alert-message">{{ emailError }}</p>
          </div>
        </div>

        <!-- Password field -->
        <div class="form-group">
          <label for="password">Password</label>
          <div class="input-wrapper">
            <input type="password" id="password" v-model="password" placeholder="**********">
          </div>
          <!-- password Error -->
          <div class="alert-message">
            <p v-if="passwordError" class="alert-message">{{ passwordError }}</p>
          </div>
        </div>

        <!-- Submit button -->
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>

  
<script>
  import tokenService from '../../services/tokenService.js';
  
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: '',
        emailError: '',
        passwordError: '',
        errorMessage: ''
      };
    },
    methods: {
    async handleSubmit(event) {
      event.preventDefault(); // Prevent default form submission behavior

      // Validate form fields
      if (this.validaForm()) {
        try {
          // Call login service with email and password
          const token = await tokenService.login(this.email, this.password);
          // If token is not null, login was successful
          if (token) {
            console.log('Login successful');
            this.$router.push('/dashboard'); // Redirect to home page
          } else {
            // Handle case where token is null (login failed but no specific error message provided)
            this.errorMessage = 'Invalid email or password'; // Set error message
          }
        } catch (error) {
          // Handle specific error cases
          if (error instanceof  Error) {
            this.errorMessage = error.message; // Set error message
          } else {
            // Handle generic error case
            this.errorMessage = 'An error occurred while logging in'; // Set error message
          }
        }
      }
    },
    validaForm() {
      // Reset form errors
      this.emailError = '';
      this.passwordError = '';

      // Validate email field
      if (!this.email) {
        this.emailError = 'Email address is required';
        return false;
      } else if (!this.validateEmail(this.email)) {
        this.emailError = 'Invalid email address';
        return false;
      }

      // Validate password field
      if (!this.password) {
        this.passwordError = 'Password is required';
        return false;
      }
      
      return true;
    },
    validateEmail(email) {
      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
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
  
  .login-page {
    /* Center content vertically and horizontally */
    display: flex;
    justify-content: center;
    /* Set background color */
    background-color: var(--background-color);
    /* Ensure the background covers the entire viewport */
    min-height: 100vh;
  }

  .login-form {
    padding-top: var(--form-padding-top);
    width: var(--form-width);
  }

  .error-message {
    color: red;
  }

  .alert-message {
    color: red;
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
  