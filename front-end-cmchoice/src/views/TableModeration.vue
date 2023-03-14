<template><head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>

	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">


	

</head>
<body>

	<div class="container mt-5" id="app">
		<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Producteur</th>
      <th scope="col">Produit</th>
      <th scope="col">l'image du Produit</th>
      <th scope="col">Prix</th>
      <th scope="col">Ville</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr id="row1">
      <th scope="row">1</th>
      <td id="pdr_row1">Mark</td>
      <td id="pr_row1">l'huile de neem</td>
      <td id="img_row1"><img src="https://app.3schools.in/logo.png" height="100" width="100"></td>
      <td id="prx_row1">5000 fcfa</td>
      <td id="vlle_row1">Douala</td>
      <td>
<input type="button" id="save_button1" value="Ajouter" style="background-color: lightgreen;" class="save" onclick="save_row('1')">
<input type="button" value="Supprimer" style="background-color: red;" class="delete" onclick="delete_row('1')">
</td>
    </tr>
    <tr id="row2">
      <th scope="row">2</th>
      <td id="pdr_row2">Jacob</td>
      <td id="pr_row2">banane</td>
      <td id="img_row2"><img src="https://app.3schools.in/logo.png" height="100" width="100"></td>
      <td id="prx_row2">10000 fcfa</td>
      <td id="vlle_row2">Yaounde</td>
      <td>
        <input type="button" id="save_button2" value="Ajouter" style="background-color: lightgreen;" class="save" onclick="save_row('2')">
        <input type="button" value="Supprimer" style="background-color: red;" class="delete" onclick="delete_row('2')">
      </td>
    </tr>
    <tr id="row3">
      <th scope="row">3</th>
      <td id="pdr_row3">Larry </td>
      <td id="pr_row3">Macabo</td>
      <td id="img_row3"><img src="https://app.3schools.in/logo.png" height="100" width="100"></td>
      <td id="prx_row3">3000 fcfa</td>
      <td id="vlle_row3">Bamenda</td>
        <td>
<input type="button" id="save_button3" value="Ajouter" style="background-color: lightgreen;" class="save" onclick="save_row('3')">
<input type="button" value="Supprimer" style="background-color: red;" class="delete" onclick="delete_row('3')">
</td>
    </tr>
  </tbody>
</table>
	</div>
  </body>
  </template>



<script>
export default {
  name: '', 
  props: {
    
  },

  data() { 
        return { 
            
        }
    },
  methods: {
      
   },

}
</script>

<style>

</style>