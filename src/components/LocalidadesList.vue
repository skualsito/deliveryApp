<template>
<vs-row>
  <vs-select
    placeholder="Seleccione una localidad"
    v-model="localidad"
    class="select-localidad-app"
    @change="$emit('selectLocalidad', localidad)"
  >
    <vs-option :label="item.localidad" :value="item.id" v-for="(item) in localidadesData" :key="item.id" >
      {{item.localidad}}
    </vs-option>
  </vs-select>
  <vs-button @click="localidad = ''" :disabled="localidad == ''" color="danger">
    <i class='bx bx-x'></i>
  </vs-button>
</vs-row>
</template>

<script>
import data from '../data.json'
export default {
  name: 'LocalidadesList',
  data:() => ({
        localidad:"",
        localidadesData: data.localidades.reverse()
  })
}
</script>
<style>
.select-localidad-app {max-width: 100%!important; width: calc(100% - 50px)!important;}
.select-localidad-app input, .select-localidad-app .vs-input-content {width: 100%;}
</style>