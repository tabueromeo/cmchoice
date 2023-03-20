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
    }
    .container-fluid{
        /* margin: 0 40px; */
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
        height: 630px;
    }
    .vector .img_bette{
        width: 70%;
        position: relative;
        top: 24%;
        left: 8%;
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
        gap: 13px;
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
    .form-group:hover{
      border-bottom: 1px solid red;
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
    @media screen and (min-width: 920) and (max-width: 1444){
        .container{
            margin: 60px 0;
        }
        form{
            width: 40%;
            padding: 20px;
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
            gap: 8px;
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