<template>
  <div class="home">
    <div class="center content-inputs">
      <vs-row>
        <vs-button @click="activeSidebar = !activeSidebar">
          <i class='bx bx-menu'></i>
        </vs-button>
        <vs-input v-model="value1" placeholder="Buscar" class="input-search-app">
          <template #icon>
            <i class='bx bx-search'></i>
          </template>
        </vs-input>
      </vs-row>
      
      <vs-sidebar
        absolute
        v-model="active"
        :open.sync="activeSidebar"
        >
        <template #logo>
          Delivery App
        </template>
          <vs-sidebar-item id="home" to="/">
            <template #icon>
              <i class='bx bx-home'></i>
            </template>
            Home
          </vs-sidebar-item>

          <vs-sidebar-item id="delivery" to="/delivery">
            <template #icon>
              <i class='mdi mdi-moped'></i>
            </template>
            Delivery
          </vs-sidebar-item>

          <vs-sidebar-item id="takeaway" to="/takeaway">
            <template #icon>
              <i class='mdi mdi-basket'></i>
            </template>
            Take Away
          </vs-sidebar-item>

          <vs-sidebar-item id="dondecomer" to="/dondecomer">
            <template #icon>
              <i class='mdi mdi-store-marker'></i>
            </template>
            ¿Dónde comer?
          </vs-sidebar-item>


        <!-- <vs-sidebar-item id="donate">
          <template #icon>
            <i class='bx bxs-donate-heart' ></i>
          </template>
          Donar
        </vs-sidebar-item> -->



      </vs-sidebar>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NavbarApp',
  data:() => ({
        value1: '',
        active: '',
        activeSidebar: false
  }),
  mounted(){
    this.changeActive();
  },
  methods:{
    changeActive(){
      this.active = (location.pathname == "/") ? "home" : location.pathname.split("/")[1];
    }
  },
  watch:{
    $route (){
      this.changeActive();
    }
} 
}
</script>

<style>
.input-search-app {width: calc(100% - 50px);}
.input-search-app input, .input-search-app .vs-input-content {width: 100%;}
</style>