<script setup>
    import { ref } from 'vue';
   import { RouterLink } from 'vue-router';

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
   const imgtest = ref("https://blog.jangolo.cm/wp-content/uploads/2021/12/jUS.jpg")
</script>

<template>
    <section class="pt-5 ">
        <header class="text-center">
        <p class="small text-muted small text-uppercase mb-1">le meilleur de nos artisants </p>
        <h2 class="h5 text-uppercase mb-4">Parcourir nos categories</h2>
        </header>
        <div class="row flex-nowrap overflow-auto">
        <div class="col-10 col-sm-7 col-md-4">
            <RouterLink to="/shop" class="category-item" >
                <!-- <img class="img-fluid" :src="categories[0].imgPath" alt=""/> -->
                <div class="catHeight1 bg-cover bg-center catImg" :style="{'background-image':`url(${categories[0].imgPath})`}"></div>
                <strong class="category-item-title">{{ categories[0].nom }}</strong>
            </RouterLink>
        </div>
        <div class="col-11 col-sm-8 col-md-4">
            <RouterLink to="/shop" class="category-item mb-4">
                <!-- <img class="img-fluid" :src="categories[1].imgPath" alt=""/> -->
                <div class="catHeight2 bg-cover bg-center catImg" :style="{'background-image':`url(${categories[1].imgPath})`}"></div>
                <strong class="category-item-title">{{ categories[1].nom }}</strong>
            </RouterLink>
            <RouterLink to="/shop" class="category-item">
                <!-- <img class="img-fluid" :src="categories[2].imgPath" alt=""/> -->
                <div class="catHeight2 bg-cover bg-center catImg" :style="{'background-image':`url(${categories[2].imgPath})`}"></div>
                <strong class="category-item-title">{{categories[2].nom}}</strong>
            </RouterLink>
        </div>
        <div class="col-10 col-sm-7 col-md-4">
            <RouterLink to="/shop" class="category-item" >
                <!-- <img class="img-fluid" :src="categories[3].imgPath" alt=""/> -->
                <div class="catHeight1 bg-cover bg-center catImg" :style="{'background-image':`url(${categories[3].imgPath})`}"></div>
                <strong class="category-item-title">{{categories[3].nom}}</strong>
            </RouterLink>
        </div>
        </div>
    </section>
</template>

<style scoped>
.category-item {
  display: block;
  position: relative;
  color: #343a40;
  transition: all 0.3s;
}

.category-item .catImg {
  transition: all 0.3s;
}

.category-item-title {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #fff;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.07);
  font-size: 0.8rem;
}

.category-item:hover .catImg {
  opacity: 0.7;
}

.catHeight1 {
    height: 25rem;
}
.catHeight2 {
    height: 11.8rem;
}
</style>