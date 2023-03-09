<script setup>
  import { RouterLink } from 'vue-router'
  import { ref } from 'vue';

  const isAuthenfied = ref(false)
    
</script>

<template>
  <header class="header bg-white">
        <div class="container px-lg-3">
          <nav class="navbar position-sticky top-0 navbar-expand-lg navbar-light py-3 px-lg-0">
            <RouterLink to="/" class="navbar-brand">
                <span class="fw-bold text-uppercase text-dark">cmchoice</span>
            </RouterLink>
            <button class="navbar-toggler navbar-toggler-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <!-- Link--><RouterLink to="/" class="nav-link " >Home</RouterLink>
                </li>
                <li class="nav-item">
                  <!-- Link--><RouterLink to="/shop" class="nav-link" >Shop</RouterLink>
                </li>
                <li class="nav-item">
                  <!-- Link--><RouterLink to="/about" class="nav-link" >A propos</RouterLink>
                </li>
                <!-- <li class="nav-item">
                  <a class="nav-link" href="detail.html">Product detail</a>
                </li>
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" id="pagesDropdown" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                  <div class="dropdown-menu mt-3 shadow-sm" aria-labelledby="pagesDropdown"><a class="dropdown-item border-0 transition-link" href="index.html">Homepage</a><a class="dropdown-item border-0 transition-link" href="shop.html">Category</a><a class="dropdown-item border-0 transition-link" href="detail.html">Product detail</a><a class="dropdown-item border-0 transition-link" href="cart.html">Shopping cart</a><a class="dropdown-item border-0 transition-link" href="checkout.html">Checkout</a></div>
                </li> -->
              </ul>
              <ul class="navbar-nav ms-auto">               
                <li class="nav-item" v-if="isAuthenfied">
                    <RouterLink to="/panier" class="nav-link" > 
                        <i class="fas fa-dolly-flatbed me-1 text-gray"></i>Panier
                        <small class="text-gray fw-normal">(2)</small>
                    </RouterLink>
                </li>
                <li class="nav-item" v-if="isAuthenfied">
                    <RouterLink to="/favoris" class="nav-link"> 
                        <i class="fa-solid fa-heart me-1 text-gray"></i>favoris
                        <small class="text-gray fw-normal"> (0)</small>
                    </RouterLink>
                </li>
                <li class="nav-item" v-if="!isAuthenfied">
                    <RouterLink to="/inscription" class="nav-link" > 
                        <!-- <i class="fa-regular fa-user-plus me-1 text-gray "></i> -->
                        <i class="fa-solid fa-user-plus me-1 text-gray"></i>
                        <!-- <i class="fas fa-user me-1 text-gray fw-normal"></i> -->
                        S'inscrire
                    </RouterLink>
                </li>
                <li class="nav-item" v-if="!isAuthenfied">
                    <RouterLink to="/connexion" class="nav-link" > 
                        <i class="fa-solid fa-right-to-bracket me-1 text-gray "></i>
                        <!-- <i class="fas fa-user me-1 text-gray fw-normal"></i> -->
                        Se connecter
                    </RouterLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
</template>

<style scoped>
   
    
    .navbar .dropdown-menu {
    border-top: 2px solid #dcb14a;
    }

    .navbar .dropdown-menu::before {
    content: '';
    display: block;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid #dcb14a;
    position: absolute;
    top: -0.55rem;
    left: 1rem;
    }

    .navbar .nav-link {
    font-size: 0.92rem;
    }

    @media (min-width: 992px) {
    .navbar-brand {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    }

    .navbar .dropdown-menu {
    visibility: hidden;
    opacity: 0;
    transform: translateY(0.5rem);
    transition: 0.2s ease all;
    }

    @media (min-width: 992px) {
    .navbar .dropdown-menu {
        display: block;
    }
    }

    @media (max-width: 767.98px) {
    .navbar .dropdown-menu.always-animated {
        display: block;
    }
    }

    .navbar .dropdown-menu.show {
    display: block;
    visibility: visible;
    opacity: 1;
    transform: translateY(0px);
    transition: 0.2s ease all;
    }

    .megamenu {
    position: static;
    }

    .megamenu .dropdown-menu {
    width: 100%;
    z-index: 999;
    }

    .nav-tabs .nav-link {
    background: white;
    color: inherit;
    font-size: 0.75rem;
    padding: 0.75rem 1rem;
    }

    .form-check-label {
    font-size: 0.85rem;
    }

    .breadcrumb-item {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    }


</style>
