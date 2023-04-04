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
      </div><br><br>
      <div class="btn_create">
        <a href="#">Créer un compte</a>
      </div>
      
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
  margin-top: 150px;
}
  a{
    text-decoration: none;
    color: black;
  }
  .pwd_img{
    background: url(../assets/Invisible.svg) no-repeat;
    background-position-x: right;
  }
  form{
    padding: 10px 50px;
    gap: 25px;
  }
  .form-group a{
    position: absolute;
    right: 10px;
    font-size: .8rem;
    color: #059c44;
  }
  .account a{
    position: absolute;
    left: 95px;
    font-size: .8rem;
  }
  

  @media screen and (max-width: 1200px) {
    .container{
      margin-top: 100px;
    }
    form{
      gap: 10px;
    }
  }

  @media screen and (max-width: 500px){
    .form-group a, .account a{
      font-size: .5rem;
    }
  }

</style>