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

<style scoped>

:root {

  /* COLOR */
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-gray-100: #f8f9fa;
  --bs-gray-200: #e9ecef;
  --bs-gray-300: #dee2e6;
  --bs-gray-400: #ced4da;
  --bs-gray-500: #adb5bd;
  --bs-gray-600: #6c757d;
  --bs-gray-700: #495057;
  --bs-gray-800: #343a40;
  --bs-gray-900: #212529;
  --bs-light: #f8f9fa;
  --bs-dark: #000;
  --bs-primary-rgb: 220, 177, 74;
  --bs-secondary-rgb: 108, 117, 125;
  --bs-success-rgb: 40, 167, 69;
  --bs-info-rgb: 23, 162, 184;
  --bs-warning-rgb: 255, 193, 7;
  --bs-danger-rgb: 220, 53, 69;
  --bs-light-rgb: 248, 249, 250;
  --bs-dark-rgb: 0, 0, 0;
  --bs-white-rgb: 255, 255, 255;
  --bs-black-rgb: 0, 0, 0;
  --bs-body-color-rgb: 33, 37, 41;
  --bs-body-bg-rgb: 255, 255, 255;
  /* FONTS */
  --bs-font-sans-serif: "Libre Franklin", sans-serif;
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --bs-body-font-family: var(--bs-font-sans-serif);
  /* OTHERS */
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
  --bs-body-color: #212529;
  --bs-body-bg: #fff;
}

/* DEFAULT STYLE */
body {
  margin: 0;
  padding: 0;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
 /*margin-bottom: .5rem; */
  margin: 25px 0;
  font-weight: bold;
  line-height: 1.2;
  color: var(--bs-heading-color,inherit);
}
.h5, h5 {
  font-size: 1.25rem;
}


.bg-light {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}

/* PADDING, MARGING */
.py-5,
.pt-pb-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

.p-r-5 {
  padding-right: 5px;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}

.py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}

.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}

.p-lg-4 {
  padding: 1.5rem !important;
}

.p-0 {
  padding: 0 !important;
}

.shadow-0 {
  box-shadow: none !important;
}

.border-0 {
  border: 0 !important;
}

/*OTHERS*/
/*BORDER*/
.border {
  border: 1px solid #dee2e6 !important;
}

.border-bottom {
  border-bottom: 1px solid #dee2e6 !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.border-0 {
  border: 0 !important;
}

.border-light {
  border-color: #f8f9fa !important;
}

.align-middle {
  vertical-align: middle !important;
}

.l-s {
  letter-spacing: 0.1em;
}

ul li {
  list-style-type: none;
  font-size: 0.85rem;
  text-align: right;
}

button,
i {
  cursor: pointer;
}

/*TITLE*/
.h1 {
  font-size: 1.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.h2 {
  font-size: 1.15rem;
}

.h5 {
  font-size: 1.15rem;
}

/*TEXT*/
.text-dark {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;
}

.text-center {
  text-align: center;
}

.text-uppercase {
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.text-gray {
  color: #aaa !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-muted {
  --bs-text-opacity: 1;
  color: #6c757d !important;
}

.active {
  color: #adb5bd;
}

small,
.small {
  font-size: 0.875em;
}

.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-.5 * var(--bs-gutter-x));
  margin-left: calc(-.5 * var(--bs-gutter-x));
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.font-size-22{
  font-size: 22px;
}

.w-100 {
  width: 100% !important;
}

/*BUTTON*/

button:not(:disabled),
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled) {
  cursor: pointer;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
-webkit-appearance: button;
}

button,
select {
  text-transform: none;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button {
  border-radius: 0;
}

.btn-sm,
.btn-group-sm>.btn {
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.btn-dark {
  color: #fff;
  background-color: #000;
  border-color: #000;
}

.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0;
}

/*INPUT*/
.quantity input {
  width: 2rem;
  text-align: center;
}

/*FORM*/
.form-control-sm {
  min-height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
}

/*FLEX*/
.flex {
  display: flex;
}

.flex-d-r{
  flex-direction: row;
}

.flex-d-c{
  flex-direction: column;
}

.flex-1 {
  flex: 1;
}

.flex-2 {
  flex: 2;
}

.flex-3 {
  flex: 3;
}

.flex-4 {
  flex: 4;
}
.flex-04 {
  flex: 0.4;
}

.gap-5{
  gap: 5px;
}
.gap-10{
  gap: 10px;
}
.gap-15{
  gap: 15px;
}
.gap-20{
  gap: 20px;
}

.jcc {
  justify-content: center;
}

.jcsb {
  justify-content: space-between;
}

.aic {
  align-items: center;
}

.text-sm {
  font-size: 0.85rem !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

/* CONTAINER-SECTION */
.container-section {
  margin: 0 auto;
  max-width: 1140px;
  padding: 20px 0;
}

.cart-section,
.shopping-cart-title,
.shopping-cart-table thead,
.card-body_cl-2 {
  text-transform: uppercase;
}

/* CART SECTION */
.cart-section-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 3rem;
  padding-right: 3rem;
}

.cart-title {
  flex: 1;
}

.cart-liste {
  flex: 1;
}

.cart-liste ul {
  flex: 1;
  display: flex;
  justify-content: right;
  font-weight: bold;
}

/* SHOPPING CART SECTION */
.table {
  --bs-table-bg: transparent;
  --bs-table-accent-bg: transparent;
  --bs-table-striped-color: #212529;
  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
  --bs-table-active-color: #212529;
  --bs-table-active-bg: rgba(0, 0, 0, 0.1);
  --bs-table-hover-color: #212529;
  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  vertical-align: top;
  border-color: #dee2e6;
  border-collapse: collapse;
}

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

th {
  text-align: inherit;
  font-size: 0.85rem !important;
  padding: 1rem;
}

tbody th {
  padding-left: 0 !important;
}

/* product1,2 */
.product-image {
  display: flex;
  align-items: center;
  gap: 10px;
}

.product-name {
  font-size: 1rem;
}

td p {
  font-size: 0.85rem;
}

.quantity {
  display: flex;
  align-items: center;
}

.quantity button {
  background: none;
  border: none;
  width: 1rem;
  outline: none;
}

/* SHOPPING CART NAVIGATION */
.shopping-cart-navigation{
    justify-content: space-between;
    display: flex;
  }
.ContinueShop {
  text-align: left !important;
  margin-bottom: 0 !important;
  font-size: 0.875rem;
  text-decoration: underline;
  cursor: pointer;
  flex: 3;
}
a[href="/Cart/Checkout"] {
  flex: 1;
  display: flex;
  flex-wrap: nowrap;
}
.proceed {
  min-width: 173px;
  text-align: right !important;
  font-size: 0.875rem;
  border: 1px solid black;
  padding: 5px;
}

.proceed:hover {
  cursor: pointer;
  background-color: #000;
  color: white;
}

/*CART TOTAL*/
.card-total {
  margin: 0 0 0 10px;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}

strong {
  font-weight: 700;
}

.apply {
  border: none;
  padding: 9px;
  background-color: black;
  color: white;
}

.out-none {
  outline: none;
}
a[href="/Cart/Checkout"]{
   color: black;
    text-decoration: none;
}

@media screen and (max-width: 1256px) {
  .shopping-cart-section{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
 .shopping-cart-table{
    overflow-x: auto;
  }
  .card-total{
    margin: 0;
  }
  .container-section {
    margin: 0 100px;
  }
}
@media screen and (max-width: 910px) {
  .cart-section-container {
    flex-direction: column;
  }
  .cart-section-container .cart-liste ul {
    padding-left: 0;
  }
  .shopping-cart-navigation {
    justify-content: center;
  }
}
@media screen and (max-width: 572px) {
  .container-section {
    margin: 0 50px;
  }
}
@media screen and (max-width: 572px) {
  .container-section {
    margin: 0 50px;
  }
}
@media screen and (max-width: 512px) {
  .cart-section-container{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  ul li.text-dark.p-r-5 {
 padding-right: 0px;
}
  .cart-section-container .cart-liste ul{
    padding: 0;
  }
  .shopping-cart-navigation{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .cart-section-container .cart-liste ul {
   flex-direction: column;
   align-items: center;
  }
}

</style>