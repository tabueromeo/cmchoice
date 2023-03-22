<template>
  <div class="container">
<br>
    <form id="loginForm" @submit.prevent="handleSubmit">
    <h3>Inscription</h3>
      <div class="form-group">
        <span><img src="../assets/User.svg" alt="user icon"></span>
        <input type="text" placeholder="Nom d'utilisateur" class="form-field" v-model="userName" @change="handleUserName">
      </div>
      <small>{{ messageUserName }}</small>


      <div class="form-group">
        <span><img src="../assets/SecuredL.svg" alt="user icon"></span>
        <input type="email" placeholder="email" class="form-field" v-model="email" @change="handleEmail"> 
      </div>
      <p> <small class="valid-feedback">{{emailmsg}}</small> </p>


      <div class="form-group">
        <span><img src="../assets/Password.svg" alt="user icon"></span>
        <input type="password" placeholder="Mot de passe" class="form-field" v-model="password" @change="handlePassword">
      </div>
      <p> <small>{{ paswordMessage }}</small> </p>

      <div class="form-group">
        <span><img src="../assets/Password.svg" alt="user icon"></span>
        <input type="password" placeholder="Confirmez le mot de passe" class="form-field" v-model="confirmerMdp" @change="handleConfirmerMdp">
      </div>
      <small>{{ messageConfirmerMdp }}</small>


      <div class="form-group ">
        <span><img src="../assets/Phone.svg" alt="user icon"></span>
        <input type="tel" placeholder="Numéro de télépone portable" class="form-field" pattern="[6]{1}[6|7|8|9]{1}[0-9]{7}" v-model="contact" @change="handleContact">
      </div>
      <small>{{ messageConatct }}</small>


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
  const email = ref("")
  const emailmsg = ref("")

  const password = ref("")
  const paswordMessage = ref("")

  const confirmerMdp = ref("")
  const messageConfirmerMdp = ref("")

  const contact = ref("")
  const messageConatct = ref("")

  const userName = ref("")
  const messageUserName = ref("")

  
  const erreurSubmit = ref("")


  //VERIFICATIONS

  const handleUserName = () => {
    if (!validator.isAlphanumeric(userName.value) || (userName.value === '')) {
      messageUserName.value = "Entrez un nom d'utilisateur valide."
    }
  }


  const handleEmail = () => {
    if (!validator.isEmail(email.value)) {
      emailmsg.value ="Mauvais format d'email."
    } 
  }

  const handlePassword = () => {
    if (!validator.isStrongPassword(password.value, {
      minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      paswordMessage.value = "Votre mot de passe doit contenir au moins 8 lettres avec au moins une majuscule ainsi qu'un caractère spécial "
    } 
  }

  const handleConfirmerMdp = () => {
    if (password.value !== confirmerMdp.value) {
      messageConfirmerMdp.value = "Les mots de passe doivent correspondre."
    } 
  }

  const handleContact = () => {
    if (!contact.value) {
      messageConatct.value = "Entrer un numéro valide."
      
    }
  }




  function handleSubmit() {
    if (handleUserName && handleEmail && handlePassword && handleConfirmerMdp && handleContact) {
      // Ici on va rédiriger le client vers la page de connexion
    } else {
      erreurSubmit.value = "Vérifier vos informations."
    }
  }


</script>

<style>
  /* .txt{
    display: none !important;
  } */

  small{
    color: red; 
    font-size: .2rem;
  }
  
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