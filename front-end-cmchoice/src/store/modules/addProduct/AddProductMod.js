//importationds apis
//import cart from '../../../api/cart';

export default {
    namespaced: true,
    state: {
      products: [],
    },
    getters: { 
      productsItemCount(state){
        console.log('state.products.length',state.products)
        return state.products.length;
     } ,
    },
    mutations: {
      ADD_PRODUCT(state, product) {
        state.products.push(product);
      },
      DELETE_PRODUCT(state, productprop) {
        let index = state.products.indexOf(productprop);
        state.products.splice(index,1);
      },
      CLEAR_PRODUCTS(state) {
        state.products = [];
      },
    },
    actions: {
      addProductActions({ commit }, product) {
        commit('ADD_PRODUCT', product);
      },
      deleteProductActions({ commit }, productprop) {
        commit('DELETE_PRODUCT', productprop);
      },
      clearProductsActions({ commit }) {
        commit('CLEAR_PRODUCTS');
      },
    },
  
    modules : {
  
    },
  }
  
  