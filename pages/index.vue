<template>
  <v-container class="ma-0 pa-0" fluid>
    <!--   Landing Page 1  -->
    <v-row
      height="90vh"
      id="banner"
      style="background-color: #FFFBFE"
    >

      <!--   Illustration   -->
      <v-col class="mx-0 px-0" style="height: fit-content" cols="12">
        <v-img
          :src="require('assets/Landing/mobile-banner.svg')"
          width="100%"
          height="auto"
        >
        </v-img>
      </v-col>


      <v-col cols="12">

        <!-- Quote Text  -->

        <v-row>
          <v-col>
            <p class="font-weight-bold font-italic text-center" style="font-size: 1.5rem; line-height: 2.438rem;">
              <span class="accent--text">"</span>
              <span
                class="secondary--text">Good programmers write code. <br>Great ones try not to.</span>
              <span class="accent--text">"</span>
            </p>
          </v-col>
        </v-row>

        <!--   Call to action   -->

        <v-row>
          <v-col class="d-flex align-center justify-center">
            <span class="secondary--text font-italic font-weight-light" style="font-size: 1.5rem; line-height: 2.25rem">And we're here to help.</span>
          </v-col>
        </v-row>

        <v-row class="my-6">
          <v-col class="d-flex flex-column align-center justify-center">
            <v-btn dark class="primary--text">
              Sign Up with Github
              <v-icon right>
                mdi-github
              </v-icon>
            </v-btn>
            <span class="secondary--text text-overline">Free. Forever.</span>
          </v-col>
        </v-row>

        <!--   Scroll prompt   -->

        <v-row class="mt-10 my-5">
          <v-col class="d-flex align-center justify-center">
              <v-avatar
                tile
                height="contain"
                @click="$vuetify.goTo('#about-us')"
              >
                <v-img
                  :src="require('assets/Landing/scroll-prompt.svg')"
                >
                </v-img>
              </v-avatar>
          </v-col>
        </v-row>
      </v-col>


    </v-row>

    <v-row style="height: 93vh; background-color: #FFFBFE" id="about-us">
      <v-col style="height: fit-content">
        <v-img
          :src="require('assets/Landing/circle-logo.svg')"
          class="mt-8"
          height="360"
          width="381.05"
        >
        </v-img>
      </v-col>

      <v-col class="d-flex flex-column align-center mb-10">
        <span class="secondary--text text-center mb-7" style="font-size: 1.5rem; line-height: 2.25rem">We Collect Your Best Codes.</span>
        <v-spacer></v-spacer>
        <span class="accent--text text-center" style="font-size: 1.2rem; line-height: 2.25rem">By Syncing With Your Github Gists Automatically.</span>
        <v-spacer></v-spacer>
        <span class="accent--text text-center" style="font-size: 1.2rem; line-height: 2.25rem">And Help You Organize, Tag and Manage Them.</span>
        <v-spacer></v-spacer>
      </v-col>
    </v-row>

    <v-row style="height: 93vh; background-color: #FFFBFE" id="contribute">
      <v-col class="d-flex flex-column justify-center align-center">
        <span class="secondary--text text-center " style="font-size: 1.6rem; line-height: 2.25rem">This Project Is Completely Open Source.</span>
        <span class="secondary--text text-center font-weight-light mt-10" style="font-size: 1.2rem; line-height: 2.25rem">Wish to contribute?</span>
        <v-btn class="primary--text" outlined>
          Open In Github
          <v-icon right>
            mdi-github
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


export default {
  layout: 'landing'
}
</script>
