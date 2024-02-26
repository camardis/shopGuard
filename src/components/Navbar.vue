<template>
  <nav>
    <ul>
      <li><router-link to="/" class="nav-link">Home</router-link></li>
      <li v-if="!isAuthenticated"><button @click="openLoginModal" class="login-button">Login</button></li>
      <li v-else><router-link to="/dashboard" class="nav-link">Dashboard</router-link></li> <!-- Add link to Dashboard -->
      <li v-if="isAuthenticated"><button @click="logout" class="login-button">Logout</button></li> <!-- Add logout button -->
    </ul>
    <AuthentGuardLogin :modalActive="modalActive" @close-modal="closeLoginModal"/>
  </nav>
</template>

<script>
import AuthentGuardLogin from '../components/Login.vue';
import axios from '../plugins/axios'; // Import axios for API requests

export default {
  name: 'AppNavbar',
  components: {
    AuthentGuardLogin,
  },
  data() {
    return {
      modalActive: false,
      isAuthenticated: false // Initially, the user is not authenticated
    }
  },
  methods: {
    openLoginModal() {
      this.modalActive = true;
    },
    closeLoginModal(){
      this.modalActive = false;
    },
    async checkAuthState() {
    try {
        // Check if the user is authenticated using the JWT token
        const token = localStorage.getItem('jwt_token');
        console.log('token:', token);
        if (token) {
            // If token exists, send a request to the server to validate it
            const response = await axios.post('/Auth/check-auth', { token });
            if (response.status === 200) {
                // User is authenticated
                console.log('User is authenticated');
                this.isAuthenticated = true; // Update isAuthenticated here
            } else {
                // Token is invalid or expired
                console.error('Authentication failed:', response.data);
                this.isAuthenticated = false; // Ensure isAuthenticated is set to false
            }
        } else {
            // Token does not exist
            this.isAuthenticated = false; // Ensure isAuthenticated is set to false
        }
    } catch (error) {
        console.error('Error checking authentication state:', error);
        this.isAuthenticated = false; // Ensure isAuthenticated is set to false
      }
    },
    logout() {
      // Remove the JWT token from local storage
      localStorage.removeItem('jwt_token');
      // Update the authentication state
      this.isAuthenticated = false;
      // Redirect to the login page or perform any other necessary actions
      // For example, you can use Vue Router to navigate to a different route
      // this.$router.push('/login');
    }
  },
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
