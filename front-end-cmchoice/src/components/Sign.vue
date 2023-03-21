<template>
  <div class="container">
<br>
    <form action="#" method="post">
    <h3>Inscription</h3>
      <div class="form-group">
        <span><img src="../assets/User.svg" alt="user icon"></span>
        <input type="text" placeholder="Nom d'utilisateur" class="form-field">
      </div>
      <div class="form-group">
        <span><img src="../assets/SecuredL.svg" alt="user icon"></span>
        <input type="text" placeholder="email" class="form-field">
      </div>
      <div class="form-group">
        <span><img src="../assets/Password.svg" alt="user icon"></span>
        <input type="password" placeholder="Mot de passe" class="form-field">
      </div>
      <div class="form-group">
        <span><img src="../assets/Password.svg" alt="user icon"></span>
        <input type="password" placeholder="Confirmez le mot de passe" class="form-field">
      </div>
      <div class="form-group ">
        <span><img src="../assets/Phone.svg" alt="user icon"></span>
        <input type="tel" placeholder="Numéro de télépone portable" class="form-field">
      </div>
      <!-- <div class="txt"> -->
        <div class="form-group " v-if="role==='producteur'">
          <span><img src="../assets/User.svg" alt="user icon"></span>
          <input type="text" placeholder="Domaine d'activité" class="form-field vendeur">
        </div>
        <div class="form-group " v-if="role==='producteur'">
          <span><img src="../assets/User.svg" alt="user icon"></span>
          <input type="text" placeholder="Nom de la société" class="form-field vendeur">
        </div>
        <div class="form-group " v-if="role==='producteur'">
          <span><img src="../assets/User.svg" alt="user icon"></span>
          <input type="text" placeholder="Etat civil" class="form-field vendeur">
        </div>
      <!-- </div> -->
      <div class="form-check">
        <div class="ckeck">
          <input v-model="role"  type="radio" id="userChoice1" name="user" value="client" checked>
          <label for="client">Client</label>
        </div>
        <div class="ckeck">
          <input v-model="role" type="radio" id="userChoice2" name="user" value="producteur" @click="fUn">
          <label for="userChoice2">Vendeur</label>
        </div>
      </div>

      <div class="form-btn">
        <button>Soumettre</button>
      </div>
    </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  // var txtBox = document.getElementsByClassName('txt')[0];
  // var button = document.getElementById('userChoice2');

  // function fUn() {
  //     console.log("bjr " + txtBox);
  //   if (button.checked === true) {
  //     txtBox.style.display = "block"
  //   }
  // } 
  const role = ref("")
</script>

<style>
  /* .txt{
    display: none !important;
  } */
  
  @media screen and (max-width: 685px){
    form{
        width: 60%;
        gap: 8px;  
    }
    .container{
      height: 100%;
    }
    .form-check{
      margin: 10px 0 25px 0;
    }
  }
  
</style>