<script setup>
  import ProductCard from '../components/Product/ProductCard.vue';
</script>
<template>
    <section class="py-5">
        <div class="container">
            <div class="row mb-5">
                <div class="col-lg-6">
                    <!-- PRODUCT SLIDER-->
                    <div class="row m-sm-0">
                        <div class="col-12 col-lg-10 p-sm-0 order-2 order-sm-1 mt-2 mt-sm-0 px-xl-2">
                            <div class="parent position-relative ">
                                <div id="CarousselDemo" class="carousel slide" data-bs-ride="false">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="/img/product-5.jpg" alt="" class="d-block w-100">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="/img/product-detail-2.jpg" alt="" class="d-block w-100">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="/img/product-detail-3.jpg" alt="" class="d-block w-100">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="/img/product-detail-4.jpg" alt="" class="d-block w-100">
                                        </div>
                                    </div>
                                    <div class="carousel-indicators ">
                                        <button data-bs-target="#CarousselDemo" data-bs-slide-to="0" class="active thumbnail">
                                            <img src="/img/product-5.jpg" class="d-block h-100 w-100"  alt="">
                                        </button>
                                        <button data-bs-target="#CarousselDemo" data-bs-slide-to="1" class="active thumbnail">
                                            <img src="/img/product-detail-2.jpg" class="d-block h-100 w-100"  alt="">
                                        </button>
                                        <button data-bs-target="#CarousselDemo" data-bs-slide-to="2" class="active thumbnail">
                                            <img src="/img/product-detail-3.jpg" class="d-block h-100 w-100"  alt="">
                                        </button>
                                        <button data-bs-target="#CarousselDemo" data-bs-slide-to="3" class="active thumbnail">
                                            <img src="/img/product-detail-4.jpg" class="d-block h-100 w-100"  alt="">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- PRODUCT DETAILS-->
                <div class="col-lg-6">
                    <ul class="list-inline mb-2 text-sm">
                    <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
                    <li class="list-inline-item m-0 1"><i class="fas fa-star small text-warning"></i></li>
                    <li class="list-inline-item m-0 2"><i class="fas fa-star small text-warning"></i></li>
                    <li class="list-inline-item m-0 3"><i class="fas fa-star small text-warning"></i></li>
                    <li class="list-inline-item m-0 4"><i class="fas fa-star small text-warning"></i></li>
                    </ul>
                    <h1>{{ product_name }}</h1>
                    <p class="text-muted lead">${{product_price}}</p>
                    <p class="text-sm mb-4">{{product_description}}</p>
                    <div class="row align-items-stretch mb-4">
                    <div class="col-sm-5 pr-sm-0">
                        <div class="border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white"><span class="small text-uppercase text-gray mr-4 no-select">Quantity</span>
                        <div class="quantity">
                            <button @click="decrement()" class="p-0"><i class="fas fa-caret-left"></i></button>
                            <input class="form-control border-0 shadow-0 p-0" type="text" v-model="count">
                            <button @click="increment()" class="p-0"><i class="fas fa-caret-right"></i></button>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-3 pl-sm-0"><a class="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0" href="cart.html">Add to cart</a></div>
                    </div><a class="text-dark p-0 mb-4 d-inline-block" href="#!"><i class="far fa-heart me-2"></i>Add to wish list</a><br>
                    <ul class="list-unstyled small d-inline-block">
                    <li class="px-3 py-2 mb-1 bg-white"><strong class="text-uppercase">SKU:</strong><span class="ms-2 text-muted">{{ product_sku }}</span></li>
                    <li class="px-3 py-2 mb-1 bg-white text-muted"><strong class="text-uppercase text-dark">Category:</strong><a class="reset-anchor ms-2" href="#!">{{ product_category }}</a></li>
                    <li class="px-3 py-2 mb-1 bg-white text-muted"><strong class="text-uppercase text-dark">Tags:</strong><a class="reset-anchor ms-2" href="#!">{{ product_tags }}</a></li>
                    </ul>
                </div> 
            </div>
            <!-- DETAILS TABS-->
            <ul class="nav nav-tabs border-0" id="myTab" role="tablist">
                <li class="nav-item"><a class="nav-link text-uppercase active" id="description-tab" data-bs-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a></li>
                <li class="nav-item"><a class="nav-link text-uppercase" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a></li>
            </ul>
            <div class="tab-content mb-5" id="myTabContent">
                <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                    <div class="p-4 p-lg-5 bg-white">
                    <h6 class="text-uppercase">Product description </h6>
                    <p class="text-muted text-sm mb-0">{{ product_add_desc }}</p>
                    </div>
                </div>
                <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                    <div class="p-4 p-lg-5 bg-white">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="d-flex mb-3">
                                    <div class="flex-shrink-0"><img class="rounded-circle" src="img/customer-1.png" alt="" width="50"/></div>
                                    <div class="ms-3 flex-shrink-1">
                                    <h6 class="mb-0 text-uppercase">Jason Doe</h6>
                                    <p class="small text-muted mb-0 text-uppercase">20 May 2020</p>
                                    <ul class="list-inline mb-1 text-xs">
                                        <li class="list-inline-item m-0"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item m-0"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item m-0"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item m-0"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item m-0"><i class="fas fa-star-half-alt text-warning"></i></li>
                                    </ul>
                                    <p class="text-sm mb-0 text-muted">{{product_description}}</p>
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <div class="flex-shrink-0"><img class="rounded-circle" src="img/customer-2.png" alt="" width="50"/></div>
                                    <div class="ms-3 flex-shrink-1">
                                        <h6 class="mb-0 text-uppercase">Jane Doe</h6>
                                        <p class="small text-muted mb-0 text-uppercase">20 May 2020</p>
                                        <ul class="list-inline mb-1 text-xs">
                                            <li class="list-inline-item m-0"><i class="fas fa-star text-warning"></i></li>
                                            <li class="list-inline-item m-0"><i class="fas fa-star text-warning"></i></li>
                                            <li class="list-inline-item m-0"><i class="fas fa-star text-warning"></i></li>
                                            <li class="list-inline-item m-0"><i class="fas fa-star text-warning"></i></li>
                                            <li class="list-inline-item m-0"><i class="fas fa-star-half-alt text-warning"></i></li>
                                        </ul>
                                        <p class="text-sm mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- RELATED PRODUCTS-->
            <h2 class="h5 text-uppercase mb-4">Related products</h2>
            <div class="row">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>  
    </section> 
</template>

<script>
export default {
    data(){
            return{
                count: 1,
                label: 'Solde',
                product_name: 'Red digital smartwatch',
                product_price: '250',
                product_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.',
                product_add_desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                product_sku: '039',
                product_category: 'Demo Products',
                product_tags: 'Innovation',
              }
          },

    methods:{
        increment(){
            this.count++
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
    .carousel{
      display: flex;
      gap: 10px;
    }
    .carousel .carousel-indicators {
    margin: 0;
    padding: 0;
    height: 100%;
    flex-direction: column;
    justify-content: start;
    gap: 12px;
    position: unset;
}

.carousel-indicators button.thumbnail{
    height: 76px;
    width: 75px;
    margin: 0;
    border: none;
}

/* .parent{
    width: 100%;
    margin: 30px;
} */

</style>