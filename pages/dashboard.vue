<template>
  <v-container style="height: 97.5vh" class="ma-0 pa-0" fluid>
    <v-row style="height: 100%">
      <Sidebar @gistSelect="handleGistSelect"/>

      <EmptyDisplay v-if="selectedGist === null"/>

      <v-col cols="9" v-else>
        <v-container>
          <v-card>
            <v-card-title>
              {{ selectedGist.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ selectedGist.description }}
            </v-card-subtitle>
            <v-card-text>
              <v-chip-group>
                <v-chip v-for="lang in selectedGist.languages" :key="lang">{{ lang }}</v-chip>
              </v-chip-group>
              <v-divider></v-divider>
                            <template v-for="file in selectedGist.files">
                              {{file.filename}}
                              <VueEmbedGist
                                :gist-id="selectedGist.id"
                                :file="file.filename"
                              />
                              <v-divider inset></v-divider>
                            </template>

            </v-card-text>
          </v-card>
        </v-container>
      </v-col>

    </v-row>

  </v-container>
</template>

<script>
import Sidebar from "@/components/Global/Sidebar";
import EmptyDisplay from "@/components/Dashboard/EmptyDisplay";
import VueEmbedGist from 'vue-embed-gist'

export default {
  name: "dashboard",
  components: {EmptyDisplay, Sidebar, VueEmbedGist},
  data() {
    return {
      selectedGist: null
    }
  },
  methods: {
    handleGistSelect(gist) {
      this.selectedGist = gist
    }
  }
}
</script>

<style scoped>
@import url("https://github.githubassets.com/assets/gist-embed-4ac6018bcc05457cde2f66d2e7299d11.css");
</style>
