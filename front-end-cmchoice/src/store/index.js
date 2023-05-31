import { createStore } from 'vuex'

//importationds des modules
 import productModule from './modules/products/productMod';
 import cartModule from './modules/cart/cartMod';
 import AddProductModule from './modules/addProduct/AddProductMod';


export default createStore({

  modules: {
    productMod : productModule,
    cartMod : cartModule,
    AddProductMod : AddProductModule,
  },

  state: {  

  },

  getters: { 
    
  },

  mutations: { 

  },

  actions: {
   
  },
    
})



