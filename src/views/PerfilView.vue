<template>
  <div class="perfil">
    <vs-row>
      <vs-card class="shop-app perfil-card">
        <template #title>
          <vs-avatar circle>
            <img :src="require(`@/assets/imgs/historia/avatar.jpg`)" alt="Avatar">
          </vs-avatar>
          <h3 style="text-align:center">Juan Almada</h3>
        </template>
        <template #img>
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
.con-form input {
  margin-bottom: 10px;
}
</style>