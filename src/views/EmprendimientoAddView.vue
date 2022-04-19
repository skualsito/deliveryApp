<template>
  <div class="emprendimientoadd con-form">
    <vs-row>
      <vs-card class="shop-app emprendimiento-card">
        <template #title>
          <vs-avatar primary circle>
            <input type="file" id="myfile" name="myfile">
            <div class="subir-archivo"><i class='bx bx-upload'></i></div>
            <img :src="(shop.logo) ? shop.logo : require(`@/assets/imgs/historia/avatar.jpg`)" alt="Avatar" v-if="shop.logo">
            <i class='bx bx-user' v-if="!avatar"></i>
          </vs-avatar>
          <h3 style="text-align:center" v-show="!showField('nombre', shop.titulo)" @click="focusField('nombre')">{{shop.titulo}}</h3>
          <vs-input v-model="shop.titulo" placeholder="Nombre" v-show="showField('nombre', shop.titulo)" type="text" class="field-value form-control" @focus="focusField('nombre')" @blur="blurField"/>
        </template>
        <template #img>
          <input type="file" id="myfile" name="myfile">
          <div class="subir-archivo"><i class='bx bx-upload'></i></div>
          <img :src="(shop.back) ? shop.back : require(`@/assets/defaults/Abstract-Gradient-${defaultBack}.png`)" alt="Back">
        </template>

        <template #text>
          <vs-select
            placeholder="Seleccione un tipo"
            v-model="shop.tipo"
            class="select-localidad-appadd"
          >
            <vs-option :label="item.tipo" :value="item.id" v-for="(item) in tiposData" :key="item.id" >
              {{item.tipo}}
            </vs-option>
          </vs-select>
          <vs-input placeholder="Descripción corta" v-model="shop.descripcion">
          </vs-input>
          <vs-input placeholder="Descripción larga" v-model="shop.descripcionLarga">
          </vs-input>
          <vs-select
            placeholder="Seleccione una localidad"
            v-model="shop.localidad"
            class="select-localidad-appadd"
          >
            <vs-option :label="item.localidad" :value="item.id" v-for="(item) in localidadesData" :key="item.id" >
              {{item.localidad}}
            </vs-option>
          </vs-select>
          <vs-input placeholder="Dirección" v-model="shop.direccion">
            <template #icon>
              <i class='bx bxs-map'></i>
            </template>
          </vs-input>
          <vs-input placeholder="Instagram" v-model="shop.instagram">
            <template #icon>
              <i class='bx bxl-instagram'></i>
            </template>
          </vs-input>
          <vs-input placeholder="Whatsapp" v-model="shop.whatsapp">
            <template #icon>
              <i class='bx bxl-whatsapp'></i>
            </template>
          </vs-input>
          <vs-input placeholder="Facebook" v-model="shop.facebook">
            <template #icon>
              <i class='bx bxl-facebook' ></i>
            </template>
          </vs-input>
          <vs-input placeholder="Twitter" v-model="shop.twitter">
            <template #icon>
              <i class='bx bxl-twitter'></i>
            </template>
          </vs-input>
          <vs-input placeholder="Teléfono" v-model="shop.telefono">
            <template #icon>
              <i class='bx bxs-phone'></i>
            </template>
          </vs-input>
          <vs-input placeholder="Página web" v-model="shop.url">
            <template #icon>
              <i class='bx bx-link'></i>
            </template>
          </vs-input>
        </template>
      </vs-card>
    </vs-row>
    
    <vs-row>
      <vs-card type="3" class="item-shop menu-container" v-for="(item, index) in shop.menu" :key="index" style="margin-bottom: 15px;">
          <template #title>
            <h3 v-show="!showField(`titulo${index}`, item.titulo)" @click="focusField(`titulo${index}`)">{{item.titulo}}</h3>
            <vs-input v-model="item.titulo" placeholder="Titulo" v-show="showField(`titulo${index}`, item.titulo)" type="text" class="field-value form-control" @focus="focusField(`titulo${index}`)" @blur="blurField"/>
          </template>
          <template #text>
            <p v-show="!showField(`descripcion${index}`, item.descripcion)" @click="focusField(`descripcion${index}`)">
              {{item.descripcion}}
            </p>
            <vs-input v-model="item.descripcion" placeholder="Descripcion" v-show="showField(`descripcion${index}`, item.descripcion)" type="text" class="field-value form-control" @focus="focusField(`descripcion${index}`)" @blur="blurField"/>
            
            <vs-row>
              <vs-card type="3" class="item-shop menu" v-for="(item, index2) in item.items" :key="index2">
                <template #title>
                  <h5 v-show="!showField(`itemTitulo${index}${index2}`, item.titulo)" @click="focusField(`itemTitulo${index}${index2}`)">{{item.titulo}}</h5>
                  <vs-input v-model="item.titulo" placeholder="Titulo" v-show="showField(`itemTitulo${index}${index2}`, item.titulo)" type="text" class="field-value form-control" @focus="focusField(`itemTitulo${index}${index2}`)" @blur="blurField"/>
                </template>
                <template #text>
                  <p v-show="!showField(`itemDescripcion${index}${index2}`, item.descripcion)" @click="focusField(`itemDescripcion${index}${index2}`)">
                    {{item.descripcion}}
                  </p>
                  <vs-input v-model="item.descripcion" placeholder="Descripcion" v-show="showField(`itemDescripcion${index}${index2}`, item.descripcion)" type="text" class="field-value form-control" @focus="focusField(`itemDescripcion${index}${index2}`)" @blur="blurField"/>
                </template>
              </vs-card>
            </vs-row>
            <vs-button style="margin-top: 25px" @click="item.items.push({titulo:'', descripcion:''}); ">
              Agregar item
            </vs-button>
          </template>
        </vs-card>
      </vs-row>
      <vs-button style="margin-top: 25px" @click="agregarSeccion">
        Agregar sección
      </vs-button>

      <vs-button style="margin-top: 25px" @click="guardarTodo">
        Guardar todo
      </vs-button>
  </div>
</template>
<script>
import data from '../data.json'

export default {
  name: 'EmprendimientoAddView',
  data:() => ({
    avatar: '',
    editField : '',
    defaultBack: Math.floor(Math.random() * 9) + 1,
    localidadesData: data.localidades,
    tiposData: data.tipos,
    shop: 
      {
        "titulo":"",
        "descripcion": "",
        "descripcionLarga": "",
        "instagram": "",
        "facebook": "",
        "twitter": "",
        "whastapp": "",
        "url": "",
        "telefono": "",
        "logo": "",
        "back": "",
        "localidad": 0,
        "takeaway": false,
        "onsite": false,
        "delivery": false,
        "tipo": 0,
        "direccion": "",
        "menu": []
      }
    
  }),
  components: {

  },
  props: {

  },
  methods:{
    focusField(name){
      this.editField = name;
    },
    blurField(){
      this.editField = '';
    },
    showField(name, item){
      return (item == '' || this.editField == name)
    },
    agregarSeccion(){
      this.shop.menu.push({titulo:'', descripcion:'', items: []}); 
    },
    guardarTodo(){
      console.log(this.shop);
    }
  },
  computed: {

  }
}
</script>

<style>
.select-localidad-appadd {max-width: 100%!important; width: 100%!important;}
.select-localidad-appadd input, .select-localidad-app .vs-input-content {width: 100%;}
.con-form, .emprendimiento-card, .con-form input, .con-form select {
  width:100%;
}
.emprendimientoadd {
  overflow: auto;
  overflow-x: hidden;
}

</style>