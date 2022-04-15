<template>
  <div class="historia" style="overflow:auto">
    <vs-row>
      <vs-card class="shop-app">
        <template #title>
          <vs-avatar circle>
            <img :src="require(`@/assets/imgs/historia/avatar.jpg`)" alt="Avatar">
          </vs-avatar>
          <h3>Historia</h3>
        </template>
        <template #img>
          <img :src="require(`@/assets/imgs/historia/back.jpg`)" alt="Back">
        </template>
        <template #interactions>
              <vs-button
                icon
                color="dribbble"
                href="https://www.instagram.com/juanalmadaa/"
                blank
              >
                <i class='bx bxl-instagram'></i>
              </vs-button>
              <vs-button
                icon
                color="twitter"
                href="https://twitter.com/JuanAlmadaa"
                blank
              >
                <i class='bx bxl-twitter'></i>
              </vs-button>
        </template>
        <template #text>
          <p class="shop-desc">"Yendo no, llegando" es una webapp(poco seria, claramente) que nace por la falta de aplicaciones líderes(Pedidos Ya, Rappi, etc) en <strong>La Costa</strong>.<br>Está creada únicamente para informar sobre comercios / emprendimientos / etc que tengan delivery, take away u <i>"on site"</i>.</p>
          <h3>¿Qué significa esto?</h3>
          <p class="shop-desc">No solo los comercios pueden estar en este listado, si tenes un emprendimiento que hace delivery de <i>"chipá"</i> (<a href="https://www.instagram.com/gourmetchipa" target="_blank">@gourmetchipa</a>) o, también, haces <i>"uñas"</i> (<a href="https://www.instagram.com/sagradafamilianails" target="_blank">@sagradafamilianails</a>) o cualquier otro ejemplo que se te ocurra.<br><strong>Todos están invitados a estar</strong>.
          </p>
          <h3>¿Por qué una web y no una APP?</h3>
          <p class="shop-desc">Únicamente por costos, para poder publicar una APP en la "App Store" de Apple necesito tener una cuenta de desarrollador registrada en Apple, para poder tenerla tengo que pagar 100USD/anual y en la "Play Store" de Google lo mismo, pero por suerte es más barata y piden 25USD<br><br>Si te interesa que esto se vuelva una APP, te cuento, creé una cuenta en "cafecito" y también por si queres donar por mi trabajo 😄
          </p>
          <a href='https://cafecito.app/juanalmadaa' rel='noopener' target='_blank' ><img srcset='https://cdn.cafecito.app/imgs/buttons/button_5.png 1x, https://cdn.cafecito.app/imgs/buttons/button_5_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_5_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_5.png' alt='Invitame un café en cafecito.app' style="margin-top:10px" /></a>
          <h3>Quiero estar en la web ¿Dónde me registro?</h3>
          <p class="shop-desc">Por el momento no hay registro de ningún tipo, tengo pensado muchas actualizaciones más adelante para que la APP se pueda autoabastecer pero por el momento estoy cargando todos a mano.<br>Podes enviarme por <a href="https://www.instagram.com/juanalmadaa/" target="_blank">Instagram</a>, <a href="https://twitter.com/JuanAlmadaa" target="_blank">Twitter</a> o <a href="mailto:juanalmadaa@gmail.com" target="_blank">Mail</a> para poder estar en el listado.<br>Si tenes un listado detallado de los productos que quieras que aparezcan, por favor, enviarlo en forma digital para poder hacerlo más rápido.<br><br>Tener en cuenta que esto lo estoy armando completamente solo y es un trabajo enorme, puede que tarden en aparecer los nuevos, paciencia.</p>
          <h3>¿De dónde salió el nombre? ¿Tiene algo que ver con "EL NOBA"?</h3>
          <p class="shop-desc">El nombre lo eligió una encuesta de instagram, y no, no tiene nada que ver con EL NOBA(aunque un poco si), solo fue una frase pegadiza que terminó nombrando a esta webapp</p>
        </template>
      </vs-card>
    </vs-row>


  </div>
</template>

<script>
export default {
  name: 'HistoriaView',
}
</script>

