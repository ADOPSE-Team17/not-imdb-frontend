<template>
  <form>
    <v-text-field
      v-model="title"
      label="type any title"
      required
      clearable
    ></v-text-field>
    <v-btn
      class="mr-4"
      @click="fetchMovie(title)"
      @keyup.enter="fetchMovie(title)"
    >
      SEARCH
    </v-btn>
  </form>
</template>

<script>
import {mapActions} from 'vuex'

export default{
    data(){
        return{
            title:''
        }
    },
    methods:{
        ...mapActions(['fetchMovie'])
    }
}
</script>