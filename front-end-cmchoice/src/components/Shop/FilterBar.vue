<script setup>
    import Choices from 'choices.js'
    import { ref } from 'vue'
    import CategorieVue from './SideBar/Categorie.vue';
    import SideBar from './SideBar/SideBar.vue';

    const customs = ref(null)
    const categories = ref([
    {
        id: 1,
        nom: "agroalimemtaire",
        imgPath: "https://z-p3-scontent.fdla3-2.fna.fbcdn.net/v/t1.6435-9/107894377_1156440184712486_7241272393039203839_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=973b4a&_nc_ohc=e-TwyFouCsgAX9thqXz&_nc_ht=z-p3-scontent.fdla3-2.fna&oh=00_AfCSvndqB1ZCfuX1po8xlQLffP1emlwK3H8xn1lOh-W1BA&oe=64316A56",
        description: "produits agroalimemtaire made in cameroon"
    },
    {
        id: 2,
        nom: "cosmetique",
        imgPath: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://www.auletch.com/wp-content/uploads/2019/05/AULETCH-25.jpg",
        description: "produits cosmetiques made in cameroon"
    },
    {
        id: 3,
        nom: "sante",
        imgPath: "https://www.journalducameroun.com/wp-content/uploads/2022/07/med-780x440.jpg",
        description: "produits a base de plante médécinales"
    },
    {
        id: 4,
        nom: "Mode",
        imgPath: "https://madein-cameroon.cm/wp-content/uploads/2021/01/dip-14.jpg",
        description: "vetements et accesoires de modes made in cameroon"
    },
   ])
//   function injectClassess(x) {
// 		let pickerCustomClass = x.dataset.customclass;
// 		let pickerSevClasses = pickerCustomClass.split(' ');
// 		x.parentElement.classList.add.apply(x.parentElement.classList, pickerSevClasses);
// 	}

	// const selectPicker = document.querySelector('.selectpicker');
	// if (selectPicker.length) {
	// 	selectPicker.forEach((el) => {
	// 		const customSelect = new Choices(el, {
	// 			placeholder: true,
	// 			searchEnabled: false,
	// 			itemSelectText: '',
	// 			callbackOnInit: () => injectClassess(el),
	// 		});
	// 	});
	// }
    // const customSelect = new Choices(selectPicker)

</script>

<template>
   <div class="d-flex flex-row-reverse flex-lg-row mb-3  justify-content-between">
        <div class=" mb-2 mb-lg-0 align-items-center">
            <!-- <p class="text-sm text-muted mb-0">Showing 1–12 of 53 results</p> -->
            <button class="btn btn-dark d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasFilter" aria-controls="offcanvasFilter">
                <i class="fa-solid fa-filter me-1"></i>Filtrer
            </button>
        </div>
        <div class="align-items-center">
            <ul class="list-inline d-flex align-items-center justify-content-lg-end mb-0">
                <li class="d-none d-lg-inline list-inline-item text-muted me-3">
                    Trier par
                </li>
                <li class="list-inline-item">
                    <!-- <select ref="customs" class="selectpicker" data-type="select-one" data-customclass="form-control form-control-sm">
                        <option value>Sort By </option>
                        <option value="default">Default sorting </option>
                        <option value="popularity">Popularity </option>
                        <option value="low-high">Price: Low to High </option>
                        <option value="high-low">Price: High to Low </option>
                    </select> -->
                    <select class="form-select choices" aria-label="Default select example">
                        <option value="default">Les plus récents</option>
                        <option value="popularity">Les plus populaires</option>
                        <option value="low-high">Prix: le plus bas au plus élevé</option>
                        <option value="high-low">Prix: le plus élevé au plus bas</option>
                    </select>
                </li>
                
            </ul>
        </div>
    </div>

    <div class="offcanvas offcanvas-end w-sidebar" tabindex="-1" id="offcanvasFilter" aria-labelledby="offcanvasFilterLabel">
        
        <div class="offcanvas-body">
            <!-- <CategorieVue v-for="categorie in categories" :key="categorie.id" :cat="categorie"/>   -->
            <SideBar/>
        </div>
    </div>
</template>
<style scoped>
    @media (min-width: 768px) {
        .w-sidebar{
            width: 50%;
        }
    }
    @media (max-width: 767.98px) {
    .w-sidebar{
        width: 80%;
    }
    }
</style>
