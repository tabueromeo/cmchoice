<script setup>
  import ProductCard from '../components/ProductCard.vue';
</script>

<template>
  <div class="about">
    <div>
      <ProductCard/>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    /* display: flex; */
    align-items: center;
  }
}
</style>
