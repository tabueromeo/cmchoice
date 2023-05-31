<template>
   <div style="display:none;" class="dialog">
     <div class="dialog-content">
       <span @click="close" class="close-btn">&times;</span>
       <p>Êtes-vous sûr de vouloir continuer?</p>
       <div class="buttons">
         <button @click="confirm" id="confirm" class="confirm-btn">Confirm</button>
         <button @click="cancel" id="cancel" class="cancel-btn">Cancel</button>
       </div>
     </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
   methods: {
        ...mapActions({
          clearProductsActions:'AddProductMod/clearProductsActions', 
       }) , 

       confirm : function () { 
          this.clearProductsActions();
          document.querySelector('.dialog').style.display = 'none';
        }  , 
       cancel : function () {
           document.querySelector('.dialog').style.display = 'none';
        }  , 
       close : function () {
           document.querySelector('.dialog').style.display = 'none';
        }  , 
   }
};
</script>