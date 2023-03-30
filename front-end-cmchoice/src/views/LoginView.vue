<script setup>
import Sign from '../components/Sign.vue';
import Login from '../components/Login.vue'

    // components: { Sign}
</script>

<template>
    <div class="container-fluid">
        
        <div class="vector">
            <!-- <img src="../assets/Vector.svg" alt="vecteur" class="img_bette"> -->
            <img src="../assets/betterave.svg" alt="vecteur" class="img_bette">
        </div>
        <div>
            <Sign/>
            <!-- <Login /> -->
        </div>
    </div>
   
    
</template>


<style>
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
    .vector{
        flex: 1;
        grid-area: vector;
        background-image: url(../assets/Vecto.png);
        background-size: contain ;
        background-repeat: no-repeat;
        width: 100%;
        height: 635px;
        
    }
    .vector .img_bette{
        position: relative;
        top: 20%;
        left: 5%;
        width: 70%;
    }
    h3{
        text-transform: uppercase;
        font-weight: 700;
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
        gap: 15px;
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
      /* border-bottom: 1px solid blue; */
      flex: 1;

    }

    input[type=text]{
      border-bottom: 1px solid black;
    }

    input[type=email]{
      border-bottom: 1px solid black;
    }

    input[type=password]{
      border-bottom: 1px solid ;
    }

    

    input[type=tel]{
      border-bottom: 1px solid black;
    }

    #producteur{
      border-bottom: 1px solid black;
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
    /* .form-group:hover{
      border-bottom: 1px solid #30df79;
    } */
    input{
      border: none;
      padding: 3px 0  0 40px;
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
      background-color: #6FCF97;
      color :white;
      border-radius: 50px;
      text-transform: uppercase;
      width: 100%;
      opacity: 0.6;
    }
    .form-btn button:hover{
      opacity: 1;
      cursor: pointer;
    }
    
    @media screen and (min-width: 900) and (max-width: 1700){
      .vector{
        height: 100%;
      }
      .img_bette{
        /* width: 100%; */
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
        gap: 12px;
      }
      .container{
        margin: 50px 0;
      }
      .form-check{
        margin: 10px 0 25px 0;
      }
    }
    
    @media screen and (max-width: 500px){
      .container{
        margin: 10px 0;
      }
    }



</style>