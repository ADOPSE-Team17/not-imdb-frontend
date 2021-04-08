<template>
  <v-app-bar color="#43a047">
    <!-- Logo Here -->
    <v-spacer
      ><nuxt-link to="/"
        ><v-icon size="64">mdi-alpha-j-box</v-icon></nuxt-link
      ></v-spacer
    >
    <v-btn class="pa-10">
      <nuxt-link to="/Login">Sign In</nuxt-link>
    </v-btn>
    <v-btn class="pa-10">
      <nuxt-link to="/Register"> Register </nuxt-link>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
</style>
