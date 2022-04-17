<template>
  <div class="home">
    <div class="center content-inputs">
      <vs-row>
        <vs-button @click="activeSidebar = !activeSidebar">
          <i class='bx bx-menu'></i>
        </vs-button>
        <vs-input v-model="value1" placeholder="Buscar" class="input-search-app" @keyup.enter="(value1 != '') ? $router.push({path:`/search/${value1}`}).catch(()=>{}) : true; value1 = ''">
        </vs-input>
        <vs-button :disabled="value1 == ''" @click="(value1 != '') ? $router.push({path:`/search/${value1}`}).catch(()=>{}) : true; value1 = ''" color="#727272">
          <i class='bx bx-search'></i>
        </vs-button>
        
      </vs-row>
      
      <vs-sidebar
        absolute
        v-model="active"
        :open.sync="activeSidebar"
        >
        <template #logo>
          <img :src="require(`@/assets/logo.png`)" alt="Logo" style="margin-right: 10px;"> Yendo no, llegando
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

          <vs-sidebar-item id="onsite" to="/onsite">
            <template #icon>
              <i class='mdi mdi-store-marker'></i>
            </template>
            On Site
          </vs-sidebar-item>


          <vs-sidebar-item id="historia" to="/historia">
            <template #icon>
              <i class='bx bxs-donate-heart' ></i>
            </template>
            Historia
          </vs-sidebar-item>

          <vs-sidebar-item id="historia" to="/historia#quieroestar">
            <template #icon>
              <i class='bx bxs-user-plus'></i>
            </template>
            ¡Quiero estar!
          </vs-sidebar-item>

          <template #footer>
          <vs-row>
            <a href='https://cafecito.app/juanalmadaa' rel='noopener' target='_blank' ><img srcset='https://cdn.cafecito.app/imgs/buttons/button_5.png 1x, https://cdn.cafecito.app/imgs/buttons/button_5_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_5_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_5.png' alt='Invitame un café en cafecito.app' style="margin-top:10px" /></a>
          </vs-row>
        </template>



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
      this.active = (this.active.indexOf("#") !== -1) ? this.active.split("#")[0] : this.active;
      this.activeSidebar = false;
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
.input-search-app {width: calc(100% - 100px);}
.input-search-app input, .input-search-app .vs-input-content {width: 100%;}
</style>