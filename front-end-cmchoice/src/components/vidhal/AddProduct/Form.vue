<template>
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
        <label for="product-Quantity">Quantity:</label> 
        <input type="number" id="product-Quantity" name="productQuantity"><br>
        <button v-on:click="OpenWidget" id="upload_widget" class="cloudinary-button">Upload  files</button>
        <span id="numberFiles"></span><br>
        <br><button v-on:click="addProduct" id="SaveProduct" type="button">Save Product</button>
    </form>
</template>

<script>
//import widget cloudinary
import createWidget  from './WidgetCloudinary/Widget.js'

import {mapActions } from "vuex";

export default {
    data() { 
        return { 
           productForm : document.getElementById("productForm"),
           ArrayImage : [],
           myWidget : createWidget(this),   
        }
    },
    methods: {
        ...mapActions({
          addProductActions:'AddProductMod/addProductActions', 
        }) , 
        CloseForm :  function () {
           productForm.classList.toggle("none");
           document.getElementById("overlay").classList.toggle("none");
        },
        OpenWidget : function (ev) {
           ev.preventDefault();
            this.myWidget.open();
            false;
        },
        addProduct : function () {
          const formData = new FormData(productForm);
          const product = {
            name: formData.get("productName"),
            description: formData.get("productDescription"),
            price: parseFloat(formData.get("productPrice")),
            quantity: parseInt(formData.get("productQuantity")),
            photos: this.ArrayImage,
          };
          this.addProductActions(product);
          
          productForm.reset();
          this.ArrayImage = [];
          document.getElementById("numberFiles").innerHTML = "";
          this.CloseForm();
        } ,
    }
}
</script>

<style scoped>
  .icon-Close {
  position: absolute;
  right: 0;
  font-size: 1.7rem;
  margin-right: 10px;
  top: 0;
  cursor: pointer;
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
input, button, select, optgroup, textarea {
  margin: 0;
  margin-bottom: 0px;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
label[data-v-85ea7707] {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}
input[type="text"][data-v-85ea7707], 
input[type="number"][data-v-85ea7707], 
input[type="file"][data-v-85ea7707] {
  padding: 10px;
  border: 1px solid #ccc;
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
}
label[data-v-85ea7707][data-v-85ea7707] {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}
*, ::before, ::after {
  box-sizing: border-box;
}
label[data-v-85ea7707]
[data-v-85ea7707]
[data-v-85ea7707] {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}
::-moz-focus-inner {
    padding: 0;
    border-style: none;
}
[data-v-85ea7707], [data-v-85ea7707]::before, 
[data-v-85ea7707]::after {
  box-sizing: border-box;
}
[data-v-85ea7707]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
button {
  border-radius: 0;
}
[data-v-85ea7707][data-v-85ea7707], 
[data-v-85ea7707][data-v-85ea7707]::before, 
[data-v-85ea7707][data-v-85ea7707]::after {
  box-sizing: border-box;
}
button:not(:disabled), [type="button"]:not(:disabled), 
[type="reset"]:not(:disabled), [type="submit"]:not(:disabled) {
  cursor: pointer;
}
body {
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
}
[data-v-c209f5da] button#upload_widget {
  width: 143.117px;
}
</style>