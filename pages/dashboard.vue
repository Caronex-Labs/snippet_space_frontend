<template>
<v-card>
  <v-btn @click="$store.dispatch('signUpGistsSync')">
    Get Gists
  </v-btn>
</v-card>
</template>

<script>
export default {
name: "dashboard"
}
</script>

<style scoped>

</style>
