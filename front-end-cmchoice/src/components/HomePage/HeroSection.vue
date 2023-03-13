<script setup>
   import { ref } from 'vue';
   import { RouterLink } from 'vue-router';

   const bannerImage = ref("https://www.suyashayurveda.com/wp-content/uploads/2022/04/Palm-Oil-Suyash-600x360.jpg")
</script>

<template>
    <section class="hero pb-3 bg-cover bg-center d-flex align-items-center" :style="{'background-image':`url(${bannerImage})`}">
        <div class="container py-5">
        <div class="row px-4 px-lg-5">
            <div class="col-lg-6">
                <p class="text-muted small text-uppercase mb-2">Les meilleurs produits</p>
                <h1 class="h2 text-uppercase mb-3">Made in Cameroon</h1>
                <RouterLink to="/shop" class="btn btn-dark">Voir les produits</RouterLink>
            </div>
        </div>
        </div>
    </section>
</template>

<style scoped>
    .hero {
        min-height: 30rem;
    }
</style>