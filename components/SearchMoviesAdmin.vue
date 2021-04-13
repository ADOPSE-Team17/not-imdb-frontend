<template>
<div>
  <v-text-field
    placeholder="Search a movie to modify"
    prepend-icon="mdi-magnify"
    rounded
    filled
    dense
  >
  </v-text-field>
  <v-btn @click="this.$store.dispatch('searchMovies')"> Searcvh</v-btn>
</div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>