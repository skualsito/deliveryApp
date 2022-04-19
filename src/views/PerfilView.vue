<template>
  <div class="perfil">
    <div class="content-pefil">
      <vs-row>
        <vs-card class="shop-app perfil-card">
          <template #title>
            <vs-avatar circle>
              <input type="file" id="myfile" name="myfile">
              <div class="subir-archivo"><i class='bx bx-upload'></i></div>
              <img :src="require(`@/assets/imgs/historia/avatar.jpg`)" alt="Avatar">
            </vs-avatar>
            <h3 style="text-align:center">Juan Almada</h3>
          </template>
          <template #img>
            <input type="file" id="myfile" name="myfile">
            <div class="subir-archivo"><i class='bx bx-upload'></i></div>
            <img :src="require(`@/assets/imgs/historia/back.jpg`)" alt="Back">
          </template>

          <template #text>
            <vs-button style="margin-top: 25px" @click="dialogPass=!dialogPass">
              Cambiar contraseña
            </vs-button>
          </template>
        </vs-card>
      </vs-row>

      <vs-dialog v-model="dialogPass">
          <template #header>
            <h4 class="not-margin">
              Cambiar contraseña
            </h4>
          </template>


          <div class="con-form">
            <vs-input type="password" v-model="passwordAnterior" placeholder="Contraseña anterior">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
            <vs-input type="password" v-model="password1" placeholder="Contraseña nueva">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
            <vs-input type="password" v-model="password2" placeholder="Repetir contraseña nueva">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
          </div>

          <template #footer>
            <div class="footer-dialog">
              <vs-button block>
                Cambiar
              </vs-button>
            </div>
          </template>
      </vs-dialog>
    </div>

  </div>
</template>
<script>


export default {
  name: 'PerfilView',
  data:() => ({
      dialogPass: false,
      passwordAnterior: '',
      password1: '',
      password2: ''
  }),
  components: {

  },
  props: {

  },
  methods:{
   
  },
  computed: {

  }
}
</script>

<style>
.con-form, .perfil-card, .con-form input {
  width:100%;
}
.con-form .vs-input-content, .con-form .vs-select__input {
  margin-bottom: 10px;
}
.vs-avatar img {
    width: 100%;
    height: auto;
    display: block;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    border-radius: inherit;
}
.vs-avatar:hover input, .vs-card__img input {
    z-index: 1;
}
.emprendimientoadd .vs-avatar:hover img, .emprendimientoadd .vs-card__img:hover img, .emprendimientoadd .vs-avatar:hover .bx-user,.perfil .vs-avatar:hover img, .perfil .vs-card__img:hover img, .perfil .vs-avatar:hover .bx-user {
    filter: blur(4px);
}
.vs-avatar:hover .subir-archivo, .vs-card__img:hover .subir-archivo {
    opacity: 0.5;
}
.subir-archivo {
  position: absolute;
  z-index: 11;
  opacity: 0; 
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

.subir-archivo i {font-size: 2rem;color: #fff;}
.vs-avatar input, .vs-card__img input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

</style>