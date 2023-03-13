<script setup>
    import { ref } from 'vue';
    import CategorieVue from './Categorie.vue';

    const categories = ref([
    {
        id: 1,
        nom: "agroalimemtaire",
        imgPath: "https://z-p3-scontent.fdla3-2.fna.fbcdn.net/v/t1.6435-9/107894377_1156440184712486_7241272393039203839_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=973b4a&_nc_ohc=e-TwyFouCsgAX9thqXz&_nc_ht=z-p3-scontent.fdla3-2.fna&oh=00_AfCSvndqB1ZCfuX1po8xlQLffP1emlwK3H8xn1lOh-W1BA&oe=64316A56",
        description: "produits agroalimemtaire made in cameroon"
    },
    {
        id: 2,
        nom: "cosmetique",
        imgPath: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://www.auletch.com/wp-content/uploads/2019/05/AULETCH-25.jpg",
        description: "produits cosmetiques made in cameroon"
    },
    {
        id: 3,
        nom: "sante",
        imgPath: "https://www.journalducameroun.com/wp-content/uploads/2022/07/med-780x440.jpg",
        description: "produits a base de plante médécinales"
    },
    {
        id: 4,
        nom: "Mode",
        imgPath: "https://madein-cameroon.cm/wp-content/uploads/2021/01/dip-14.jpg",
        description: "vetements et accesoires de modes made in cameroon"
    },
   ])
</script>

<template>
    <div class="col-lg-3 order-2 order-lg-1">
        <h5 class="text-uppercase mb-4">Categories</h5>
        <CategorieVue v-for="categorie in categories" :key="categorie.id" :cat="categorie"/>
    </div>
</template>

<style scoped></style>