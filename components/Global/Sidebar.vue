<template>
  <v-col class="pa-0 ma-0" cols="3">
    <v-card
      tile
      class="mx-auto overflow-hidden"
      v-if="mode==='mobile'"
    >
      <v-bottom-navigation
        app
        dark
        fixed
      >
        <v-btn class="px-0">

          <v-avatar height="32" v-if="$fireAuth.currentUser !== null" class="d-flex align-center justify-center">
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

        <v-btn large icon>
          <v-icon color="accent">mdi-plus</v-icon>
        </v-btn>

        <v-btn large icon>
          <v-icon color="primary">mdi-home</v-icon>
        </v-btn>

        <v-btn large icon>
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
            class="mb-10"
          >
          </v-img>
          <template v-slot:extension>
            <v-tabs centered grow v-model="tab">
              <v-tab style="font-size: 0.8rem; width: 33%" key="projects">
                Projects
              </v-tab>
              <v-tab style="font-size: 0.8rem; width: 33%" key="frameworks">
                Frameworks
              </v-tab>
              <v-tab style="font-size: 0.8rem; width: 33%" key="search">
                Search
              </v-tab>
            </v-tabs>
          </template>

          <v-toolbar-items>
            <v-tabs-items v-model="tab">
              <v-tab-item key="projects">
                No Projects Yet
              </v-tab-item>
              <v-tab-item key="frameworks">
                No Frameworks Yet
              </v-tab-item>
              <v-tab-item key="search">
                <v-list three-line>
                  <v-list-item
                    v-for="gist in gists"
                    :key="gist.id"
                  >
                    <v-list-item-content>
                      <v-list-item-title>{{ gist.title }}</v-list-item-title>
                      <v-list-item-subtitle>{{ gist.description }}</v-list-item-subtitle>
                      <v-list-item-subtitle>
                        <v-chip-group>
                          <v-chip v-for="lang in gist.languages" :key="lang">{{ lang }}</v-chip>
                        </v-chip-group>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-tab-item>
            </v-tabs-items>
          </v-toolbar-items>

        </v-toolbar>
      </v-navigation-drawer>
    </v-card>
    <v-navigation-drawer
      permanent
      right
      width="100%"
      dark
      v-else
      class="d-flex"
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

        <v-col v-if="mini" class="fill-width">
          <v-img
            :src="require('assets/Global/LogoWithText.svg')"
            contain
            max-height="100"
            width="100%"
          >
          </v-img>
          <v-tabs centered grow v-model="tab">
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
          <v-tabs-items dark v-model="tab">
            <v-tab-item key="projects">
              No Projects Yet
            </v-tab-item>
            <v-tab-item key="frameworks">
              No Frameworks Yet
            </v-tab-item>
            <v-tab-item key="search">
              <v-card
                class="overflow-y-auto"
                max-height="84vh"
              >
                    <v-list-item
                      v-for="item in gists"
                      :key="item.id"
                      three-line
                      ripple
                      hover
                      style="cursor: pointer"
                      @click="$emit('gistSelect', item)"
                    >
                      <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
                        <v-list-item-subtitle>
                          <v-chip-group>
                            <v-chip v-for="lang in item.languages" :key="lang">{{ lang }}</v-chip>
                          </v-chip-group>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
              </v-card>
            </v-tab-item>
          </v-tabs-items>

        </v-col>
      </v-row>
    </v-navigation-drawer>
  </v-col>

</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "Sidebar",
  data() {
    return {
      mini: true,
      mobileDrawer: false,
      tab: 0
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
    ...mapGetters({
      gists: 'gists/getGists'
    })
  }

}
</script>

<style scoped>

</style>
