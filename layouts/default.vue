<template>
  <v-app>
    <v-main>
      <v-container>
        <nuxt/>
      </v-container>
    </v-main>

    <Footer/>

  </v-app>
</template>

<script>
import Footer from "~/components/Global/Footer";

export default {
  components: {Footer},
  data() {
    return {}
  }
}
</script>
