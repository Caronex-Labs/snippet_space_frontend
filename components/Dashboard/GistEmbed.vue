<template>
  <div id="gist"></div>
</template>

<script>
import postscribe from 'postscribe';

export default {
  name: "GistEmbed",
  props: {
    url: {
      type: String,
      required: true
    }
  },
  watch: {
    url() {
      console.log("url changed")
      document.getElementById('gist').innerHTML = "";
      postscribe('#gist', `<script src="${this.url}.js"><\/script>`)
    }
  }
}
</script>

<style scoped>

</style>
