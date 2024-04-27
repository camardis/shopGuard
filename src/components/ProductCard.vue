<!-- views/ProductCard.vue -->

<template>
  <div class="ProductCard">
    <div v-for="product in products" :key="product.uuid">
      <div class="ProductCardItem">
        <div>
            <img :src="product.image" :alt="product.name" />
        </div>
        <div>
            <h2>{{ product.name }}</h2>
            <p>{{ product.shortDescription }}</p>
            <p>{{ product.price }} €</p>
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
      required: true
    }
  },
  methods: {
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
  height: auto;
  border-radius: 8px;
}
</style>
