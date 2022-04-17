<template>
  <div class="emprendimientoadd con-form">
    <vs-row>
      <vs-card class="shop-app emprendimiento-card">
        <template #title>
          <vs-avatar primary circle>
            <img :src="require(`@/assets/imgs/historia/avatar.jpg`)" alt="Avatar" v-if="avatar">
            <i class='bx bx-user' v-if="!avatar"></i>
          </vs-avatar>
          <h3 style="text-align:center" v-show="!showField('name', user.name)" @click="focusField('name')">{{user.name}}</h3>
          <vs-input v-model="user.name" placeholder="Nombre" v-show="showField('name', user.name)" type="text" class="field-value form-control" @focus="focusField('name')" @blur="blurField"/>
        </template>
        <template #img>
          <img :src="require(`@/assets/defaults/Abstract-Gradient-${defaultBack}.png`)" alt="Back">
        </template>

        <template #text>
          <p></p>
        </template>
      </vs-card>
    </vs-row>
    
    <vs-row>
      <vs-card type="3" class="item-shop menu-container" v-for="(item, index) in shop" :key="index" style="margin-bottom: 15px;">
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


export default {
  name: 'EmprendimientoAddView',
  data:() => ({
    avatar: '',
    user : {
        name: '',
        email: ''
    },
    editField : '',
    defaultBack: Math.floor(Math.random() * 9) + 1,
    shop: [

    ]
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
      this.shop.push({titulo:'', descripcion:'', items: []}); 
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
.con-form, .emprendimiento-card, .con-form input {
  width:100%;
}
.con-form input {
  margin-bottom: 10px;
}
.emprendimientoadd {
  overflow: auto;
  overflow-x: none;
}

</style>