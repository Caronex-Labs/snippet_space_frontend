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
              <!--              <template v-for="file in selectedGist.files">-->
              <!--                {{file.filename}}-->
              <!--                <script :src="file.raw_url"></script>-->
              <!--                <v-divider inset></v-divider>-->
              <!--              </template>-->
                <GistEmbed :url="selectedGist.html_url"/>
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
import GistEmbed from "@/components/Dashboard/GistEmbed";

export default {
  name: "dashboard",
  components: {GistEmbed, EmptyDisplay, Sidebar},
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

</style>
