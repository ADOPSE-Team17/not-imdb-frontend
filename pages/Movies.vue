<template>
   <div class="pa-16">
        <v-row dense
        class="pb-5">
            <v-col>
                <SearchMovies/>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col>
                <Movie
                :key="movie.id"
                :title="movie.Title"
                :Actors="movie.Actors"
                :Director="movie.Director"
                :Genre="movie.Genre"
                :Rated="movie.Rated"
                :imdbRating="movie.imdbRating"
                :posterUrl="movie.Poster"
                :Plot="movie.Plot"
                :Runtime="movie.Runtime"
                :Year="movie.Year"
                :Writer="movie.Writer"
                :Awards="movie.Awards"
                :Type="movie.Type"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import SearchMovies from '@/components/searchMovies.vue'
import Movie from '@/components/movie.vue'

export default {
    components:{
        SearchMovies,
        Movie
    },
    computed:{
        movie:{
            get(){
                return this.$store.state.movie
            }
        },
        showMovie:{
            get(){
                return this.$store.showMovie
            }
        }
    },
}
</script>

<style>

</style>