<template>
  <div class="delivery">
    <vs-card class="card-titulo">
      <template #text>
        <h2>Delivery</h2>
      </template>
    </vs-card>

    <container>
      <vs-row>
        <vs-card type="3" class="item-shop" v-for="(item, index) in $props.dataShops" :key="index" style="margin-bottom: 15px;">
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
                <i class='mdi mdi-instagram'></i>
              </vs-button>
              <vs-button
                icon
                color="whatsapp"
                v-if="item.whatsapp"
                :href="`https://wa.me/${item.whatsapp}`"
                blank
              >
                <i class='mdi mdi-whatsapp'></i>
              </vs-button>
              <vs-button
                icon
                color="facebook"
                v-if="item.facebook"
                :href="item.facebook"
                blank
              >
                <i class='mdi mdi-facebook'></i>
              </vs-button>
              <vs-button
                icon
                color="twitter"
                v-if="item.twitter"
                :href="item.twitter"
                blank
              >
                <i class='mdi mdi-twitter'></i>
              </vs-button>
              <vs-button
                icon
                v-if="item.telefono"
                :href="item.telefono"
                blank
              >
                <i class='mdi mdi-phone'></i>
              </vs-button>
            </vs-row>
          </template>
        </vs-card>
      </vs-row>
    </container>
  </div>
</template>
<script>
export default {
  name: 'DeliveryView',
  props: {
    dataShops: Array
  }
}
</script>

<style>
.item-shop .vs-card__img {width: 100px;height: 100px;margin-top: 4px;}

.item-shop .vs-card__img img {min-width: 100%!important;}

.item-shop .vs-card {max-width: 100%!important;}

.item-shop {width: 100%;}

.item-shop .vs-card__text {padding: 0 15px!important;width: 100%;}

container {overflow: auto;max-height: calc(100vh - 135px);display: flex; overflow-x: hidden;}
</style>