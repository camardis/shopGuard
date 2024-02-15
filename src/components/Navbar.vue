<!-- Compoents/Navbar.vue -->
<template>
  <nav>
    <ul>
      <li><router-link to="/" class="nav-link">Home</router-link></li>
      <li><button @click="openLoginModal" class="login-button">Login</button></li>
    </ul>
    <AuthentGuardLogin :modalActive="modalActive" @close-modal="closeLoginModal"/>
  </nav>
</template>

<script>
import AuthentGuardLogin from '../components/Login.vue';

export default {
  name: 'AppNavbar',
  components: {
    AuthentGuardLogin,
  },
  data() {
    return {
      modalActive: false
    }
  },
  methods: {
    openLoginModal() {
      this.modalActive = true;
      console.log("openModal mehtod is been called, modalAcite:", this.modalActive);
    },
    closeLoginModal(){
      this.modalActive = false;
      console.log("modal have been closed from navbar", this.modalActive);
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
  background-color: var(--primary-color);
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px 20px;
  margin: 0 10px; /* Adjust margin as needed */
  border-radius: 5px; /* Add border-radius */
}

.login-button:hover {
  background-color: var(--accent-color);
}
</style>