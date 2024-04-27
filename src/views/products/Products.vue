<!-- views/Product.vue -->

<template>
    <div class="ProductPage">
      <div v-if="Allproducts.length === 0">
        <p>Loading products...</p>
      </div>
      <div v-else>
        <ProductCard :products="Allproducts" /> 
      </div>
    </div>
  </template>
  
  <script>
  import { productGuard } from '../../plugins/axios.js';
  import ProductCard from '../../components/ProductCard.vue';

  export default {
    name: 'ProductPage',
    components: {
      ProductCard,
    },
    data(){
      return {
        Allproducts: []
      };
    },
    async created() {
      try {
        const response = await productGuard.get('/Products');
        console.log('Products:', response.data);
        this.Allproducts = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
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
  