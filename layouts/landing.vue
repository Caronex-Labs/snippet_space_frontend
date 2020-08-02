<template>
<v-app>
  <Navbar/>
  <v-main>
    <v-container class="my-0 py-0" fluid>
      <nuxt/>
    </v-container>
  </v-main>
  <Footer/>
</v-app>
</template>

<script>
import Navbar from '~/components/Global/Navbar'
import Footer from '~/components/Global/Footer'

export default {
  name: "landing",
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>

</style>
