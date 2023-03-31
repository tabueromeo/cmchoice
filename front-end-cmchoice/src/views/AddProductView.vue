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
          <button v-on:click="OpenForm" id="open-form">Add Products</button>
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
            <button v-on:click="CreatePopup" id="clearProducts">delete products</button>
            <!-- PRODUCTS -->
          <section class="py-5">
            <div id="productCards"></div>
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
           const alertPopup = document.createElement("div");
           alertPopup.className = "dialog";
           alertPopup.innerHTML = `
           <div class="dialog-content">
           <span class="close-btn">&times;</span>
           <p>Êtes-vous sûr de vouloir continuer?</p>
           <div class="buttons">
             <button id="confirm" class="confirm-btn">Confirm</button>
             <button id="cancel" class="cancel-btn">Cancel</button>
          </div>
           `;
           document.body.appendChild(alertPopup);
           this.ConfirmationDelete(alertPopup);
        },
        //Confirmation avant la suppression de tous les produits
        ConfirmationDelete : function (alertPopup) {
    
              document.getElementById("confirm").addEventListener("click", () => {
               this.products = [];
               this.clearProducts();
               this.displayProducts();
               document.body.removeChild(alertPopup);
           });
              document.getElementById("cancel").addEventListener("click", () => {
               document.body.removeChild(alertPopup);
           });
              document.getElementsByClassName("close-btn")[0].addEventListener("click", () => {
               document.body.removeChild(alertPopup);
           });

        },

    },

    mounted() { 
    this.checkLocalStorage();
    console.log("terra");
  },
   

} 

</script>



<style>


/* DEFAULT STYLE */

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
    
    button {
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
    .product-card {
    width: 255px;
    height: 484px;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    }
    
    .product-card h2 {
     margin-bottom: 10px;
     font-size: 24px;
     font-weight: bold;
     text-transform: capitalize;
     text-overflow: ellipsis;
     overflow: hidden;
     white-space: nowrap;
     padding: 0 10px;
    }
    
    .product-card p {
      margin-bottom: 10px;
      font-size: 0.9em;
      color: #6c757d;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      padding: 0 20px;
    }
    
    /*carousel*/
    #carouselExampleIndicators, .boxCarous{
         width: 100%;
         height: 280px; 
         margin-bottom: 10px;
     }
     .carousel-inner, .carousel-item{
         height: 100%;
     }
     .carousel-item img{
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
    .delete-product{
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
    #SaveProduct:hover{
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .5);
    }
    .icon-Close{
      position: absolute;
      right: 0;
      font-size: 1.7rem;
      margin-right: 10px;
      top: 0;
      cursor: pointer;
    }

    /*boite de dialogue*/
    
    .dialog {
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
    }
    
    .dialog-content {
      background-color: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
      max-width: 500px;
      width: 100%;
      position: relative;
    }
    .dialog-content p{
      text-align: center;
    }

    .buttons{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
    
    .confirm-btn {
      color: #fff;
      border: none;
      padding: 10px 20px;
      margin-right: 10px;
      cursor: pointer;
    }
    #confirm{
      flex: 1;
    }
    
    .cancel-btn {
      background-color: red;
      color: #fff;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      flex: 1;
    }
    
    .close-btn {
      position: absolute;
      top: -7px;
      right: 10px;
      font-size: 34px;
      font-weight: bold;
      color: #ccc;
      cursor: pointer;
    }
    
    .close-btn:hover {
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
  .dialog-content{
    width: 300px;
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