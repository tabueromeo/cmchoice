//importation  api
//import cart from '../../../api/cart';

export default {
  namespaced: true,
  state: {  
    cart:[],
  },

  getters: { 
    cartItemCount(state){
      return state.cart.length;
   } ,
   cartTotalPrice(state){
    let total = 0;

    state.cart.forEach(element => {
        total += element.product.price * element.quantity
    });

    return total;
   } ,
  },

  mutations: { 

    ADD_TO_CART(state, {product, quantity}) {

      let productInCart = state.cart.find(item =>{
        return item.product._id === product._id //produit dns l panier => id produit cliqué = à un id de produit du panier
      });
       
      if (productInCart) {
        productInCart.quantity += quantity; 
        return;  //on s'arrete et le produit n'est pas push
      } 
      state.cart.push({product, quantity}) ;
    },
    // SET_CART(state, ItemsshoppingCart) { 
    //   state.cart = ItemsshoppingCart;
    // },
    REMOVE_CART(state, Oneproduct) {  
      state.cart = state.cart.filter(element=>{
        return element.product._id !== Oneproduct._id //filtre et renvoi ls produits avc l'id differnt d celui cliqué
      })
    },
    CLEAR_CART(state) {  
      state.cart = [] ;
    },
  },

  actions: {

    addToCartActions({commit}, {product, quantity}){
      commit ('ADD_TO_CART', {product, quantity});

      // cart.Poststore({ 
      //   product_id: product.id,
      //   Quantity: quantity,
      // });
      
    },
    // getCartItemsActions({commit}){
    //   cart.Getstore()
    //   .then(response => {
    //     commit ('SET_CART', response.data );
    //     console.log('shop:',response.data);
    //   })
    //   .catch(error => {
    //     console.log('ERREURR',error);
    //   });
      
    // },
    removeItemCartActions({commit}, Oneproduct){
      commit ('REMOVE_CART', Oneproduct );

      //cart.DeleteOneGetstore(Oneproduct._id); //suppression ds articles de la base de donnée
    },

    clearCartitemsActions({commit}){
      commit ('CLEAR_CART');

      //cart.DeleteAllGetstore(); 
    },
   
  },

  modules : {

  },
}

