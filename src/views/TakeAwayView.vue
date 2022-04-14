<template>
  <div class="takeaway">
    <vs-card class="card-titulo">
      <template #text>
        <h2>Take Away</h2>
      </template>
    </vs-card>
  </div>
</template>
<script>
export default {
  name: 'TakeAwayView',
  props: {
    active: String,
    activeSidebar: Boolean
  }
}
</script>