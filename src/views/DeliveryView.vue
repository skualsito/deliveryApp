<template>
  <div class="delivery">
    <vs-card class="card-titulo">
      <template #text>
        <h2>Delivery</h2>
      </template>
    </vs-card>

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
      </vs-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DeliveryView',
  props: {
    dataShops: Array
  },
  computed: {
    shops(){
      return this.$props.dataShops.filter((v)=> v.delivery); 
    }
  }
}
</script>

<style>
.item-shop .vs-card__img {width: 100px;height: 100px;margin-top: 4px;}

.item-shop .vs-card__img img {min-width: 100%!important;}

.item-shop .vs-card {max-width: 100%!important;}

.item-shop {width: 100%;}

.item-shop .vs-card__text {padding: 0 15px!important;width: 100%;}

.container {overflow: auto;max-height: calc(100vh - 135px);display: flex; overflow-x: hidden;}
</style>