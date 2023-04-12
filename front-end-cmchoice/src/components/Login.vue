<template>
  <div class="container">
    <form id="loginForm">
        <br>
        <h3>Connexion</h3>
        <br>
        <div class="form-group">
            <input type="text" placeholder="Nom d'utilisateur" id="user_image">
        </div>
        <div class="form-group">
            <input type="email" placeholder="Email">
        </div>
        <div class="form-group">
          <input type="password" placeholder="Mot de passe" class="pwd_img">
        </div>
        <div class="form-group">
            <a href="#">Mot de passe oublié ?</a>
        </div>
        <div class="form-btn">
          <button>Se connecter</button> 
          <br><br>
          <button>Créer un compte</button>
        </div><br><br>
      
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
  margin-top: 80px;
}
  a{
    text-decoration: none;
    color: black;
  }
  .pwd_img{
    background: url(../assets/Invisible.svg) no-repeat;
    background-position: center right;
  }
  form{
    padding: 10px 30px;
    gap: 25px;
  }
  .form-group a{
    position: absolute;
    right: 10px;
    font-size: .8rem;
    color: #059c44;
    /* padding: 0; */
  }
  

  @media screen and (max-width: 1200px) {
    .container{
      margin-top: 70px;
    }
    form{
      gap: 10px;
    }
  }

  @media screen and (max-width: 500px){
    .form-group a{
      font-size: .5rem;
    }
  }

</style>