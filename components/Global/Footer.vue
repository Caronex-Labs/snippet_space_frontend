<template>
  <v-footer
    fixed
    app
    padless
    color="secondary"
    class="d-flex align-center justify-center"
  >
    <span class="white--text">{{ new Date().getFullYear() }} - Caronex Labs</span>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
