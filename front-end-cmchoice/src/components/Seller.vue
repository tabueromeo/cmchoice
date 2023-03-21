<template>
    <div class="container">
<br>
        <form action="#" method="post">
            <div class="form-group " v-if="role==='producteur'">
                <span><img src="../assets/User.svg" alt="user icon"></span>
                <input type="text" placeholder="Domaine d'activité" class="form-field vendeur">
            </div>
            <div class="form-group " v-if="role==='producteur'">
                <span><img src="../assets/User.svg" alt="user icon"></span>
                <input type="text" placeholder="Nom de la société" class="form-field vendeur">
            </div>
            <div class="form-group " v-if="role==='producteur'">
                <span><img src="../assets/User.svg" alt="user icon"></span>
                <input type="text" placeholder="Etat civil" class="form-field vendeur">
            </div>

        <div class="form-btn">
            <button>Soumettre</button>
        </div>
        </form>
    </div>
</template>

<script>

</script>

<style>

</style>