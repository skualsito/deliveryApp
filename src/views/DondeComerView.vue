<template>
  <div class="dondecomer">
    <vs-card class="card-titulo">
      <template #text>
        <h2>On Site</h2>
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
  name: 'DondeComerView',
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
        return this.$props.dataShops.filter((v)=> v.onsite && v.localidad == this.localidad); 
      } else {
        return this.$props.dataShops.filter((v)=> v.onsite); 
      }
    }
  }
}
</script>