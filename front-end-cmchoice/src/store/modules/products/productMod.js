//importation  api
import product from '../../../api/product';

export default {
  namespaced: true,
  state : {
    products : [],
    Oneproduct : [], // [] , null
  },
  getters : {

  },
  mutations : {
     GET_PRODUCTS(state, dataProducts) { 
       state.products = dataProducts ;
     },
     GET_ONE_PRODUCTS(state, dataOneProduct) {
       state.Oneproduct = dataOneProduct ;
     },
  },
  actions : {
   getProductsActions({commit}){  
     product.allProducts()
     .then(response => {
       commit ('GET_PRODUCTS', response.data)
       console.log('produits:', response.data);
     })
     .catch(error => {
       console.log(error);
     });
 },

 getOneProductActions({commit}, ModalID){ 
     product.OneProduct(ModalID)
     .then(response => {
       commit ('GET_ONE_PRODUCTS', response.data);
     })
     .catch(error => {
       console.log(error);
     });
 },

  },
  modules : {

  },
}


