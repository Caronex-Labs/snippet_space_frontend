<template>
  <v-container class="ma-0 pa-0" fluid>
    <!--   Landing Page 1  -->
    <v-row
      id="banner"
      :style="$vuetify.theme.dark ? {backgroundColor: '#131B23', height: '92.5vh'} : {backgroundColor: '#FFFBFE', height: '92.5vh'}">

      <!--   Illustration   -->
      <v-col v-if="mode === 'mobile'" class="mx-0 px-0" style="height: fit-content" cols="12">
        <v-img
          :src="$vuetify.theme.dark ? require('assets/Landing/mobile-banner-dark.svg') : require('assets/Landing/mobile-banner.svg')"
          width="100%"
          height="auto"
        >
        </v-img>
      </v-col>

      <v-col v-else class="mx-0 px-0 d-flex align-end justify-center" cols="7">
        <v-img
          :src="$vuetify.theme.dark ? require('assets/Landing/desk-banner-dark.svg') : require('assets/Landing/desk-banner.svg')"
          width="100%"
          height="auto"
        >
        </v-img>
      </v-col>


      <v-col :cols="mode === 'mobile' ? 12 : 5" class="align-self-center">

        <!-- Quote Text  -->

        <v-row>
          <v-col>
            <p class="font-weight-bold font-italic text-center"
               :style="$vuetify.breakpoint.name === 'xs' ? 'font-size: 1.5rem; line-height: 2.438rem' : 'font-size: 2.25rem; line-height: 2.6rem' ">
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
            <span class="secondary--text font-italic font-weight-light"
                  :style="$vuetify.breakpoint.name === 'xs' ? 'font-size: 1.5rem; line-height: 2.25rem' : 'font-size: 1.7rem; line-height: 2.25rem' ">And we're here to help.</span>
          </v-col>
        </v-row>

        <v-row v-if="userLoggedIn" class="my-6">
          <v-col class="d-flex flex-column align-center justify-center">
            <v-btn :x-large="$vuetify.breakpoint.name !== 'xs'" dark class="primary--text" @click="$router.push('/dashboard')">
              Go To Dashboard
              <v-icon right>
                mdi-view-dashboard-outline
              </v-icon>
            </v-btn>
            <span class="secondary--text text-overline">Free. Forever.</span>
          </v-col>
        </v-row>

        <v-row v-else class="my-6">
          <v-col class="d-flex flex-column align-center justify-center">
            <v-btn :x-large="$vuetify.breakpoint.name !== 'xs'" dark class="primary--text" @click="createUser">
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
              style="cursor: pointer"
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

    <v-row
      :style="$vuetify.theme.dark ? {backgroundColor: '#131B23', height: '93vh'} : {backgroundColor: '#FFFBFE', height: '93vh'}"
      id="about-us">
      <v-col style="height: fit-content" :cols="mode === 'mobile' ? 12 : 5" class="d-flex align-center justify-center">
        <v-img
          :src="require('assets/Landing/circle-logo.svg')"
          class="mx-auto mt-8"
          height="100%"
          width="auto"
        >
        </v-img>
      </v-col>

      <v-col class="d-flex flex-column align-self-center mb-10">
        <span class="secondary--text text-center mb-7"
              :style=" $vuetify.breakpoint.name === 'xs' ? 'font-size: 1.5rem; line-height: 2.25rem' : 'font-size: 2.2rem; line-height: 2.25rem'">We Collect Your Best Codes.</span>
        <v-spacer></v-spacer>
        <span class="accent--text text-center"
              :style="$vuetify.breakpoint.name === 'xs' ? 'font-size: 1.2rem; line-height: 2.25rem' : 'font-size: 1.6rem; line-height: 2rem' ">By Syncing With Your Github Gists Automatically.</span>
        <v-spacer></v-spacer>
        <span class="accent--text text-center"
              :style="$vuetify.breakpoint.name === 'xs' ? 'font-size: 1.2rem; line-height: 2.25rem' : 'font-size: 1.6rem; line-height: 2rem' ">And Help You Organize, Tag and Manage Them.</span>
        <v-spacer></v-spacer>
      </v-col>
    </v-row>

    <v-row
      :style="$vuetify.theme.dark ? {backgroundColor: '#131B23', height: '93vh'} : {backgroundColor: '#FFFBFE', height: '93vh'}"
      id="contribute">
      <v-col class="d-flex flex-column justify-center align-center">
        <span class="secondary--text text-center "
              :style="$vuetify.breakpoint.name === 'xs' ? 'font-size: 1.6rem; line-height: 2.25rem' : 'font-size: 2.4rem; line-height: 2.25rem' ">This Project Is Completely Open Source.</span>
        <v-avatar height="50vh" width="auto" tile>
          <v-img
            :src="$vuetify.theme.dark ? require('assets/Landing/open-source-dark.svg') : require('assets/Landing/open-source.svg')"
          >
          </v-img>
        </v-avatar>
        <span class="secondary--text text-center font-weight-light mt-10"
              :style="$vuetify.breakpoint.name === 'xs' ? 'font-size: 1.2rem; line-height: 2.25rem' : 'font-size: 1.8rem; line-height: 2.25rem' ">Wish to contribute?</span>
        <v-btn :x-large="$vuetify.breakpoint.name !== 'xs'" class="primary--text mt-5" outlined>
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
import {mapGetters} from 'vuex';

export default {
  layout: 'landing',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      theme: 'landing/getTheme',
      userLoggedIn: 'user/getUserLoggedIn'
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
    async createUser() {
      var provider = new this.$fireAuthObj.GithubAuthProvider();
      provider.addScope('read:user');
      provider.addScope('gist');
      try {
        let result = await this.$fireAuth.signInWithPopup(provider)
        let token = result.credential;
        console.log(token)
        let user = result.user;
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
    }
  }
}
</script>
