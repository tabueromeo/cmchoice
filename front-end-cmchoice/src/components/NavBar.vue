<script setup>
  import { RouterLink } from 'vue-router'
  import { ref } from 'vue';

  const isAuthenfied = ref(true)
    
</script>

<template>
  <header class="header bg-white position-sticky top-0 zindex">
        <div class="container px-lg-3">
          <nav class="navbar  navbar-expand-lg navbar-light py-md-3 px-lg-0">
            <div class="navbar-brand text-center d-flex align-items-center">
                <i class="fa-sharp fa-solid me-2 fa-bars text-24 text-black d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></i>
                <div class="offcanvas offcanvas-start w-sidebar color-black d-lg-none" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-body d-flex flex-column   overflow-hidden">
                        <ul class="navbar-nav me-auto w-100 mb-5">
                            <li class="nav-item">
                                <RouterLink to="/" class="navLink p-null d-flex justify-content-between align-items-center"  activeClass="activeLink">
                                    Home
                                    <i class="fa-solid fa-angle-right"></i>
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/shop" class="navLink p-null d-flex justify-content-between align-items-center" activeClass="activeLink">
                                    Shop
                                    <i class="fa-solid fa-angle-right"></i>
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/about" class="navLink p-null d-flex justify-content-between align-items-center" activeClass="activeLink" >
                                    A propos
                                    <i class="fa-solid fa-angle-right"></i>
                                </RouterLink>
                            </li>
                        </ul>
                        
                        <div v-if="isAuthenfied">
                            <hr>

                            <p  class="fw-bold w-100 text-start text-gray " >
                                Mon compte
                            </p>

                            <ul class="navbar-nav  w-100 mt-2" >
                                <li class="nav-item ps-2i">
                                    <RouterLink to="/favoris" class="navLink fw-normal" activeClass="activeLink">
                                        <i class="fa-solid fa-gauge  me-1"></i>
                                        Tableau de bord
                                    </RouterLink>
                                </li>
                                <li class="nav-item ps-2i">
                                    <RouterLink to="/favoris" class="navLink fw-normal" activeClass="activeLink">
                                        <i class="fa-solid fa-bag-shopping  me-1"></i>
                                        Mes commandes 
                                    </RouterLink>
                                </li>
                                <li class="nav-item ps-2i">
                                    <RouterLink to="/favoris" class="navLink fw-normal" activeClass="activeLink">
                                        <i class="fa-solid fa-heart me-1 "></i>
                                        Mes favoris 
                                    </RouterLink>
                                </li>
                                <li class="nav-item ps-2i">
                                    <RouterLink to="/favoris" class="navLink fw-normal" activeClass="activeLink">
                                        <i class="fa-solid fa-gear  me-1"></i>
                                        Paramètres
                                    </RouterLink>
                                </li>
                            </ul>
                            <button class="w-100 btn btn-secondary btn-sm mt-3 ">
                                <i class="fa-solid fa-right-from-bracket me-1"></i>
                                Se déconnecter
                            </button>
                        </div>

                        <div v-if="!isAuthenfied" class="d-flex flex-column">
                            <button class="w-100 btn btn-outline-primary btn-sm mt-3 ">
                                <i class="fa-solid fa-user-plus me-1 "></i>
                                S'inscrire
                            </button>
                            <button class="w-100 btn btn-primary btn-sm mt-3 ">
                                <i class="fa-solid fa-right-to-bracket me-1  "></i>
                                Se connecter
                            </button>
                        </div>
                    </div>
                </div>
                <RouterLink to="/" >
                    <span class="fw-bold text-uppercase text-dark">cmchoice</span>
                </RouterLink>
            </div>
           
            <div class="collapse navbar-collapse d-none d-lg-inline">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <RouterLink to="/" active-class="activeLink" class="navLink"  activeClass="activeLink">Home</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="/shop" active-class="activeLink" class="navLink" activeClass="activeLink" >Shop</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="/about" class="navLink" activeClass="activeLink" >A propos</RouterLink>
                </li>
              </ul>
              <ul class="navbar-nav ms-auto ">               
                <li class="nav-item" v-if="isAuthenfied">
                    <RouterLink to="/panier" class="navLink" activeClass="activeLink" >
                        <i class="fa-solid fa-cart-shopping me-1 text-gray"></i>
                        Panier
                        <small class="text-gray fw-normal">(2)</small>
                    </RouterLink>
                </li>
                <li class="nav-item dropdown" v-if="isAuthenfied">
                    <a class="nav-link dropdown-toggle" id="pagesDropdown" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa-solid fa-user text-gray "></i>
                        Compte
                    </a>
                    <div class="dropdown-menu dropdown-menu-end mt-3 shadow-sm" aria-labelledby="pagesDropdown">
                        <RouterLink to="/favoris" class="dropdown-item border-0 transition-link">
                            <i class="fa-solid fa-gauge text-gray me-1"></i>
                            Tableau de bord
                        </RouterLink>
                        <RouterLink to="/favoris" class="dropdown-item border-0 transition-link">
                            <i class="fa-solid fa-bag-shopping text-gray me-1"></i>
                            Mes commandes 
                        </RouterLink>
                        <RouterLink to="/favoris" class="dropdown-item border-0 transition-link">
                            <i class="fa-solid fa-heart me-1 text-gray"></i>
                            Mes favoris
                        </RouterLink>
                        
                        <RouterLink to="/favoris" class="dropdown-item border-0 transition-link">
                            <i class="fa-solid fa-gear text-gray me-1"></i>
                            Paramètres
                        </RouterLink>
                        <hr>
                        <div class="w-100 d-flex justify-content-center">
                            <button class="w-75 btn btn-secondary btn-sm ">
                                <i class="fa-solid fa-right-from-bracket me-1"></i>
                                Se déconnecter
                            </button>
                        </div>
                    </div>
                    
                </li>
                <li class="nav-item" v-if="!isAuthenfied">
                    <RouterLink to="/inscription" class="navLink"  activeClass="activeLink"> 
                        <i class="fa-solid fa-user-plus me-1 text-gray"></i>
                        S'inscrire
                    </RouterLink>
                </li>
                <li class="nav-item" v-if="!isAuthenfied">
                    <RouterLink to="/connexion" class="navLink"  activeClass="activeLink"> 
                        <i class="fa-solid fa-right-to-bracket me-1 text-gray "></i>
                        Se connecter
                    </RouterLink>
                </li>
              </ul>
            </div>
            <RouterLink to="/panier" class="nav-link d-md-none " v-if="isAuthenfied">
                <i class="fa-solid fa-cart-shopping  text-gray text-24"></i>
            </RouterLink>
          </nav>
          
          
        </div>
      </header>
</template>

<style scoped>
.ps-4i {

}
.bg-gray{
    background-color: #f1f3f4;
}
.ps-2i {
    padding-left: 0.5rem !important;
    text-align: start !important;

}
.color-black {
    color: black !important;
}
.p-null {
    padding-left: 0 !important;
    text-align: start !important;
    color: black;
}

.text-24 {
   font-size: 24px;
}
.text-10 {
   font-size: 10px;
}
.navLink {
    display: block;
  padding: 0.5rem 1rem;
  font-weight: 700;
  /* color: #dcb14a; */
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
   }
    .activeLink {
        color: #dcb14a;
    }
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
    right: 0.3rem;
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
    display: none !important;
    }

    @media (min-width: 992px) {
    .navbar .dropdown-menu {
        display: block;
    }
    }
    @media (min-width: 768px) {
        .w-sidebar{
            width: 50%;
        }
    }

    @media (max-width: 767.98px) {
    .navbar .dropdown-menu.always-animated {
        display: block;
    }
    .w-sidebar{
        width: 80%;
    }
    }

    .navbar .dropdown-menu.show {
    display: block !important;
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

    .zindex {
        z-index: 1030;
    }


</style>
