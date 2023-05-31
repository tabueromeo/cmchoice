<template>
    <div class="row">
        <ProductCard v-for="element in products" :key="element.id"  :productsprop="element" />
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ProductCard from './ProductCard.vue';

export default {

  components : {
    ProductCard,
  },

  methods: {
     ...mapActions(['productMod/getProductsActions']) , 
  } ,

  mounted () {
    this['productMod/getProductsActions'](); 
  },

  computed: { 
      ...mapState({
        products: state => state.productMod.products
      }) , 
  } ,

}

</script>


<style></style>