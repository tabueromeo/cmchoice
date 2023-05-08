<script setup>
import Sign from '../components/Sign.vue';
import Login from '../components/Login.vue'

    // components: { Sign}
</script>

<template>
    <!-- <div class="container-fluid"> -->
      <div class="connect">
        <!-- <Sign/> -->
        <Login/>
      </div>
    <!-- </div> -->
   
</template>


<style scooped>
    *{
      font-family: 'Libre Franklin';
      padding: 0;
      margin: 0;
    }
    h3{
      text-transform: uppercase;
      font-weight: 700;
      margin: 20px 0;
    }
    .connect{
      margin: 180px 0;
    }

    .container{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin: 10px auto;
    }

    form .form-group:not(:last-child){
      margin-bottom: 10px;
    }
  
    form{
      display: flex;
      flex-direction: column;
      gap: 8px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 35%;
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

    #producteur{
      border-radius: 5px;
    } 


    .form-group.test{
      border-bottom: red;
    }
    /* .form-group > span, .form-field{
      border-radius: 0;
    } */
    input{
      border: 1px solid #c9c9c9;
      padding: .6rem;
      font-size: 1rem;
      outline: none;
      flex: 1;
      font-size: 1rem;
      color: #212529;
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
      text-transform: uppercase;
      width: 100%;
      opacity: 0.9;
    }
    .form-btn button:hover{
      opacity: 1;
      cursor: pointer;
    }

    @media screen and (max-width: 1200px) {
      .connect{
        margin: 150px 0;
      }
      form{
          gap: 6px;
        }
      input{
        font-size: .9rem;
      }
    }

    @media screen and (max-width: 885px) {
      .connect{
        margin: 100px 0;
      }
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
        gap: 5px;
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
      
    .connect{
      margin: 20px 0;
    }
      .container{
        margin: 10px 0;
      }
      .input{
        font-size: .7rem;
      }
    }



</style>