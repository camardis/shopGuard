<!--Navbar.vue-->
<template>
  <nav>
    <ul>
      <li><router-link to="/" class="nav-link">Home</router-link></li>
      <li v-if="!isAuthenticated"><button @click="openLoginModal" class="login-button">Login</button></li>
      <li v-else><router-link to="/dashboard" class="nav-link">Dashboard</router-link></li>
      <li v-if="isAuthenticated"><button @click="logout" class="login-button">Logout</button></li>
    </ul>
    <AuthentGuardLogin :modalActive="modalActive" @close-modal="closeLoginModal" @login-successful="checkAuthState"/>
  </nav>
</template>

<script>
import AuthentGuardLogin from '../components/Login.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'AppNavbar',
  components: {
    AuthentGuardLogin,
  },
  computed: {
    ...mapState(['isAuthenticated']),
  },
  data() {
    return {
      modalActive: false,
    }
  },
  methods: {
    ...mapActions(['logout', 'checkAuthState']),
    openLoginModal() {
      this.modalActive = true;
    },
    closeLoginModal() {
      this.modalActive = false;
    },
  },
  created() {
    this.checkAuthState();
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
