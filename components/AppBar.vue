<template>
  <v-card>
    <v-tabs
      background-color="black"
      center-active
    >
      <v-tab><router-link to="/">Home</router-link></v-tab>
      <v-tab><router-link to="/about">About</router-link></v-tab>
      <v-tab to="/Movies">Search Movies</v-tab>
      
    </v-tabs>
  </v-card>
</template>