<!-- 
<template>
    <div>
      <form>
        <input type="text" v-model="user.name">
        <input type="email" v-model="user.email">
        <button @click.prevent="updateUser">Mettre à jour</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: "John Doe",
          email: "johndoe@example.com"
        }
      };
    },
    methods: {
      updateUser() {
        fetch('/api/user/' + this.user.id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.user)
        })
        .then(response => response.json())
        .then(data => {
          console.log('User updated successfully', data);
          this.user = data;
        })
        .catch(error => {
          console.error('Error updating user', error);
        });
      }
    }
  };
  </script>





// ou



<template>
    <div>
      <form>
        <label for="name">Nom:</label>
        <input type="text" name="name" v-model="user.name">
  
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="user.email">
  
        <button type="submit" @click.prevent="updateUser">Mettre à jour</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: '',
          email: ''
        },
        userId: 1 // l'ID de l'utilisateur à mettre à jour
      }
    },
    methods: {
      updateUser() {
        // Effectuer la mise à jour des informations de l'utilisateur avec l'API appropriée
        axios.patch(`/users/${this.userId}`, {
          name: this.user.name,
          email: this.user.email
        })
        .then(response => {
          // Si la mise à jour a réussi, afficher un message de confirmation
          console.log(response.data);
          alert('Les informations de l\'utilisateur ont été mises à jour !');
        })
        .catch(error => {
          // Si la mise à jour a échoué, afficher un message d'erreur
          console.log(error.response.data);
          alert('Une erreur s\'est produite lors de la mise à jour des informations de l\'utilisateur.');
        });
      }
    }
  }
  </script> -->