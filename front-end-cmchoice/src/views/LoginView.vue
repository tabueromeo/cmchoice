<script setup>
import Sign from '../components/Sign.vue';
import Singin from '../components/SignIn.vue'

    // components: { Sign}
</script>

<template>
    <div class="container-fluid">
      <div class="vector">
        <img src="../assets/carotte.png" alt="vecteur" class="img_carot">
        <img src="../assets/Vecto.png" alt="" class="img_vecto">
      </div>
      <div class="connect">
        <Sign/>
        <!-- <Singin/> -->
      </div>
    </div>
   
</template>


<style scooped>
    *{
      font-family: 'Libre Franklin';
      padding: 0;
      margin: 0;
    }
    .container-fluid{
      background: #FFFFFF;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      grid-template-areas: 'vector' 'form';
    }
    .img_carot{
      top: 15%;
      left: 5%;
      width: 50%;
      transform: matrix(-0.94, 0.35, 0.35, 0.94, 0, 0);
      position: absolute;
    }
    .img_vecto{
      z-index: 1;
      width: 78.6%;
    }
    h3{
      text-transform: uppercase;
      font-weight: 700;
      margin: 20px 0;
    }

    .container{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin: 60px auto;
    }

    form .form-group:not(:last-child){
      margin-bottom: 10px;
    }
  
    form{
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 50%;
      padding: 10px 40px;
      border-radius: 2px;   
      box-shadow: 0 4px 5rem rgba(220, 252, 223, 0.6);
      grid-area: form;
    }
    .form-group{
      position: relative;
      display: flex;
      width: 100%;
      flex: 1;
    }

    input[type=text]{
      border-bottom: 1px solid rgba(44, 43, 43, 0.5);
    }

    input[type=email]{
      border-bottom: 1px solid rgba(44, 43, 43, 0.5);
    }

    input[type=password]{
      border-bottom: 1px solid rgba(44, 43, 43, 0.5);
    }

    input[type=tel]{
      border-bottom: 1px solid rgba(44, 43, 43, 0.5);
    }

    #producteur{
      border-bottom: 1px solid rgba(44, 43, 43, 0.5);
    }


    .form-group.test{
      border-bottom: red;
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
      padding: 3px 0  0 5px;
      font-size: 1rem;
      outline: none;
      flex: 1;
      font-size: 1rem;
    }
    input::placeholder{
      opacity: 0.5;
    }
    .form-check{
      display: flex;
      justify-content: space-around;
      width: 100%;
    }
    .form-btn{
      width: 100%;
      text-align: center;
      margin-top: 20px;
    } 
    .form-btn button{
      border: none;
      padding: 10px;
      background-color: #1aca63;
      color :white;
      border-radius: 50px;
      text-transform: uppercase;
      width: 100%;
      opacity: 0.9;
    }
    .form-btn button:hover{
      opacity: 1;
      cursor: pointer;
    }

    @media screen and (max-width: 1200px) {
      form{
        gap: 6.4px;
      }
    }

    @media screen and (max-width: 885px) {
      .container-fluid{
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: 'vector';
        width: 95%;
        height: 615px;
        box-shadow: none;
        overflow-y: auto;
      }
      .vector{
        display: none;
      }
      form{
        width: 60%;
        box-shadow: 0 4px 5rem rgba(220, 252, 223, 0.3);
        gap: 9px;
      }
      .container{
        margin: 50px 0;
      }
      .form-check{
        margin: 10px 0 25px 0;
      }
      .input{
        font-size: .9rem;
      }
    }
    
    @media screen and (max-width: 500px){
      .container{
        margin: 10px 0;
      }
      .input{
        font-size: .8rem;
      }
    }



</style>