<template>
    <div class="signup-page">
      <div class="signup-form">
        <h1 class="main-text">Welcome</h1>
        <p class="sigin-link">Already have an account? <router-link to="/signin">Sign In</router-link></p>
  
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="email">Email address</label>
            <div class="input-wrapper">
              <input type="email" id="email" v-model="formData.Email" required>
            </div>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <div class="input-wrapper">
              <input type="password" id="password" v-model="formData.Password" required>
            </div>
          </div>
  
          <button type="submit" class="btn btn-primary">GET STARTED</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from '../plugins/axios';

  export default {
    name: 'SignupPage',
    data() {
      return {
        formData: {
          Email: '',
          Password: ''
        }
      };
    },
    methods: {
      async submitForm() {
        const response = await axios.post('/Register/signup', this.formData);
        if (response.status === 200) {
          console.log('Signup successful');
        } else {
          console.log('Signup failed');
        }
      },
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
    align-items: center;
    /* Set background color */
    background-color: var(--background-color);
    /* Ensure the background covers the entire viewport */
    min-height: 100vh;
  }

  .signup-form {
    width: 400px;
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
  