<!-- views/Product.vue -->

<template>
    <div class="ProductPage">
      <h1>Welcome to the Product Page!</h1>
      <!-- Add your dashboard content here -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductPage'
  };
  </script>
  
  <style scoped>
  html, body {
    height: 100%;
    margin: 0; /* Remove default margin */
    padding: 0; /* Remove default padding */
  }

  /* Add styling for your dashboard page */
  .ProductPage {
    /* Center content vertically and horizontally */
    display: flex;
    justify-content: center;
    align-items: center;
    /* Set background color */
    background-color: var(--background-color);
    /* Ensure the background covers the entire viewport */
    min-height: 100vh;
  }
  </style>
  