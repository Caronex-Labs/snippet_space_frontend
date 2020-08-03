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
      <v-app-bar-nav-icon v-if="mode === 'mobile'" dark @click="drawer = !drawer">
      </v-app-bar-nav-icon>
      <template v-else>
        <v-btn color="white" text exact @click="$vuetify.goTo('#banner')">
          <v-icon color="primary" left>mdi-home</v-icon>
          Home
        </v-btn>
        <div style="height: 60%;">
        <v-divider class="mx-3" vertical inset color="white"></v-divider>
        </div>
        <v-btn color="white" text exact @click="$vuetify.goTo('#about-us')">
          <v-icon color="accent" left>mdi-account-group</v-icon>
          About Us
        </v-btn>
        <div style="height: 60%;">
        <v-divider class="mx-3" vertical inset color="white"></v-divider>
        </div>
        <v-btn color="white" text exact @click="$vuetify.goTo('#contribute')">
          <v-icon color="red" left>mdi-heart</v-icon>
          Looking to Contribute?
        </v-btn>
        <div style="height: 60%;">
          <v-divider class="mx-3" vertical inset color="white"></v-divider>
        </div>
        <v-btn color="white" text exact @click="oauthGithub">
          <v-icon left color="white">mdi-github</v-icon>
          Sign In With Github
        </v-btn>
        <div style="height: 60%;">
        <v-divider class="mx-3" vertical inset color="white"></v-divider>
        </div>
        <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark" icon>
          <v-icon color="white">mdi-moon-waning-crescent</v-icon>
        </v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      bottom
      right
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
            <v-list-item-icon>
              <v-icon color="primary">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$vuetify.goTo('#about-us')">
            <v-list-item-icon>
              <v-icon color="accent">mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About Us</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$vuetify.goTo('#contribute')">
            <v-list-item-icon>
              <v-icon color="red">mdi-heart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Looking to Contribute?</v-list-item-title>
          </v-list-item>
          <v-list-item @click="oauthGithub">
            <v-list-item-icon>
              <v-icon :color="$vuetify.theme.dark ? 'white' : 'black'">mdi-github</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sign In With Github</v-list-item-title>
          </v-list-item>
          <v-spacer></v-spacer>
          <v-list-item @click="$vuetify.theme.dark = !$vuetify.theme.dark">
            <v-list-item-icon>
              <v-icon color="secondary">mdi-moon-waning-crescent</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Light Switch</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </v-card>
</template>

<script>

import {mapGetters, mapMutations} from 'vuex';

export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      group: null
    }
  },
  computed: {
    ...mapGetters({
      theme: 'landing/getTheme'
    }),
    mode() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 'mobile';
        case "sm":
          return 'mobile';
        case "md":
          return 'desk';
        case "lg":
          return 'desk';
        case "xl":
          return 'desk';
      }
    }
  },
  methods: {
    oauthGithub() {
      alert("Github Login")
    },
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
