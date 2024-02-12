<template>
    <nav>
      <ul>
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><router-link to="/about" class="nav-link">About</router-link></li>
        <li><button class="login-button" @click="showLoginModal">Login</button></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'AppNavbar',
    methods: {
        showLoginModal() {
        // Emit an event to open the login modal
        this.$emit('show-login-modal');
        }
    }
  }
  </script>
  
  <style scoped>
  /* Add your navbar styling here */
  .login-button {
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 20px 20px;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #555;
}

  nav {
    background-color: #333;
    color: #fff;
    width: 100%;
    height: 60px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    height: 100%; /* Make the ul take up the full height of the nav */
    align-items: center; /* Vertically center the list items */
  }
  
  .nav-link {
    color: #fff;
    text-decoration: none;
    padding: 20px 20px;
    transition: background-color 0.3s ease;
  }
  
  .nav-link:hover {
    background-color: #555;
  }
  </style>
  