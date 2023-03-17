<template>
    <div class="container-section">
        <!-- CART SECTION-->
        <section class="cart-section pt-pb-5 bg-light">
            <div class="cart-section-container">
                <div class="cart-title">
                  <h1 class="h1">Delivery</h1>
                </div>
                <div class="cart-liste">
                    <ul>
                      <li class="text-dark p-r-5">Home</li>
                      <li class="text-dark p-r-5"> / Cart</li>
                      <li class="text-dark p-r-5"> / Checkout</li>
                      <li class="active"> / Delivery</li>
                    </ul>
                </div>
            </div>
         </section>
          <!-- SHOPPING CART SECTION-->
          <div class="shopping-cart-title">
              <h1 class="h2 mb-4 l-s">delivery</h1>
          </div>
          <section class="shopping-cart-section flex">
              <div class="shopping-cart-col-1 flex-1">
                  <!-- TABLE 1-->
                  <div class="shopping-cart-table mb-4">
                      <table class="table text-nowrap">
                          <thead class="bg-light">
                            <tr>
                              <th><strong>Product</strong></th>
                              <th><strong >Price</strong></th>
                              <th><strong>Quantity</strong></th>
                              <th class="text-center"><strong>Total</strong></th>
                              <th class="text-center"><strong>waiting for delivery</strong></th>
                            </tr>
                          </thead>
                          <tbody>
                               <!-- product1-->
                            <tr>
                              <th>
                                <div class="product-image">
                                  <img src="../assets/img/product-detail-3.jpg" alt="..." width="70"/>
                                  <div class="product-name"><strong>Red digital smartwatch</strong></div>
                                </div>
                              </th>
                              <td class="p-3 align-middle border-light">
                                <p class="small">$250</p>
                              </td>
                              <td class="p-3 align-middle border-light">
                                <div class=" border flex aic jcsb px-3">
                                  <span class="small text-uppercase text-gray">Quantity</span>
                                  <div class="quantity">
                                    <input class="form-control form-control-sm border-0 shadow-0 p-0" type="text" value="1"/>
                                  </div>
                                </div>
                              </td>
                              <td class="p-3 align-middle border-light text-center">
                                <p class="total-price small">$250</p>
                              </td>
                              <td  class="p-3 align-middle border-light text-center" >
                                <i class="fa-solid fa-truck-fast text-muted font-size-22 fa-bounce" style=" --fa-bounce-start-scale-x: 1; --fa-bounce-start-scale-y: 1; --fa-bounce-jump-scale-x: 1; --fa-bounce-jump-scale-y: 1; --fa-bounce-land-scale-x: 1; --fa-bounce-land-scale-y: 1; " ></i>
                              </td>
                            </tr>
                            <!-- product2-->
                            <tr>
                              <th>
                                <div class="product-image"><img src="../assets/img/product-detail-2.jpg" alt="..." width="70"/>
                                <div class="product-name"><strong>Apple watch</strong></div>
                                </div>
                              </th>
                              <td class="p-3 align-middle border-light">
                                <p class="small">$250</p>
                              </td>
                              <td class="p-3 align-middle border-light">
                                <div class=" border flex aic jcsb px-3">
                                  <span class="small text-uppercase text-gray">Quantity</span>
                                  <div class="quantity">
                                    <input class="form-control form-control-sm border-0 shadow-0 p-0" type="text" value="1"/>
                                  </div>
                                </div>
                              </td>
                              <td class="p-3 align-middle border-light text-center">
                                <p class="total-price small">$250</p>
                              </td>
                              <td  class="p-3 align-middle border-light text-center" >
                                <i class="fa-solid fa-truck-fast text-muted font-size-22 fa-bounce" style=" --fa-bounce-start-scale-x: 1; --fa-bounce-start-scale-y: 1; --fa-bounce-jump-scale-x: 1; --fa-bounce-jump-scale-y: 1; --fa-bounce-land-scale-x: 1; --fa-bounce-land-scale-y: 1; " ></i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                  </div>
                   <!-- TABLE 2-->
                  <div class="shopping-cart-table mb-4">
                      <table class="table text-nowrap">
                          <thead class="bg-light">
                            <tr>
                              <th><strong>Product</strong></th>
                              <th><strong >Price</strong></th>
                              <th><strong>Quantity</strong></th>
                              <th class="text-center"><strong>Total</strong></th>
                              <th class="text-center"><strong>already delivered</strong></th>
                            </tr>
                          </thead>
                          <tbody>
                               <!-- product1-->
                            <tr>
                              <th>
                                <div class="product-image">
                                  <img src="../assets/img/product-detail-3.jpg" alt="..." width="70"/>
                                  <div class="product-name"><strong>Red digital smartwatch</strong></div>
                                </div>
                              </th>
                              <td class="p-3 align-middle border-light">
                                <p class="small">$250</p>
                              </td>
                              <td class="p-3 align-middle border-light">
                                <div class=" border flex aic jcsb px-3">
                                  <span class="small text-uppercase text-gray">Quantity</span>
                                  <div class="quantity">
                                    <input class="form-control form-control-sm border-0 shadow-0 p-0" type="text" value="1"/>
                                  </div>
                                </div>
                              </td>
                              <td class="p-3 align-middle border-light">
                                <p class="total-price small text-center">$250</p>
                              </td>
                              <td  class="p-3 align-middle border-light text-center" >
                                <i class="fa-solid fa-people-carry-box text-muted font-size-22"></i>
                              </td>
                            </tr>
                            <!-- product2-->
                            <tr>
                              <th>
                                <div class="product-image"><img src="../assets/img/product-detail-2.jpg" alt="..." width="70"/>
                                <div class="product-name"><strong>Apple watch</strong></div>
                                </div>
                              </th>
                              <td class="p-3 align-middle border-light">
                                <p class="small">$250</p>
                              </td>
                              <td class="p-3 align-middle border-light">
                                <div class=" border flex aic jcsb px-3">
                                  <span class="small text-uppercase text-gray">Quantity</span>
                                  <div class="quantity">
                                    <input class="form-control form-control-sm border-0 shadow-0 p-0" type="text" value="1"/>
                                  </div>
                                </div>
                              </td>
                              <td class="p-3 align-middle border-light">
                                <p class="total-price small text-center">$250</p>
                              </td>
                              <td  class="p-3 align-middle border-light text-center" >
                                <i class="fa-solid fa-people-carry-box text-muted font-size-22"></i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                  </div>
                  <!-- SHOPPING CART NAVIGATION-->
                  <div class="bg-light px-4 py-3">
                    <div class="shopping-cart-navigation flex row jcsb ">
                          <div class="ContinueShop"><i class="fas fa-long-arrow-alt-left"></i>  Continue shopping</div>
                    </div> 
                  </div>
              </div>
         
          </section>
    </div>
</template>


<script>
export default {
  name: '', 
  props: {
    
  },

  data() { 
        return { 
           
            
        }
    },

   

  methods: {
     
  }
   

} 

</script>

<style>

</style>