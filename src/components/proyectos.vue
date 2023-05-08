<template>

    <cabecera/>
    <section class="bg-gray-100 py-10">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold mb-8 text-center font-oswald">Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white shadow-2xl rounded-lg">
          <img src="../../public/proyecto2.png" alt="whatsapp image" class="rounded-t-lg">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">WhatsApp</h3>
            <p class="text-gray-700 mb-4">
              WhatsApp online made with node.js
            </p>
            <a href="https://neon-whatsapp.onrender.com/" target="_blank" class="bg-gray-600 font-bold hover:bg-gray-700 text-white py-2 px-4 rounded-lg inline-block transition duration-300 ease-in-out">Ver proyecto <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>

        <div class="bg-white shadow-2xl rounded-lg">
          <img src="../../public/proyecto1.png" alt="granauto image" class="rounded-t-lg">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">GranAuto</h3>
            <p class="text-gray-700 mb-4">
              Second-hand car sales and rental website made with Boostrap and Scss
            </p>
            <a href="https://capitan9709.github.io/Proyecto_Sass_GranAuto/" target="_blank" class="bg-gray-600 font-bold hover:bg-gray-700 text-white py-2 px-4 rounded-lg inline-block transition duration-300 ease-in-out">Ver proyecto <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>

        <div class="bg-white shadow-2xl rounded-lg">
          <img src="../../public/proyecto3.png" alt="pokemon website image" class="rounded-t-lg">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">PokeApi</h3>
            <p class="text-gray-700 mb-4">
              Pokemon web page created with react and the Api "PokeApi"
            </p>
            <a href="https://poke-api-63328.web.app/" target="_blank" class="bg-gray-600 font-bold hover:bg-gray-700 text-white py-2 px-4 rounded-lg inline-block transition duration-300 ease-in-out">Ver proyecto <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>

        <div class="bg-white shadow-2xl rounded-lg">
          <img src="../../public/proyecto7.png" alt="blogvault image" class="rounded-t-lg">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">BlogVault</h3>
            <p class="text-gray-700 mb-4">
              A website designed to create and share your blog posts.<br/>
              Still in development
            </p>
            <a href="https://blogvault-vue.web.app/" target="_blank" class="bg-gray-600 font-bold hover:bg-gray-700 text-white py-2 px-4 rounded-lg inline-block transition duration-300 ease-in-out">Ver proyecto <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>

        <div class="bg-white shadow-2xl rounded-lg">
          <img src="../../public/proyecto4.png" alt="movie search image" class="rounded-t-lg">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Movie Search Engine</h3>
            <p class="text-gray-700 mb-4">
              A web designed to search for movies and series with their respective information
            </p>
            <a href="https://capitan9709.github.io/Api_Peliculas_VueJS/" target="_blank" class="bg-gray-600 font-bold hover:bg-gray-700 text-white py-2 px-4 rounded-lg inline-block transition duration-300 ease-in-out">Ver proyecto <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>

        <div class="bg-white shadow-2xl rounded-lg">
          <img src="../../public/proyecto5.png" alt="reminderlist image" class="rounded-t-lg">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">ReminderList</h3>
            <p class="text-gray-700 mb-4">
              Reminder list with Vue
            </p>
            <a href="https://recordatorios-componentesvuejs.web.app/" target="_blank" class="bg-gray-600 font-bold hover:bg-gray-700 text-white py-2 px-4 rounded-lg inline-block transition duration-300 ease-in-out">Ver proyecto <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>

        <div class="bg-white shadow-2xl rounded-lg">
          <img src="../../public/proyecto6.png" alt="cocktail website image" class="rounded-t-lg">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Cocktail Website</h3>
            <p class="text-gray-700 mb-4">
              A web designed to search for cocktails with their respective information
            </p>
            <a href="https://cocktail-website.onrender.com/home" target="_blank" class="bg-gray-600 font-bold hover:bg-gray-700 text-white py-2 px-4 rounded-lg inline-block transition duration-300 ease-in-out">Ver proyecto <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        
      </div>
    </div>
  </section>
    <pie/>
</template>


<script>

import cabecera from './cabecera.vue'
import pie from './pie.vue'

export default {
    components: {
        cabecera,
        pie,
    }
}

</script>

<style>

</style>