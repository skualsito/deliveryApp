<template>
 <div class="container">
  <vs-row>
    <vs-card type="3" class="item-shop" v-for="(item, index) in shops" :key="index" style="margin-bottom: 15px;" @click="$router.push({path:`/shop/${item.id}`})">
      <template #title>
        <h3>{{item.titulo}}</h3>
      </template>
      <template #img>
        <img :src="require(`@/assets/imgs/${item.logo}`)" alt="Logo">
      </template>
      <template #text>
        <p>
          {{item.descripcion}}
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
  </vs-row>
  
</div>
</template>

<script>
export default {
  name: 'ListShops',
  props: {
    shops: Array
  }
}
</script>
