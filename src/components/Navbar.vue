<!--components/Navbar.vue-->
<template>
  <nav>
    <ul>
      <li><router-link to="/" class="nav-link">Home</router-link></li>
      <li v-if="!authenticated"><router-link to="/login" class="nav-link">Login</router-link></li>
      <li v-if="authenticated"><button @click="logout" class="nav-link">Logout</button></li>
      <li v-if="authenticated"><router-link to="/dashboard" class="nav-link">Dashboard</router-link></li>
      <li><router-link to="/Products" class="nav-link">Product Page</router-link></li>
    </ul>
  </nav>
</template>

<script>
import authService from '../../services/authService';

export default {
  name: 'AppNavbar',
  data() {
    return {
      authenticated: false
    };
  },
  methods: {
    async checkAuthentication() {
      // Call your authService or any authentication service
      console.log('Checking authentication...', localStorage.getItem('jwt_token'));
      if (localStorage.getItem('jwt_token') != null) {
        const authentication = await authService.checkAuth(localStorage.getItem('jwt_token'));
        // Update the data property based on the authentication result
        this.authenticated = authentication;
        console.log('Authenticated:', this.authenticated);
      }    
    },
    logout() {
      localStorage.removeItem('jwt_token');
      this.authenticated = false;
      this.$router.push('/home');
    }
  },
  created() {
    this.checkAuthentication();
  },
  watch: {
    $route() {
      this.checkAuthentication();
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/colors.scss';

/* Navbar styling */
nav {
  background-color: var(--secondary-color);
  color: var(--text-color);
  width: 100%;
  height: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  height: 100%;
  align-items: center;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  padding: 20px 20px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: var(--background-color);
}

.login-button {
  background-color: var(--button-color);
  border: none;
  color: var(--text-color);
  cursor: pointer;
  padding: 10px 20px;
  margin: 0 10px; /* Adjust margin as needed */
  border-radius: 5px; /* Add border-radius */
}

.login-button:hover {
  background-color: var(--accent-color);
}
</style>
