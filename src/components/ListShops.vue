<template>
 <div class="container">
   <vs-row>
    <vs-col w="12" v-for="(itemTipos, index) in tipos" :key="index">
        <h3 style="margin-left: 10px">{{itemTipos.tipo}}</h3>
        <vs-card type="3" class="item-shop" v-for="(item, index) in shops.filter((shop)=> shop.tipo == itemTipos.id)" :key="index" style="margin-bottom: 15px;">
          <template #title>
            <h3 @click="$router.push({path:`/shop/${item.id}`})">{{item.titulo}}</h3>
          </template>
          <template #img>
            <img :src="require(`@/assets/imgs/${item.logo}`)" alt="Logo" @click="$router.push({path:`/shop/${item.id}`})">
          </template>
          <template #text>
            <p>
              {{item.descripcion}}
            </p>
            <p v-if="item.direccion" class="link-direccion">
              <i class='bx bxs-map'></i> <a :href="(item.direccionLink) ? item.direccionLink : '#' ">{{item.direccion}}</a>
            </p>
            <vs-row justify="flex-end">
              <vs-button
                icon
                color="dribbble"
                v-if="item.instagram"
                :href="`https://www.instagram.com/${item.instagram}`"
                blank
              >
                <i class='bx bxl-instagram'></i>
              </vs-button>
              <vs-button
                icon
                color="whatsapp"
                v-if="item.whatsapp"
                :href="`https://wa.me/${item.whatsapp}`"
                blank
              >
                <i class='bx bxl-whatsapp'></i>
              </vs-button>
              <vs-button
                icon
                color="facebook"
                v-if="item.facebook"
                :href="item.facebook"
                blank
              >
                <i class='bx bxl-facebook' ></i>
              </vs-button>
              <vs-button
                icon
                color="twitter"
                v-if="item.twitter"
                :href="item.twitter"
                blank
              >
                <i class='bx bxl-twitter'></i>
              </vs-button>
              <vs-button
                icon
                v-if="item.telefono"
                :href="`tel:${item.telefono}`"
                blank
              >
                <i class='bx bxs-phone' ></i>
              </vs-button>
              <vs-button
                icon
                v-if="item.url"
                :href="item.url"
                blank
              >
                <i class='bx bx-link' ></i>
              </vs-button>

              
            </vs-row>
          </template>
        </vs-card>
        <vs-card  v-if="shops.length <= 0" style="width: 100%">
          <template #text>
            <h3 style="text-align: center">No se encuentran datos disponibles</h3>
          </template>
        </vs-card> 
    </vs-col>
  </vs-row>
    
  
</div>
</template>

<script>
import data from '../data.json'
export default {
  name: 'ListShops',
  data:() => ({
        tipos: data.tipos
  }),
  props: {
    shops: Array
  }
}
</script>

<style>
.link-direccion a {
  text-decoration: none;
  color: #000;
}
</style>