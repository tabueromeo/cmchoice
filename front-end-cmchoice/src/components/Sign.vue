<template>
  <div class="container">
    <h3>Inscription</h3>
<br>
    <!-- <div class="contain-form"> -->
      <form action="#" method="post">
        <div class="form-group">
          <span><img src="../assets/User.svg" alt="user icon"></span>
          <input type="text" placeholder="username" class="form-field">
        </div>
        <div class="form-group">
          <span><img src="../assets/User.svg" alt="user icon"></span>
          <input type="text" placeholder="email" class="form-field">
        </div>
        <div class="form-group">
          <span><img src="../assets/User.svg" alt="user icon"></span>
          <input type="password" placeholder="Password" class="form-field">
        </div>
        <div class="form-group">
          <span><img src="../assets/User.svg" alt="user icon"></span>
          <input type="password" placeholder="Confirm password" class="form-field">
        </div>
        <div class="form-group">
          <span><img src="../assets/User.svg" alt="user icon"></span>
          <input type="telephone" placeholder="Contact" class="form-field">
        </div>
        <div class="form-group">
          <span><img src="../assets/User.svg" alt="user icon"></span>
          <input type="text" placeholder="Domaine d'activité" class="form-field">
        </div>
        <div class="form-group">
          <span><img src="../assets/User.svg" alt="user icon"></span>
          <input type="text" placeholder="Nom de la société" class="form-field">
        </div>
        <div class="form-group">
          <span><img src="../assets/User.svg" alt="user icon"></span>
          <input type="text" placeholder="Etat civil" class="form-field">
        </div>
        <div class="form-check">
          <div class="ckeck">
            <input type="checkbox" name="Producteur" id="Producteur"><label for="#">Client</label>
          </div>
          <div class="ckeck">
            <input type="checkbox" name="Producteur" id="Producteur"><label for="#">Vendeur</label>
          </div>
        </div>

        <div class="form-btn">
          <button>Soumettre</button>
        </div>
      </form>
    <!-- </div> -->
  </div>
</template>

<script>

</script>

<style>
  .container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  /* form .form-group, .form-check{
    max-width: 360px;
  } */
  form .form-group:not(:last-child){
    margin-bottom: 10px;
  }

  form{
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    grid-area: form;
  }
  .user{
    display: flex;
    border-bottom: 1px solid black;
  }
  .form-group{
    position: relative;
    display: flex;
    width: 100%;
    border-bottom: 1px solid #000000;
    flex: 1;
  }
  span{
    position: absolute;
    left: 0;
    top: -1px;
  }
  .form-group > span, .form-field{
    border-radius: 0;
  }
  input{
    border: none;
    padding: 10px 0  0 35px;
    font-size: 1rem;
    outline: none;
    flex: 1;
  }
  input::placeholder{
    opacity: 0.5;
  }
  input:hover{
    border-bottom: 1px solid red;
  }
  .form-check{
    display: flex;
    justify-content: space-between;
    /* flex-direction: column; */
  }
  
</style>