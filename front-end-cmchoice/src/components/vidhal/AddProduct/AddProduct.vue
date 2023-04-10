<template>
    <div class="container-section">
        <!-- CART SECTION-->
        <section class="cart-section pt-pb-5 bg-light">
            <div class="cart-section-container">
                <div class="cart-title">
                  <h1 class="h1">ADD PRODUCT</h1>
                </div>
                <div class="cart-liste">
                    <ul>
                      <li class="text-dark p-r-5">Home</li>
                      <li> / Dashboard </li>
                      <li class="active">  / AddProduct</li>
                    </ul>
                </div>
            </div>
         </section>
          <!-- OPEN FORM -->
          <div class="bt-center">
            <button v-on:click="OpenForm" id="open-form">Add Products</button>
          </div>
          <!-- OVERLAY-->
          <div id="overlay" class="none"></div>
          <!-- FORM-->
          <form id="productForm" class="none">
              <div class="icon-Close" v-on:click="CloseForm">
                  <i class="fa-solid fa-xmark"></i>
              </div>
            <label for="product-Name">Name of Product:</label>
            <input type="text" id="product-Name" name="productName"><br>
      
            <label for="product-Description">Description of Product:</label>
            <input type="text" id="product-Description" name="productDescription"><br>
      
            <label for="product-Price">Prix:</label>
            <input type="number" id="product-Price" name="productPrice"><br>
            <label for="product-Quantity">Quantity:</label> <!--mumber.toFixed(2) renvoie la partie entiere d'un nombre de 0 à chiffre après la virgule à .., en fonction de l'argument précisé à l'intérieur de la fonction-->
            <input type="number" id="product-Quantity" name="productQuantity"><br>
            <button v-on:click="OpenWidget" id="upload_widget" class="cloudinary-button">Upload  files</button>
            <span id="numberFiles"></span><br>
            <br><button v-on:click="addProduct" id="SaveProduct" type="button">Save Product</button>
          </form>
            <!-- DELETE ALL PRODUCTS -->
            <br>
            <div class="bt-center">
              <button v-on:click="CreatePopup" id="clearProducts">delete products</button>
            </div>
            <!-- PRODUCTS -->
          <section class="py-5">
            <div id="productCards"></div>
          </section>
            <div class="dialog"></div>

    </div>
</template>



<script>
export default {
  name: '', 
  props: {
    
  },

  data() { 
        return { 
           // déclaration des variables
                productForm : document.getElementById("productForm"),
                productCards : document.getElementById("productCards"),
                products : [],
                ArrayImage : [],  
                // Création du Widget
                myWidget : cloudinary.createUploadWidget(
                  {
                    cloudName: "de7iwknkm",
                    uploadPreset: "mdpjxfv2",
                  },
                  (error, result) => {
                    if (!error && result && result.event === "success") {
                      console.log("Done! Here is the image info: ", result.info);
                      this.ArrayImage.push(result.info);
                       // Filtrer les fichiers pour ne conserver que les images
                      this.ArrayImage = this.ArrayImage.filter((file) => {
                         return file.resource_type === "image";
                       });
                      document.getElementById(
                        "numberFiles"
                      ).innerHTML = `&emsp;${this.ArrayImage.length} fichiers selectionnés`;
                      console.log("arrayImage:", this.ArrayImage);
                    }
                  }
                ),
              
        }
    },

   

  methods: {

      // Récupérer les produits dans le localStorage s'ils existent
        checkLocalStorage : function() {
          if (localStorage.getItem("products")) {
              this.products = JSON.parse(localStorage.getItem("products"));
               this.displayProducts();
           }
        },
       //Ouverture du Popup formulaire
       OpenForm : function () {
          productForm.classList.toggle("none");
          document.getElementById("overlay").classList.toggle("none");
        }  ,  
        //Fermeture du Popup formulaire
        CloseForm :  function () {
           productForm.classList.toggle("none");
           document.getElementById("overlay").classList.toggle("none");
        },
        // ouverture du widget
        OpenWidget : function (ev) {
           ev.preventDefault();
            this.myWidget.open();
            false;
        },
        //  affichage du produit dans la page
        addProduct : function () {
          const formData = new FormData(productForm);
          const product = {
            name: formData.get("productName"),
            description: formData.get("productDescription"),
            price: parseFloat(formData.get("productPrice")),
            quantity: parseInt(formData.get("productQuantity")),
            photos: this.ArrayImage,
          };
          this.products.push(product);
          this.saveProducts();
          this.displayProducts();
          productForm.reset();
          this.ArrayImage = [];
          document.getElementById("numberFiles").innerHTML = "";
          this.CloseForm();
          console.log("products", this.products);
        } ,
        // Enregistrer les produits dans le localStorage
        saveProducts : function () {
          localStorage.setItem("products", JSON.stringify(this.products));
        },
        // Supprimer les produits du localStorage
        clearProducts : function () {
          localStorage.removeItem("products");
        },
        //creation du produit
        displayProducts : function () {
          productCards.innerHTML = "";
        
          this.products.forEach((product) => {
            const childrens = document.getElementById("productCards").children 
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
        
              <div id="${childrens ? "carouselExampleIndicators-n-" + childrens.length: "carouselExampleIndicators"}" class="carousel slide boxCarous">
                    <div class="carousel-indicators">
                      ${product.photos.map((photo, index) => `<button type="button" data-bs-target="#${childrens ? "carouselExampleIndicators-n-" + childrens.length : "carouselExampleIndicators" }" data-bs-slide-to="${index}" ${ index === 0 ? 'class="active"' : ""} aria-label="Slide ${index + 1}"></button>`).join("")}
                    </div>
                    <div class="carousel-inner">
                    ${product.photos.map((photo, index) => `<div class="carousel-item n-${index} ${index === 0 ? "active" : ""}"><img src="${photo.url}" class="d-block w-100"></div>`).join("")}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators-n-${childrens ? childrens.length : ""}" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators-n-${childrens ? childrens.length : ""}" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                   </button>
              </div>
              <h2>${product.name}</h2>
              <p>${product.price} FCFA</p>
              <p>${product.description}</p>
              <p>${product.quantity} products available</p>
                
                  `
            const buttonDelete = document.createElement("button");
            buttonDelete.className = "delete-product" 
            buttonDelete.innerText = "Delete" 
            buttonDelete.addEventListener("click", ()=>this.deleteProduct(product.name))
            card.appendChild(buttonDelete);
            productCards.appendChild(card);
               
          });
        },
        // Supprimer un produit
        deleteProduct : function (name) {
          console.log("yep");
          const index = this.products.findIndex((product) => product.name === name);
          this.products.splice(index, 1); //supprime 1 élément qui a l'index spécifié
          this.saveProducts();
          this.displayProducts();
        },
        //Creer et Effacer tous les produits
        CreatePopup : function () {
           const alertPopup = document.querySelector('.dialog')
           alertPopup.innerHTML = `
           <div class="dialog-content">
           <span class="close-btn">&times;</span>
           <p>Êtes-vous sûr de vouloir continuer?</p>
           <div class="buttons">
             <button id="confirm" class="confirm-btn">Confirm</button>
             <button id="cancel" class="cancel-btn">Cancel</button>
          </div>
           `;
           alertPopup.style.display = 'flex'
           this.ConfirmationDelete(alertPopup);
        },
        //Confirmation avant la suppression de tous les produits
        ConfirmationDelete : function (alertPopup) {
    
              document.getElementById("confirm").addEventListener("click", () => {
               this.products = [];
               this.clearProducts();
               this.displayProducts();
               alertPopup.style.display = 'none';
           });
              document.getElementById("cancel").addEventListener("click", () => {
                alertPopup.style.display = 'none';
           });
              document.getElementsByClassName("close-btn")[0].addEventListener("click", () => {
                alertPopup.style.display = 'none';
           });

        },

    },

    mounted() { 
    this.checkLocalStorage();
    console.log("terra");
  },
   

} 

</script>



<style scoped>


/* DEFAULT STYLE */

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

:deep(button),
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


/*OTHERS*/
/*DISPLAY*/
.none{
  display: none;
}
.block{
  display: block;
}

  /* Styles pour le formulaire */
  #open-form{
    margin: 30px 0;
    width: 160px;
  }

  #productForm{
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 540px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 20;
  }
    
    label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    }
    
    input[type="text"],
    input[type="number"],
    input[type="file"] {
    padding: 10px;
    border: 1px solid #ccc;
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;
    font-size: 16px;
    outline: none;
    }
    
    input[type="file"] {
    margin-bottom: 10px;
    }
    
    :deep(button.delete-product),:deep(button#open-form),:deep(button#clearProducts),
    :deep(button#upload_widget) {
    background-color: black;
    font-weight: bold;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    }
    :deep(button.delete-product) {
     padding: 6px 20px;
    }
    :deep(button#SaveProduct),:deep(button#confirm) {
     background-color: black;
    font-weight: bold;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    }
    :deep(button#confirm) {
     background-color: black;
    font-weight: bold;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    }
   

    /*style du conteneur*/
   #productCards{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      display: flex;
      gap: 40px;
    }

    /* Styles pour la carte du produit */
   :deep(.product-card){
    width: 255px;
    height: 489px;/* 484px */
    border: 1px solid #ccc;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    }
    
    :deep(.product-card h2){
     margin-bottom: 10px;
     font-size: 24px;
     font-weight: bold;
     text-transform: capitalize;
     text-overflow: ellipsis;
     overflow: hidden;
     white-space: nowrap;
     padding: 0 10px;
     padding-bottom: 5px;
    }
    
    :deep(.product-card p){
      margin-bottom: 10px;
      font-size: 0.9em;
      color: #6c757d;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      padding: 0 20px;
    }
    
    /*carousel*/
    :deep(#carouselExampleIndicators), :deep(.boxCarous){
         width: 100%;
         height: 280px; 
         margin-bottom: 10px;
     }
     :deep(.carousel-inner), :deep(.carousel-item){
         height: 100%;
     }
     :deep(.carousel-item img){
         height: 100%;
     }

     /*cloudinary-button*/
     #upload_widget{
      background-color: black;
      color: #FFFFFF;
      text-decoration: none;
      font-size: 16px;
      line-height: normal;
      height: auto;
      cursor: pointer;
      font-weight: bold;
      display: inline-block;
      border-radius: 0;
      padding: 10px 20px;
      width: 142px;
      height: 44px;
    }
    /*delete-product*/
    :deep(.delete-product){
      margin: 9px;
      padding: 6px 20px;
      font-size: 0.9em;
    }
    /*Overlay*/
    #overlay{
      position: fixed;
      left: 0;
      top: 0;
      height: 150vh;
      width: 100%;
      background-color: white;
      opacity: 0.8;
      z-index: 12;
    }
    /*SaveProduct*/
    #SaveProduct:hover {
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .5);
    }
    .icon-Close {
      position: absolute;
      right: 0;
      font-size: 1.7rem;
      margin-right: 10px;
      top: 0;
      cursor: pointer;
    }

    /*boite de dialogue*/
    
    :deep(.dialog){
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      display: none;
    }
    
   :deep(.dialog-content){
      background-color: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
      max-width: 500px;
      width: 100%;
      position: relative;
    }
    :deep(.dialog-content p){
      text-align: center;
    }

   :deep(.buttons){
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
    
    :deep(.confirm-btn){
      color: #fff;
      border: none;
      padding: 10px 20px;
      margin-right: 10px;
      cursor: pointer;
    }
   :deep(#confirm){
      flex: 1;
    }
    
    :deep(.cancel-btn){
      background-color: red;
      color: #fff;
      border: none;
      font-weight: bold;
      padding: 10px 20px;
      cursor: pointer;
      flex: 1;
    }
    
    :deep(.close-btn){
      position: absolute;
      top: -7px;
      right: 10px;
      font-size: 34px;
      font-weight: bold;
      color: #ccc;
      cursor: pointer;
    }
    
    :deep(.close-btn:hover){
      color: #666;
    }
    
    

@media screen and (max-width: 1256px) {
  .shopping-cart-section{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .container-section {
    margin: 0 100px;
  }
  .container-section {
    margin: 0 30px;
  }
}
@media screen and (max-width: 1200px) {
  #productCards{
    gap: 10px;
    justify-content: center;
  }
  .bt-center{
    text-align: center;
  }
}


@media screen and (max-width: 740px) {
  .container-section {
    margin: 0 20px;
  }
  .cart-section-container{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cart-section-container .cart-liste ul{
    padding: 0;
  }
  #productForm{
    width: 440px;
  }
  :deep(.dialog-content){
    width: 300px;
  }
  :deep(.close-btn){
      top: -13px;
      right: 5px;
   }

}

@media screen and (max-width: 558px) {
  #productCards{
    overflow-y: auto;
    height: 500px;
    border: 1px solid gainsboro;
  }
  #clearProducts, #open-form{
    height: 68px;
  }
  #productForm{
    width: 340px;
  }
  #clearProducts{
    width: 160px;
  }
}

@media screen and (max-width: 394px) {
  .cart-section h1{
   text-align: center;
  }
  .cart-liste ul{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
    
}
</style>