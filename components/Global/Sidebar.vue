<template>
  <v-navigation-drawer
    permanent
    right
    width="23%"
    dark
    v-if="mode==='desk'"
  >
    <v-row class="fill-height" no-gutters>
      <v-navigation-drawer
        dark
        mini-variant
        mini-variant-width="56"
        permanent
        expand-on-hover
        :mini-variant.sync="mini"
        color="secondary"
      >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img :src="$fireAuth.currentUser.photoURL"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>{{ $fireAuth.currentUser.displayName }}</v-list-item-title>

        </v-list-item>
        <v-divider></v-divider>

        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-icon color="accent">mdi-plus</v-icon>
          </v-list-item-avatar>

          <v-list-item-title>Add Snippet</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>

        <v-list
          dense
          nav
        >
          <v-list-item>
            <v-list-item-action>
              <v-icon color="primary">mdi-home</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-icon color="red">mdi-logout</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Log Out</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list>


      </v-navigation-drawer>


      <v-toolbar v-if="mini" flat height="100%" extension-height="60" class="fill-width">
        <v-img
          :src="require('assets/Global/LogoWithText.svg')"
          contain
          max-height="100"
          width="100%"
        >
        </v-img>
        <template v-slot:extension>
          <v-tabs centered grow>
            <v-tab style="font-size: 0.8rem; width: 33%">
              Projects
            </v-tab>
            <v-tab style="font-size: 0.8rem; width: 33%">
              Frameworks
            </v-tab>
            <v-tab style="font-size: 0.8rem; width: 33%">
              Search
            </v-tab>
          </v-tabs>
        </template>
        <v-toolbar-items>
          <v-tabs-items></v-tabs-items>
        </v-toolbar-items>
      </v-toolbar>


    </v-row>
  </v-navigation-drawer>
  <v-card
    tile
    class="mx-auto overflow-hidden"
    v-else
  >
    <v-bottom-navigation
      app
      dark
      fixed
    >
        <v-btn class="px-0">

          <v-avatar v-if="$fireAuth.currentUser !== null"  class="d-flex align-center justify-center">
            <v-img contain class="fill-width align-self-center" :src="$fireAuth.currentUser.photoURL"></v-img>
          </v-avatar>

          <template v-else>
            Loading ...
          </template>

        </v-btn>
        <v-divider vertical></v-divider>
      <v-btn @click="mobileDrawer = !mobileDrawer">
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn icon >
        <v-icon color="accent">mdi-plus</v-icon>
      </v-btn>

      <v-btn icon >
        <v-icon color="primary">mdi-home</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="red">mdi-logout</v-icon>
      </v-btn>

    </v-bottom-navigation>

    <v-navigation-drawer
      v-model="mobileDrawer"
      app
      bottom
      temporary
      dark
    >
      <v-toolbar flat height="100%" extension-height="60" class="fill-width">
        <v-img
          :src="require('assets/Global/LogoWithText.svg')"
          contain
          max-height="100"
          width="100%"
        >
        </v-img>
        <template v-slot:extension>
          <v-tabs centered grow>
            <v-tab style="font-size: 0.8rem; width: 33%">
              Projects
            </v-tab>
            <v-tab style="font-size: 0.8rem; width: 33%">
              Frameworks
            </v-tab>
            <v-tab style="font-size: 0.8rem; width: 33%">
              Search
            </v-tab>
          </v-tabs>
        </template>
        <v-toolbar-items>
          <v-tabs-items></v-tabs-items>
        </v-toolbar-items>
      </v-toolbar>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      mini: true,
      mobileDrawer: false
    }
  },
  computed: {
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
  }

}
</script>

<style scoped>

</style>
