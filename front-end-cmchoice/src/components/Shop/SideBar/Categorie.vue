<script setup>
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        cat: {}
    })
</script>

<template>
    <div class="py-2 px-4 bg-dark text-white mb-3">
        <strong class="small text-uppercase fw-bold">
           {{ props.cat.nom }}
        </strong>
    </div>
    <ul class="list-unstyled small text-muted ps-lg-4 font-weight-normal">
        <li class="mb-2"><RouterLink to="/shop" class="reset-anchor" >Women's T-Shirts</RouterLink></li>
        <li class="mb-2"><RouterLink to="/shop" class="reset-anchor" >Men's T-Shirts</RouterLink></li>
        <li class="mb-2"><RouterLink to="/shop" class="reset-anchor" >Dresses</RouterLink></li>
        <li class="mb-2"><RouterLink to="/shop" class="reset-anchor" >Novelty socks</RouterLink></li>
        <li class="mb-2"><RouterLink to="/shop" class="reset-anchor" >Women's sunglasses</RouterLink></li>
        <li class="mb-2"><RouterLink to="/shop" class="reset-anchor" >Men's sunglasses</RouterLink></li>
    </ul>
</template>

<style scoped></style>