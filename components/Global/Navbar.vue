<template>
  <v-card
    tile
    class="mx-auto overflow-hidden"
  >
    <v-app-bar
      elevate-on-scroll
      fixed
      app
      color="bars"
    >
      <v-toolbar-title @click="$vuetify.goTo('#banner')">
        <v-img
          :src="require('assets/Global/logo.svg')"
          height="35"
          width="35"
        >
        </v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon dark @click="drawer = !drawer">

      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      bottom
      temporary
    >
      <v-list
        nav
      >
        <v-list-item-group
          v-model="group"
          active-class="secondary--text text--accent-4"
        >
          <v-list-item @click="$vuetify.goTo('#banner')">
            <v-list-item-icon><v-icon color="primary">mdi-home</v-icon></v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$vuetify.goTo('#about-us')">
            <v-list-item-icon><v-icon color="accent">mdi-account-group</v-icon></v-list-item-icon>
            <v-list-item-title>About Us</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$vuetify.goTo('#contribute')">
            <v-list-item-icon><v-icon color="red">mdi-heart</v-icon></v-list-item-icon>
            <v-list-item-title>Looking to Contribute?</v-list-item-title>
          </v-list-item>
          <v-list-item @click="oauthGithub">
            <v-list-item-icon><v-icon color="black">mdi-github</v-icon></v-list-item-icon>
            <v-list-item-title>Sign In With Github</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </v-card>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      group: null
    }
  },
  methods: {
    oauthGithub() {
      alert("Github Login")
    }
  },
  watch: {
    group() {
      this.drawer = false
    }
  }
}
</script>

<style scoped>

</style>
