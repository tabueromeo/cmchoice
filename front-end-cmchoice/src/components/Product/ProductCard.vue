<template>
    <div class="product--card col-lg-4 col-sm-6">
      <div class="">
        <div class="product text-center">
            <div class="position-relative mb-3">
                <div class="badge text-white bg-primary">{{label}}</div>
                <RouterLink to="/detail" activeClass="activeLink" ><img class="img-fluid w-100" src="img/product-1.jpg" alt="..."></RouterLink>
                <div class="product-overlay">
                  <ul class="mb-0 list-inline">
                      <li class="list-inline-item m-0 p-0 mx-1">
                        <a class="btn btn-sm btn-outline-dark" href="#!"><i class="far fa-heart"></i></a></li>
                      <li class="list-inline-item m-0 p-0">
                        <a class="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                      <li class="list-inline-item me-0 mx-1">
                        <a class="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i class="fas fa-expand"></i></a></li>
                  </ul>
                </div>
            </div>
                  <h6> <a class="reset-anchor" href="detail.html">{{product_name}}</a></h6>
                  <p class="small text-muted">${{product_price}}</p>
        </div>
      </div>
  
      <!--  Modal -->
      <div class="modal fade" id="productView" tabindex="-1">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content overflow-hidden border-0">
              <button class="btn-close p-4 position-absolute top-0 end-0 z-index-20 shadow-0" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
              <div class="modal-body p-0">
                <div class="row align-items-stretch">
                  <div class="col-lg-6 p-lg-0">
                    <a class="glightbox product-view d-block h-100 bg-cover bg-center" style="background: url(img/product-1.jpg)" href="img/product-1.jpg" data-gallery="gallery1" data-glightbox="Red digital smartwatch"></a>
                    <a class="glightbox d-none" href="img/product-1.jpg" data-gallery="gallery1" data-glightbox="Red digital smartwatch"></a>
                    <a class="glightbox d-none" href="img/product-1.jpg" data-gallery="gallery1" data-glightbox="Red digital smartwatch"></a>
                  </div>
                  <div class="col-lg-6">
                    <div class="p-4 my-md-4">
                      <ul class="list-inline mb-2">
                        <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
                        <li class="list-inline-item m-0 1"><i class="fas fa-star small text-warning"></i></li>
                        <li class="list-inline-item m-0 2"><i class="fas fa-star small text-warning"></i></li>
                        <li class="list-inline-item m-0 3"><i class="fas fa-star small text-warning"></i></li>
                        <li class="list-inline-item m-0 4"><i class="fas fa-star small text-warning"></i></li>
                      </ul>
                      <h2 class="h4">{{product_name}}</h2>
                      <p class="text-muted">${{product_price}}</p>
                      <p class="text-sm mb-4">{{product_description}}</p>
                      <div class="row align-items-stretch mb-4 gx-0">
                        <div class="col-sm-7">
                          <div class="border d-flex align-items-center justify-content-between py-1 px-3"><span class="small text-uppercase text-gray mr-4 no-select">Quantity</span>
                            <div class="quantity">
                              <button @click="decrement()" class="dec-btn p-0"><i class="fas fa-caret-left"></i></button>
                              <input class="form-control border-0 shadow-0 p-0" type="text" v-model="count" id="number">
                              <button @click="increment()" class="inc-btn p-0"><i class="fas fa-caret-right"></i></button>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-5"><a class="btn btn-dark btn-sm w-100 h-100 d-flex align-items-center justify-content-center px-0" href="cart.html">Add to cart</a></div>
                      </div><a class="btn btn-link text-dark text-decoration-none p-0" href="#!"><i class="far fa-heart me-2"></i>Add to wish list</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      data(){
              return{
                  count: 1,
                  label: 'Solde',
                  product_name: 'Kui Ye Chen’s AirPods',
                  product_price: '250',
                  product_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.'
                }
            },
  
      methods:{
        increment() {
          {
            this.count++
                }
        },
        decrement() {
          if ( this.count >= 1) {
            this.count--
          }
        }
      }
    }
    
  </script>
  
  <style>
    .product{
      /* margin: 24px 24px; */
    }

      .product img {
      filter: grayscale(40%);
      transition: all 0.3s;
    }

    .product-overlay {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding: 1rem 0;
      opacity: 0;
      transition: all 0.3s;
    }

    .product-overlay ul li {
      transition: all 0.3s;
    }

    .product-overlay ul li:first-of-type {
      transform: translateX(-10px);
      opacity: 0;
    }

    .product-overlay ul li:last-of-type {
      transform: translateX(10px);
      opacity: 0;
    }

    .product:hover img {
      opacity: 0.3;
    }

    .product:hover .product-overlay {
      opacity: 1;
    }

    .product:hover .product-overlay li {
      opacity: 1;
      transform: none;
    }

    .product .badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      z-index: 1;
    } 


  </style>