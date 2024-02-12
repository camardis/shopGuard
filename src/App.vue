<template>
  <div id="app">
    <AppNavbar @login-clicked="openLoginModal"/>
    <router-view />
    <AuthentGuardLogin v-if="showModal" @close-modal="closeLoginModal"/>
  </div>
</template>

<script>
import AppNavbar from './components/Navbar.vue';
import AuthentGuardLogin from './components/Login.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
    AuthentGuardLogin,
  },
  data() {
    return {
      showModal: false // Flag to control the visibility of the login modal
    };
  },
  methods: {
    openLoginModal() {
      // Show the login modal when the login button is clicked
      this.showModal = true;
    },
    closeLoginModal() {
      // Close the login modal when it's closed
      this.showModal = false;
    }
  }
}
</script>

<style>
body {
  background-image: url('./assets/CamardisLogoUsable.png'); /* Adjust the path as needed */
  background-size: cover; /* Cover the entire element */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* Do not repeat the background image */
  margin: 0; /* Remove default body margin */
  padding: 0; /* Remove default body padding */
  height: 100vh; /* Set the body height to 100% of the viewport height */
}
</style>
