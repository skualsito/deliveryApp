<template>
  <div class="home">

    <vs-row>
      <vs-card class="card-titulo">
        <template #text>
          <h2>Home</h2>
        </template>
      </vs-card>
    </vs-row>

    <vs-row style="padding-left: 15px;">
      <vs-col w="5">
       <vs-card class="botonete-app delivery" @click="$router.push('/delivery')">
          <template #text>
            <h3>Delivery</h3>
          </template>
          <template #img>
            <i class='mdi mdi-moped'></i>
          </template>
        </vs-card>
      </vs-col>

      <vs-col w="5" offset="1">
       <vs-card class="botonete-app takeaway" @click="$router.push('/takeaway')">
          <template #text>
            <h3>Take Away</h3>
          </template>
          <template #img>
            <i class='mdi mdi-basket'></i>
          </template>
        </vs-card>
      </vs-col>

      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="11">
       <vs-card class="botonete-app dondecomer" @click="$router.push('/dondecomer')">
          <template #text>
            <h3>¿Dónde comer?</h3>
          </template>
          <template #img>
            <i class='mdi mdi-store-marker'></i>
          </template>
        </vs-card>
      </vs-col>

    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style>
  .botonete-app {
    text-align: center;
  }
  .botonete-app .vs-card {
    max-width: 100%;
  }
  .botonete-app.delivery .vs-card {
    background: #feeab1;
  }
  .botonete-app .vs-card__img i {
    font-size: 35px;
    margin-top: 15px;
  }
  .botonete-app.delivery .vs-card__text, .botonete-app.delivery .vs-card__img i {
    color: #efb306;
  }

  .botonete-app.takeaway .vs-card {
    background: #d6ebfb;
  }

  .botonete-app.dondecomer .vs-card {
    background: #fcd4de;
  }

  .botonete-app.dondecomer .vs-card__text, .botonete-app.dondecomer .vs-card__img i {
    color: #d37a90;
  }

  .botonete-app .vs-card__text {
    padding-left: 9px;
    padding-right: 9px;
  }

  .botonete-app.dondecomer {
    margin-top: 25px;
  }

      
</style>