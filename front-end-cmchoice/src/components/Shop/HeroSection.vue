<script setup>
    function handleSearch() {
        
    }
</script>

<template>
    <div class="d-flex justify-content-center bg-white position-sticky top-10 w-100 zindex">
    
        <form  class="searchBarWidth" @submit.prevent="handleSearch">
            <div class="d-flex py-2">
                <input class="form-control" id="resarch" type="text" placeholder="rechercher un produit" aria-describedby="recherche">
                <button class="btn btn-primary ms-2" type="submit" >
                    <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </form>
    
    </div>
    <section class="py-5 bg-light mt-10">
        <div class="container ">
            <div class="row px-4 px-lg-5 py-lg-4 align-items-center">
                <div class="col-lg-6">
                <h1 class="h2 text-uppercase mb-0">Espace pub</h1>
                </div>
                <div class="col-lg-6 text-lg-end">
                <!-- <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                    <li class="breadcrumb-item"><a class="text-dark" href="index.html">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Shop</li>
                    </ol>
                </nav> -->
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    /* .top-10 {
        top: 70px;
    } */
    @media only screen and (min-width: 992px) {
    .searchBarWidth {
        width: 80%;
    }
   
    
   }
   @media only screen and (max-width: 992px) {
    .searchBarWidth {
        width: 100%;
    }
   }
   @media only screen and (min-width: 768px) {
    .top-10 {
        top: 70px !important;
    }
   }

   @media only screen and (max-width: 767.9px) {
        .top-10 {
            top: 59px !important;
        }
   }
   .mt-10 {
        margin-top: 10px;
   }
   
   .zindex {
        z-index: 1020;
   }
</style>