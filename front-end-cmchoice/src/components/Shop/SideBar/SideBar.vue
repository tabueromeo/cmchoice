<script setup>
    import { ref } from 'vue';
    import CategorieVue from './Categorie.vue';
    // import noUiSlider from 'nouislider';
    import Slider from '@vueform/slider'


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
//     const pricerange = ref(null)
//    let slider = document.getElementById('range');

//    console.log(pricerange);

    // noUiSlider.create(pricerange, {
    //     start: [20, 80],
    //     connect: true,
    //     range: {
    //         'min': 0,
    //         'max': 100
    //     }
    // });

    const valeur = ref([0,100000])
</script>

<template>
    <div class="col-lg-3 order-2 order-lg-1 ">
        <h6 class="text-uppercase mb-2">Prix</h6>
        <div class="price-range pt-22 mb-5">
            <div ref="pricerange" id="range">
                <div class="row text-sm">
                    <!-- <div class="col-6   py-3">
                        <div class="d-flex border text-center align-items-center  py-2 px-1">
                            <input v-model="valeur[0]" type="number" class="border-0 text-sm form-control">
                            <span class="text-sm">XAF</span>
                        </div>
                    </div> -->
                    <div class="col-6   py-3">
                        <!-- <div class="d-flex border text-center align-items-center  py-2 px-1"> -->
                            <input v-model="valeur[0]" type="number" class="text-sm form-control">
                            <!-- <span>XAF</span> -->
                        <!-- </div> -->
                    </div>
                    <div class="col-6   py-3">
                        <!-- <div class="d-flex border text-center align-items-center  py-2 px-1"> -->
                            <input v-model="valeur[1]" type="number" class="text-sm form-control">
                            <!-- <span>XAF</span> -->
                        <!-- </div> -->
                    </div>
                    <!-- <div class="col-6 text-sm  py-3">
                        <div class="border text-center py-2">{{ valeur[1] }} XAF</div>
                    </div> -->
                </div>
                <Slider 
                v-model="valeur" :min="0" :max="100000" :step="500" :format="{suffix: ' XAF'}"
                :tooltips="false" class="spicing"
            />
            </div>
            <div class="row pt-2">
                <div class="col-6"><strong class="small fw-bold text-uppercase">min</strong></div>
                <div class="col-6 text-end"><strong class="small fw-bold text-uppercase">max</strong></div>
            </div>
        </div>
        
        <h5 class="text-uppercase mb-4">Categories</h5>
        <CategorieVue v-for="categorie in categories" :key="categorie.id" :cat="categorie"/>
    </div>
</template>

<style src="@vueform/slider/themes/default.css"></style>
<style scoped>
    /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.spicing {
    padding-left: 10px;
    padding-right: 10px;
}
</style>