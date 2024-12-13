<template>
  <div class="emprendimientos">
    <vs-card class="card-titulo">
      <template #text>
        <h2>Emprendimientos</h2>
        <vs-button @click="$router.push({path:`/emprendimientosAdd`}).catch(()=>{})" style="margin: 0">
          Agregar nuevo
        </vs-button>
      </template>
    </vs-card>
      <vs-table striped>
        <template #thead>
          <vs-tr>
            <vs-th>
              ID
            </vs-th>
            <vs-th>
              Nombre
            </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="i"
            v-for="(tr, i) in $vs.getPage(users, page, max)"
            :data="tr"
          >
            <vs-td>
              {{ tr.id }}
            </vs-td>
            <vs-td>
            {{ tr.titulo }}
            </vs-td>
          </vs-tr>
        </template>
        <template #footer>
          <vs-pagination v-model="page" :length="$vs.getLength(users, max)" />
        </template>
      </vs-table>

  </div>
</template>
<script>

import data from '../data.json'
export default {
  name: 'EmprendimientosView',
  data:() => ({
        page: 1,
        max: 8,
        users: data.shops
      }),
  components: {

  },
  props: {

  },
  methods:{
   
  },
  computed: {

  }
}
</script>

<style>
.vs-table table{
  min-width: 0px!important;
}
</style>