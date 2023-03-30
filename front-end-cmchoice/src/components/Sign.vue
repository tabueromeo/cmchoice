<template>
  <div class="container">
<br>
    <form action="#" method="post">
    <h3>Inscription</h3>
      <div class="form-group">
        <input type="text" placeholder="Nom d'utilisateur" class="form-field" id="user_image">
      </div>
      <div class="form-group">
        <input type="text" placeholder="email" class="form-field" id="mail_img">
      </div>
      <div class="form-group">
        <input type="password" placeholder="Mot de passe" class="form-field pwd_img">
      </div>
      <div class="form-group">
        <input type="password" placeholder="Confirmez le mot de passe" class="form-field pwd_img">
      </div>
      <div class="form-group ">
        <input type="tel" placeholder="Numéro de télépone portable" class="form-field tel_img">
      </div>
      <!-- <div class="txt"> -->
        <div class="form-group " v-if="role==='producteur'">
          <input type="text" placeholder="Domaine d'activité" class="form-field txt">
        </div>
        <div class="form-group txt" v-if="role==='producteur'">
          <input type="text" placeholder="Nom de la société" class="form-field txt">
        </div>
        <div class="form-group" v-if="role==='producteur'">
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
        <button>Soumettre</button>
      </div>
    </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
 
  const role = ref("")

  // Vue.component();
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
  select:hover{
    border-bottom: 1px solid #6FCF97;
  }
  select:focus{
    border: none;
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

  @media screen and (max-width: 485px){
    select{
      padding: 3px 80px;
    }
  }
  
</style>