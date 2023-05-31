<template>
   <div :id="childrens? 'carouselExampleIndicators-n-' + childrens.length : 'carouselExampleIndicators'" class="carousel slide boxCarous">
        <div class="carousel-indicators">
          <button v-for="(photo, index) in productprop.photos" :key="index" type="button" 
            :data-bs-target="childrens? '#carouselExampleIndicators-n-' + childrens.length: '#carouselExampleIndicators'" 
            :data-bs-slide-to="index" :class="{'active': index === 0}" 
            :aria-label="`Slide ${index + 1}`">
          </button>
        </div>
        <div class="carousel-inner">
         <div v-for="(photo, index) in productprop.photos" :key="index"
          :class="['carousel-item', 'n-' + index, { 'active': index === 0 }]" >
           <img :src="photo.url" class="d-block w-100">
         </div>
        </div>
        <button class="carousel-control-prev" type="button" :data-bs-target="childrens? '#carouselExampleIndicators-n-' + childrens.length: '#carouselExampleIndicators'" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" :data-bs-target="childrens? '#carouselExampleIndicators-n-' + childrens.length: '#carouselExampleIndicators'" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
       </button>
  </div>
  <h2>{{productprop.name}}</h2>
  <p>{{productprop.price}} FCFA</p>
  <p>{{productprop.description}}</p>
  <p>{{productprop.quantity}} productprops available</p>
  <button @click="deleteProductActions(productprop)" class="delete-product">Delete</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
     props: {
       productprop : {
         type: Object,
         required : true,
       },
     },
    data () {
        return {
            childrens : document.getElementById("productCards").children ,
        }
    },
    methods: { 
     ...mapActions({ 
        deleteProductActions:'AddProductMod/deleteProductActions',  
      }),   
    } ,
}
</script>

