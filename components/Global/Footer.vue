<template>
  <v-footer
    fixed
    app
    padless
    color="bars"
    class="d-flex align-center justify-center"
    style="box-shadow: #0F161D  16px 16px 16px 16px"
  >
    <span style="cursor: pointer" @click="openCaronexLabs" class="white--text">{{ new Date().getFullYear() }} - Caronex Labs</span>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    openCaronexLabs() {
      window.open('https://www.caronexlabs.com')
    }
  }
}
</script>

<style scoped>

</style>
