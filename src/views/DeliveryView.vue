<template>
  <div class="delivery">
    <vs-card class="card-titulo">
      <template #text>
        <h2>Delivery</h2>
      </template>
    </vs-card>

    <LocalidadesList @selectLocalidad="selectLocalidad"/>
    <ListShops :shops="shops"/>
  </div>
</template>
<script>
import ListShops from '@/components/ListShops.vue'
import LocalidadesList from '@/components/LocalidadesList.vue'

export default {
  name: 'DeliveryView',
  data:() => ({
        localidad: []
  }),
  components: {
    ListShops,
    LocalidadesList
  },
  props: {
    dataShops: Array
  },
  methods:{
    selectLocalidad(l){
      this.localidad = l;
    }
  },
  computed: {
    shops(){
      if(this.localidad != ''){
        return this.$props.dataShops.filter((v)=> v.delivery && v.localidad == this.localidad); 
      } else {
        return this.$props.dataShops.filter((v)=> v.delivery); 
      }
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

.container {overflow: auto;max-height: calc(100vh - 180px);display: flex; overflow-x: hidden;margin-top: 10px;}
</style>