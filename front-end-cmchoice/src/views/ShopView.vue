<script setup>
  import { ref } from 'vue';

  import HeroSection from '../components/Shop/HeroSection.vue';
  import SideBar from '../components/Shop/SideBar/SideBar.vue';
  import FilterBar from '../components/Shop/FilterBar.vue'
  import ProductList from '../components/Product/ProductList.vue';

  const screenWidth = ref(window.screen.width)

  screen.orientation.addEventListener("change", function() {
    screenWidth.value = window.screen.width
  });

</script>

<template>
  <div class="container">
    <HeroSection/>
    <section class="py-5">
      <div class="row">
        <SideBar v-if="screenWidth >= 992"/>
        <div class="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
          <FilterBar/>
          <ProductList/>
        </div>
      </div>
    </section>
  </div>
</template>