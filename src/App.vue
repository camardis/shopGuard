<!-- Compoents/App.vue -->
<template>
  <div id="app">
    <AppNavbar @login-clicked="openLoginModal"/>
    <router-view />
  </div>
</template>

<script>
import AppNavbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
  },
  data() {
    return {
      showModal: false // Flag to control the visibility of the login modal
    };
  },
  methods: {
    openLoginModal() {
      // Show the login modal when the login button is clicked
      console.log("The button press is resived")
      this.showModal = true;
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "karla", sans-serif;
}

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
