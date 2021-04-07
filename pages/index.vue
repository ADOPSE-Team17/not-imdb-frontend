<template>
  <div class="container">
    <searchBar/>
      <CarouselList/>
      <CarouselList/>
      <CarouselList/>
    <v-footer
    app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </div>
</template>

<script>
import CarouselList from '@/components/CarouselList'
import searchBar from '@/components/searchBar'

export default {
  components: {
    CarouselList,
    searchBar
  }
}
</script>

<style>

</style>
