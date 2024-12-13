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

           <vs-sidebar-group v-if="loged">
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bxs-dashboard'></i>
                </template>
                Administrador
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="perfil" to="/perfil">
              <template #icon>
                <i class='bx bxs-user-pin' ></i>
              </template>
              Perfil
            </vs-sidebar-item>
            <vs-sidebar-item id="emprendimientos" to="/emprendimientos">
              <template #icon>
                <i class='bx bxs-store-alt'></i>
              </template>
              Emprendimientos
            </vs-sidebar-item>
          </vs-sidebar-group>

          <template #footer>
            <div @click="(loged) ? $router.push({path:`/perfil`}).catch(()=>{}) : dialogLogin = true" style="cursor:pointer">
              <vs-row>
                <vs-avatar badge badge-color="success" v-if="loged">
                  <img :src="require(`@/assets/imgs/historia/avatar.jpg`)" alt="Avatar">
                </vs-avatar>
                <vs-avatar primary v-if="!loged">
                    <i class='bx bx-user'></i>
                </vs-avatar>
                <h5 class="user-login-app">{{(loged) ? "Juan Almada" : "Loguear"}}</h5>
              </vs-row>
            </div>
        </template>



      </vs-sidebar>
    </div>
    <vs-dialog v-model="dialogLogin">
        <template #header>
          <h4 class="not-margin">
            ¡Bienvenido!
          </h4>
        </template>


        <div class="con-form login-form" v-if="!register">
          <vs-input v-model="email" placeholder="Email">
            <template #icon>
              @
            </template>
          </vs-input>
          <vs-input type="password" v-model="password" placeholder="Contraseña">
            <template #icon>
              <i class='bx bxs-lock'></i>
            </template>
          </vs-input>
          <div class="flex">
            <!-- <vs-checkbox v-model="remember">Recordarme</vs-checkbox> -->
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
        </div>

        <div class="con-form login-form" v-if="register">
          <vs-input v-model="emailReg" placeholder="Email">
            <template v-if="validEmail" #message-success>
              Email correcto
            </template>
            <template v-if="!validEmail && emailReg !== ''" #message-danger>
              Email incorrecto
            </template>
            <template #icon>
              @
            </template>
          </vs-input>
          <vs-input type="password" v-model="passwordReg1" placeholder="Contraseña">
            <template #icon>
              <i class='bx bxs-lock'></i>
            </template>
          </vs-input>
          <vs-input type="password" v-model="passwordReg2" placeholder="Repetir contraseña">
            <template #icon>
              <i class='bx bxs-lock'></i>
            </template>
          </vs-input>
        </div>

        <template #footer>
          <div v-if="!register">
            <div class="footer-dialog">
              <vs-button block>
                Login
              </vs-button>

              <div class="new">
                ¿Nuevo? <a href="#" @click="register = true">Crea una cuenta</a>
              </div>
            </div>
          </div>
          <div v-if="register">
            <div class="footer-dialog">
              <vs-button block>
                Crear cuenta
              </vs-button>

              <div class="new">
                ¿Ya tenés cuenta? <a href="#" @click="register = false">Loguear</a>
              </div>
            </div>
          </div>
        </template>
    </vs-dialog>
  </div>
</template>

<script>

export default {
  name: 'NavbarApp',
  data:() => ({
        value1: '',
        active: '',
        activeSidebar: false,
        loged: false,
        dialogLogin: false,
        email: '',
        password: '',
        register: false,
        emailReg: '',
        passwordReg1: '',
        passwordReg2: '',
        hasVisiblePassword: false
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
  }, 
  computed: {
    validEmail() {
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.emailReg)
    },
    getProgress() {
      let progress = 0
      if (/\d/.test(this.passwordReg1)) {
        progress += 20
      }
      if (/(.*[A-Z].*)/.test(this.passwordReg1)) {
        progress += 20
      }
      if (/(.*[a-z].*)/.test(this.passwordReg1)) {
        progress += 20
      }
      if (this.passwordReg1.length >= 6) {
        progress += 20
      }
      if (/[^A-Za-z0-9]/.test(this.passwordReg1)) {
        progress += 20
      }

      return progress
    }
  }
}
</script>

<style>
.input-search-app {width: calc(100% - 100px);}
.input-search-app input, .input-search-app .vs-input-content {width: 100%;}
.user-login-app {
  margin: 12px 10px;
}
.footer-dialog{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
.footer-dialog .new {
  margin: 0px;
  margin-top: 20px;
  padding: 0px;
  font-size: .7rem;
}
.footer-dialog a {
  color: rgb(var(--vs-primary)) !important;
  margin-left: 6px;
}
.footer-dialog .new a:hover {
  text-decoration: none;
}
.login-form .flex{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.login-form .flex a{
  text-decoration: none;
  color: rgb(var(--vs-primary)) !important;
  font-size: .8rem;
  opacity: .7;
}
.login-form .flex a:hover{
  opacity: 1;
}

</style>