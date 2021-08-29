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
      <v-toolbar-title style="cursor: pointer" @click="$vuetify.goTo('#banner')">
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
        <div v-if="userLoggedIn">

          <v-menu
            bottom
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" color="white" text exact>
                <v-icon left>mdi-account</v-icon>
                {{ $fireAuth.currentUser !== null ? $fireAuth.currentUser.displayName : "Loading..." }}

              </v-btn>
            </template>

            <v-list>
              <v-list-item
                @click="$router.push('dashboard')"
              >
                <v-list-item-title>
                  <v-icon left color="secondary">mdi-view-dashboard-outline</v-icon>
                  Dashboard
                </v-list-item-title>
              </v-list-item>
              <v-list-item
                @click="userLogout"
              >
                <v-list-item-title>
                  <v-icon left color="red">mdi-logout</v-icon>
                  Log Out
                </v-list-item-title>
              </v-list-item>
            </v-list>

          </v-menu>
        </div>
        <v-btn v-else color="white" text exact @click="loginUser">
          <v-icon left color="white">mdi-github</v-icon>
          Sign In With Github
        </v-btn>
        <div style="height: 60%;">
          <v-divider class="mx-3" vertical inset color="white"></v-divider>
        </div>
        <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark" icon>
          <v-icon v-if="!$vuetify.theme.dark" color="white">mdi-moon-waning-crescent</v-icon>
          <v-icon v-else color="white">mdi-weather-sunny</v-icon>
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
          <v-list-group
            v-if="userLoggedIn"
            prepend-icon="mdi-account"
            no-action
            @click="subDrawer=true"
          >
            <template v-slot:activator>
              <v-list-item-title>
                {{ $fireAuth.currentUser !== null ? $fireAuth.currentUser.displayName : "Loading..." }}
              </v-list-item-title>
            </template>

            <v-list-item
              @click="$router.push('dashboard')"
              link
            >
              <v-list-item-action>
                <v-icon left color="secondary">mdi-view-dashboard-outline</v-icon>
              </v-list-item-action>
              <v-list-item-title>
                Dashboard
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              @click="userLogout"
            >
              <v-list-item-action>
                <v-icon left color="red">mdi-logout</v-icon>
              </v-list-item-action>
              <v-list-item-title>
                Log Out
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else @click="loginUser">

            <v-list-item-icon>
              <v-icon :color="$vuetify.theme.dark ? 'white' : 'black'">mdi-github</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sign In With Github</v-list-item-title>
          </v-list-item>
          <v-spacer></v-spacer>
          <v-list-item @click="$vuetify.theme.dark = !$vuetify.theme.dark">
            <v-list-item-icon>
              <v-icon v-if="!$vuetify.theme.dark" color="white">mdi-moon-waning-crescent</v-icon>
              <v-icon v-else color="white">mdi-weather-sunny</v-icon>
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
      group: null,
      userMenu: false,
      subDrawer: false
    }
  },
  computed: {
    ...mapGetters({
      theme: 'landing/getTheme',
      userLoggedIn: 'user/getUserLoggedIn',
      logInProcessing: 'user/getLogInProcessing'
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
    },
  },
  methods: {
    async loginUser() {
      let provider = new this.$fireAuthObj.GithubAuthProvider();
      provider.addScope('read:user');
      provider.addScope('gist');
      try {
        let result;
        await this.$store.commit('user/setLogInProcessing', true)
        result = await this.$fireAuth.signInWithPopup(provider)
        let token = result.credential;
        let user = result.user;
        await this.$fireAuth.currentUser.reload()
        console.log(user)
      } catch (e) {
        let errorCode = e.code;
        let errorMessage = e.message;
        let email = e.email;
        let credential = e.credential;
        if (errorCode === 'auth/account-exists-with-different-credential') {
          alert('You have signed up with a different provider for that email.');
        } else {
          console.error(e);
        }
      }
      // window.location.reload();
    },
    async userLogout() {
      await this.$fireAuth.signOut();
    },
  },
  watch: {
    group() {
      if (this.subDrawer === false) {
        this.drawer = false
      } else {
        this.subDrawer = false
      }
    }
  }
}
</script>

<style scoped>

</style>
