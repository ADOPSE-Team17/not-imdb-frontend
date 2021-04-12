<template>
  <div>
    <v-row class="pa-8">
      <SearhMovies class="mx-auto"/>
    </v-row>
    <v-row class="pa-8">
      <h2>|Headline 1</h2>
      <CarouselList/>
    </v-row>
    <v-row class="pa-8">
      <h2>|Headline 1</h2>
      <CarouselList/>
    </v-row>
    <v-row class="pa-8">
      <h2>|Headline 1</h2>
      <CarouselList/>
    </v-row>
  </div>
</template>

<script>
import SearhMovies from '@/components/SearchMovies'
import CarouselList from '@/components/CarouselList'

export default {
    components: {
      CarouselList,
      SearhMovies 
    },
    
}
</script>

<style>
h2{
  color: #fff;
  
}
</style>