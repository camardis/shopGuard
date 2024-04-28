<!-- views/ProductCard.vue -->

<template>
  <div class="ProductCard">
    <div v-for="product in products" :key="product.uuid">
      <div class="ProductCardItem">
        <div class="ProductCardImage">
          <img :src="getProductImage(product)" :alt="product.name" />
        </div>
        <div>
          <h2>{{ product.name }}</h2>
          <p>{{ product.shortDescription }}</p>
          <h2>{{ product.price }} €</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    products: {
      type: Object,
      required: true,
    }
  },
  methods: {
    getProductImage(product) {
      if(product.image === "null" || product.image === null || product.image === "string") {
        return require(`../assets/ProductImages/placeholder.png`);
      }
      return require(`../assets/ProductImages/${product.image}`);
    }
  },
};

</script>


<style lang="scss" scoped>
.ProductCard {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.ProductCardItem {
  background-color: var(--xxx-color);
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  height: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.ProductCardItem h2 {
  margin-top: 0;
}

.ProductCardItem p {
  margin-bottom: 10px;
}

.ProductCardItem img {
  max-width: 100%;
  height: 200px;
  border-radius: 8px;
}
</style>
