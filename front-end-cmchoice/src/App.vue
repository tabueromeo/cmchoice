<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import PanierView from './views/PanierView.vue'
</script>

<template>
     <header>
       <div class="router-link">
         <RouterLink to="/Cart">CART2</RouterLink>
         <RouterLink to="/Home/AddProduct">ADD PRODUCT</RouterLink>
       </div>
     </header>
   <router-view ></router-view>

</template>


<script>


export default {
  name: 'App',

  components: {
      
   },

   data() { 
     return { 

     }
   },


   methods: {
       
   },
}

</script>





<style scoped>
  .router-link{
    display: flex;
    gap: 15px;
  }
</style>
