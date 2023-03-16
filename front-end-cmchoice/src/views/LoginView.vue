<script setup>
import Sign from '../components/Sign.vue';

    // components: { Sign}
</script>

<template>
    <div class="container-fluid">
        
        <div class="vector">
            <!-- <img src="../assets/Vector.svg" alt="vecteur"> -->
        </div>
        <div>
            <Sign/>
        </div>
    </div>
   
    
</template>


<style>
    .container-fluid{
        margin: 10px;
        background: #FFFFFF;
        border-radius: 10px;   
        box-shadow: 1px 4px 4px #847676;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: 'vector' 'form';
        width: 98%;
        height: 615px;
    }
    .vector{
        flex: 1;
        grid-area: vector;
        background-image: url(../assets/Vecto.png);
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;
    }
</style>