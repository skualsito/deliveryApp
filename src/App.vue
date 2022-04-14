<template>
  <div id="app">
    
    <NavbarApp />
    <div class="content-app">
      <router-view :dataShops="dataShops"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarApp from '@/components/NavbarApp.vue'

export default {
  name: 'App',
  components: {
    NavbarApp
  },
  data:() => ({
        dataShops:[{
          titulo:"BACÁN BURGER ®",
          descripcion: "¡Plancha llena, corazón contento!",
          instagram: "bacanburger",
          logo: "logo-bacan.jpg"
        },{
          titulo:"HONDO",
          descripcion: "Bistró de costa.",
          instagram: "hondobistro",
          logo: "logo-hondo.jpg"
        },{
          titulo:"🔥 ChillBeer 🔥",
          descripcion: "🛸Antares, Peñon del Aguila, Tacuara, Bierhaus, Baum, Tragos y Comidas🛸",
          instagram: "chillbeer_oficial",
          logo: "logo-chillbeer.jpg"
        },{
          titulo:"𝐄𝐋 𝐂𝐇𝐄𝐅𝐅",
          descripcion: "Pizzas y empanadas gourmet 💯",
          instagram: "elcheff.mda",
          logo: "logo-elcheff.jpg",
          whatsapp:"2257665352"
        }
        ]
  })
  
}
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  html, body {
    font-family: Poppins;
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin: 0;

  }
  #app {
    padding: 5px;
  }
  .content-app {
    padding: 5px 0;
  }
  .card-titulo .vs-card {
    box-shadow: none;
  }
</style>
