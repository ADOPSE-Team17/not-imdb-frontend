<template>
  <div>
    <AppBarAdmin/>
    <v-row class="pa-8">
      <SearchMoviesAdmin/>
    </v-row>
      <MovieEdit/>
  </div>
</template>

<script>
import AppBarAdmin from '@/components/AppBarAdmin'
import SearchMoviesAdmin from '@/components/SearchMoviesAdmin'
import MovieEdit from '@/components/MovieEdit'

export default {
  components: {
    AppBarAdmin,
    MovieEdit,
    SearchMoviesAdmin
  }
}
</script>
