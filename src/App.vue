<template>
  <div id="app">
    
    <NavbarApp/>
    <div class="content-app">
      <router-view :dataShops="shopsOrdenados"/>
    </div>
    <footer>
        <a href='https://cafecito.app/juanalmadaa' rel='noopener' target='_blank' ><img srcset='https://cdn.cafecito.app/imgs/buttons/button_2.png 1x, https://cdn.cafecito.app/imgs/buttons/button_2_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_2_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_2.png' alt='Invitame un café en cafecito.app' style="margin-top:5px;" /></a>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarApp from '@/components/NavbarApp.vue'
import data from './data.json'

export default {
  name: 'App',
  components: {
    NavbarApp
  },
  data:() => ({
        dataShops:data
  }),
  computed:{
    shopsOrdenados(){
      function compare(a, b) {
        if (a.titulo < b.titulo)
          return -1;
        if (a.titulo > b.titulo)
          return 1;
        return 0;
      }
      return data.shops.sort(compare);
    }
  }
  
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
    height: 100%;
  }
  .content-app {
    padding: 5px 0;
    height: calc(100% - 105px);
  }
  .delivery, .dondecomer, .search, .takeaway, .historia, .emprendimientoadd {
    height: calc(100% - 10px);
  }
  .card-titulo .vs-card {
    box-shadow: none;
  }
  .vs-card-content.type-3 .vs-card:hover {
      -webkit-transform: scale(1)!important;
      transform: scale(1)!important;
  }
</style>
