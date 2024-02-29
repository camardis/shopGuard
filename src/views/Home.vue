<template>
    <div class="main-text">
      <h1>Welcome to the Home-Page</h1>
      <!-- Add your home page content here -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    components: {

    }
  };
  </script>
  
  <style lang="scss" scoped>
  /* Add your component-specific styles here */
  // make this full primarycoloer

  .main-text{
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--text-color);
  }
  </style>
  