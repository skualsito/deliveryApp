<template>
  <div class="shop" style="overflow: auto">
      <vs-card class="shop-app">
        <template #title>
          <vs-avatar circle>
            <img :src="require(`@/assets/imgs/${shop.logo}`)" alt="">
          </vs-avatar>
          <h3>{{shop.titulo}}</h3>
        </template>
        <template #img>
          <img :src="require(`@/assets/imgs/${shop.back}`)" alt="Back">
        </template>
        <template #text>
          <p class="shop-desc">{{shop.descripcionLarga}}</p>
          <vs-row justify="flex-end">
              <vs-button
                icon
                color="dribbble"
                v-if="shop.instagram"
                :href="`https://www.instagram.com/${shop.instagram}`"
                blank
              >
                <i class='bx bxl-instagram'></i>
              </vs-button>
              <vs-button
                icon
                color="whatsapp"
                v-if="shop.whatsapp"
                :href="`https://wa.me/${shop.whatsapp}`"
                blank
              >
                <i class='bx bxl-whatsapp'></i>
              </vs-button>
              <vs-button
                icon
                color="facebook"
                v-if="shop.facebook"
                :href="shop.facebook"
                blank
              >
                <i class='bx bxl-facebook' ></i>
              </vs-button>
              <vs-button
                icon
                color="twitter"
                v-if="shop.twitter"
                :href="shop.twitter"
                blank
              >
                <i class='bx bxl-twitter'></i>
              </vs-button>
              <vs-button
                icon
                v-if="shop.telefono"
                :href="`tel:${shop.telefono}`"
                blank
              >
                <i class='bx bxs-phone' ></i>
              </vs-button>
              <vs-button
                icon
                v-if="shop.url"
                :href="shop.url"
                blank
              >
                <i class='bx bx-link' ></i>
              </vs-button>

              
            </vs-row>
        </template>
      </vs-card>
      
      <vs-row>
        <vs-card type="3" class="item-shop menu-container" v-for="(item, index) in shop.menu" :key="index" style="margin-bottom: 15px;">
          <template #title>
            <h3>{{item.titulo}}</h3>
          </template>
          <template #text>
            <p>
              {{item.descripcion}}
            </p>
            <vs-row>
              <vs-card type="3" class="item-shop menu" v-for="(item, index) in item.items" :key="index">
                <template #title>
                  <h5>{{item.titulo}}</h5>
                </template>
                <template #text>
                  <p>
                    {{item.descripcion}}
                  </p>
                </template>
              </vs-card>
            </vs-row>
          </template>
        </vs-card>
      </vs-row>

  </div>
</template>
<script>
export default {
  name: 'ShopView',
  props: {
    dataShops: Array
  },
  computed: {
    shop(){
      return this.$props.dataShops.filter((v)=> v.id == this.$route.params.id)[0]; 
    }
  }
  
}
</script>
<style>

.shop-app .vs-card {margin: 0;max-width: 100%;}

.shop-app .vs-avatar-content {position: absolute;top: -50px;left: calc(50% - 50px);width: 100px;height: 100px;}

.shop-app .vs-card__text {position: relative;padding-top: 50px;}

.shop {overflow: auto;max-height: calc(100vh - 55px); overflow-x: hidden;}

.item-shop.menu h5 { font-size: 0.8rem; }

.item-shop.menu p { font-size: 0.7rem; }

.item-shop.menu .vs-card {
    box-shadow: none;
}

.item-shop.menu-container .vs-card__text {
    padding: 15px!important;
}
.item-shop.menu .vs-card__text {
    padding: 0 15px!important;
}

.shop-desc {
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -o-pre-wrap;
}
</style>