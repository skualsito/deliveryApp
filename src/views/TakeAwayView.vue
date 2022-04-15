<template>
  <div class="takeaway">
    <vs-card class="card-titulo">
      <template #text>
        <h2>Take Away</h2>
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
  name: 'TakeAwayView',
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
        return this.$props.dataShops.filter((v)=> v.takeaway && v.localidad == this.localidad); 
      } else {
        return this.$props.dataShops.filter((v)=> v.takeaway); 
      }
    }
  }
}
</script>