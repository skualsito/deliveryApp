<template>
  <div class="delivery">
    <vs-card class="card-titulo">
      <template #text>
        <h2>Busqueda: {{$route.params.search}}</h2>
      </template>
    </vs-card>

    <ListShops :shops="shops"/>
  </div>
</template>
<script>
import ListShops from '@/components/ListShops.vue'
export default {
  name: 'DeliveryView',
  components: {
    ListShops
  },
  props: {
    dataShops: Array
  },
  data:() => ({
        shops: []
  }),
  beforeMount(){
    this.search();
  },
  methods: {
    search(){
      var results = [];
      let toSearch = this.trimString(this.$route.params.search);
      toSearch = toSearch.toLowerCase();
      if(toSearch != ''){
        for(const element of this.$props.dataShops) {
          for(var key in element) {
            if (typeof element[key] === 'string' || element[key] instanceof String){
              if(element[key].toLowerCase().indexOf(toSearch)!=-1) {
                if(!this.itemExists(results, element)) results.push(element);
              }
            } else if(Array.isArray(element[key])){
              for(const element2 of element[key]) {
                for(var key2 in element2) {
                  if (typeof element2[key2] === 'string' || element2[key2] instanceof String){
                    if(element2[key2].toLowerCase().indexOf(toSearch)!=-1) {
                      if(!this.itemExists(results, element)) results.push(element);
                    }
                  }
                }
              }
            }
          }
        }
      }
      this.shops = results;
    },
    trimString(s) {
      var l=0, r=s.length -1;
      while(l < s.length && s[l] == ' ') l++;
      while(r > l && s[r] == ' ') r-=1;
      return s.substring(l, r+1);
    },
    compareObjects(o1, o2) {
      var k = '';
      for(k in o1) if(o1[k] != o2[k]) return false;
      for(k in o2) if(o1[k] != o2[k]) return false;
      return true;
    },
    itemExists(haystack, needle) {
      for(const element of haystack) if(this.compareObjects(element, needle)) return true;
      return false;
    }
  },
  watch:{
    $route(){
      this.search();
    }
  }
}
</script>
