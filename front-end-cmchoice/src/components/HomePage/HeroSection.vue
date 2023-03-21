<script setup>
   import { ref } from 'vue';
   import { RouterLink } from 'vue-router';

   const bannerImage = ref("https://www.suyashayurveda.com/wp-content/uploads/2022/04/Palm-Oil-Suyash-600x360.jpg")
</script>

<template>
    <section class="hero pb-3 bg-cover  bg-center d-flex align-items-center" :style="{'background-image':`url(${bannerImage})`}">
        <div class="container py-5">
        <div class="row px-4 px-lg-5">
            <div class="col-lg-6">
                <p class="text-muted small text-uppercase mb-2">Les meilleurs produits</p>
                <h1 class="h2 text-uppercase mb-3">Made in Cameroon</h1>
                <RouterLink to="/shop" class="btn btn-dark shop">
                    Découvrir
                    <svg viewBox="0 0 46 16" height="10" fill="white" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                    </svg>
                </RouterLink>
            </div>
        </div>
        </div>
    </section>
</template>

<style scoped>
    .hero {
        min-height: 30rem;
    }
    .shop svg {
        transition: transform .3s ease-in-out;
    }
    .shop:hover svg {
        transform: translateX(5px);
    }
    /* .shop:hover {
        background-color: greenyellow;
        border: 1px solid greenyellow;
    } */
    
</style>