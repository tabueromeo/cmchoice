<template>
  <div class="container">
<br>
    <form id="loginForm" @submit.prevent="handleSubmit">
    <h3>Inscription</h3>
      <div class="form-group">
        <span><img src="../assets/User.svg" alt="user icon"></span>
        <input type="text" placeholder="Nom d'utilisateur" id="user_image" :class="{'form-field':true, 'isError': !messageUserName.isValidate&&messageUserName.text, 'isValidate': messageUserName.isValidate }" v-model="userName" @change="handleUserName">
      </div>
      <small>{{ messageUserName.text }}</small>


      <div class="form-group">
        <span><img src="../assets/SecuredL.svg" alt="user icon"></span>
        <input type="email" placeholder="email" id="mail_img" :class="{'form-field' : true, 'isError': !emailmsg.isValidate&&emailmsg.text, 'isValidate': emailmsg.isValidate}" v-model="email" @change="handleEmail">
      </div>
      <small class="valid-feedback">{{emailmsg.text}}</small> 


      <div class="form-group">
        <span><img src="../assets/Password.svg" alt="user icon"></span>
        <input type="password" placeholder="Mot de passe" :class="{'form-field pwd_img': true, 'isError': !paswordMessage.isValidate&&paswordMessage.text, 'isValidate': paswordMessage.isValidate}" id="pass" v-model="password" @change="handlePassword">
      </div>
       <small>{{ paswordMessage.text }}</small> 

      <div class="form-group">
        <span><img src="../assets/Password.svg" alt="user icon"></span>
        <input type="password" placeholder="Confirmez le mot de passe" :class="{'form-field pwd_img': true, 'isError': !messageConfirmerMdp.isValidate&&messageConfirmerMdp.text, 'isValidate': messageConfirmerMdp.isValidate}" v-model="confirmerMdp" @change="handleConfirmerMdp">
      </div>
      <small>{{ messageConfirmerMdp.text }}</small>


      <div class="form-group ">
        <input type="tel" placeholder="Numéro de télépone portable" :class="{'form-field pwd_img tel_img': true, 'isError': !messageConatct.isValidate&&messageConatct, 'isValidate': messageConatct.isValidate}"  pattern="[6]{1}[5|6|7|8|9]{1}[0-9]{7}" v-model="contact" @change="handleContact ">
      </div>
      <small>{{ messageConatct }}</small>


      <!-- <div class="txt"> -->
        <div class="form-group " v-if="role==='producteur'">
          <input type="text" placeholder="Domaine d'activité" class="form-field txt">
        </div>
        <div class="form-group txt" v-if="role==='producteur'">
          <input type="text" placeholder="Nom de la société" class="form-field txt">
        </div>
        <div class="form-group" id="producteur" v-if="role==='producteur'">
          <select name="producteur" id="vendeur">
            <option value="producteur">Physique</option>
            <option value="producteur">Morale</option>
          </select>
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
        <button v-on:click="handleSubmit">Soumettre</button>
      </div>
    </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const userName = ref("")
  const messageUserName = ref({})

  const email = ref("")
  const emailmsg = ref({})

  const password = ref("")
  const paswordMessage = ref({})

  const confirmerMdp = ref("")
  const messageConfirmerMdp = ref({})

  const contact = ref("")
  const messageConatct = ref("")



  
  const erreurSubmit = ref("")


  //VERIFICATIONS

  const handleUserName = () => {
    if (!validator.isAlphanumeric(userName.value) || (userName.value === '')) {
      messageUserName.value.text = "Entrez un nom d'utilisateur valide."
      emailmsg.value.isValidate = false
    } else{
      messageUserName.value.text=""
      emailmsg.value.isValidate = true
    }
  }


  const handleEmail = () => {
    if ((!validator.isEmail(email.value)) || (email.value === '')) {
      emailmsg.value.text ="Entrez un mail valide."
      emailmsg.value.isValidate = false
    } else {
      emailmsg.value.text =""
      emailmsg.value.isValidate = true
    }
  }

  const handlePassword = () => {
    if (!validator.isStrongPassword(password.value, {
      minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}) || (password.value === '')) {
      paswordMessage.value.text = "Votre mot de passe doit contenir au moins 8 lettres avec au moins une majuscule ainsi qu'un caractère spécial "
      paswordMessage.value.isValidate = false
    } else {
      paswordMessage.value.text = ""
      paswordMessage.value.isValidate = true
    }
  }



  const handleConfirmerMdp = () => {
    if ((password.value !== confirmerMdp.value) || (confirmerMdp === '')) {
      messageConfirmerMdp.value.text = "Les mots de passe doivent correspondre."
      messageConfirmerMdp.value.isValidate = false
    } 
    else{
      messageConfirmerMdp.value.text = ""
      messageConfirmerMdp.value.isValidate = true
    }
  }

  const handleContact = () => {
    if ((!contact.value) || (contact.value === '')) {
      messageConatct.value= "Entrer un numéro valide."
      messageConatct.value.isValidate = false
    }
    else{
      messageConatct.value = ""
      messageConatct.value.isValidate = true
    }
  }




  function handleSubmit() {
    if (!(handleUserName && handleEmail && handlePassword && handleConfirmerMdp && handleContact)) {
      erreurSubmit.value = "Vérifier vos informations."
      console.log('ooooooooooooooo');
      // Ici on va rédiriger le client vers la page de connexion
    } else {
      erreurSubmit.value = "Vérifier vos informations."
    }
  }


</script>

<style>
  #user_image{
    background: url(../assets/User.svg) no-repeat;
    background-position-x: left;
  }
  #mail_img{
    background: url(../assets/SecuredL.svg) no-repeat;
  }
  .pwd_img{
    background: url(../assets/Password.svg) no-repeat;
  }
  .tel_img{
    background: url(../assets/Phone.svg) no-repeat;
  }
  .txt{
    padding: 0 15px ;
  }
  select{
    width: 100%;
    padding: 3px 15px 0;
    border: none;
    font-size: .9rem;
  }
  /* select:hover{
    border-bottom: 1px solid #6FCF97;
  } */
  select:focus{
    border: none;
  }

  small{
    color: red; 
    font-size: .9rem;
  }


  
  @media screen and (max-width: 685px){
    form{
        width: 60%;
        gap: 10px;  
    }
    .container{
      height: 100%;
    }
    .form-check{
      margin: 10px 0 25px 0;
    }
    select{
      padding: 3px 110px;
    }
  }
  .isError{
      border-bottom: 1px solid red !important;
    }
  .isValidate{
      border-bottom: 1px solid #6FCF97 !important;
    }
  @media screen and (max-width: 485px){
    select{
      padding: 3px 80px;
    }
  }
  
</style>