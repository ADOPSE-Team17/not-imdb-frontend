<template>
<div to="/Movies">
        <v-card
            dark
          >
            <v-card-title class="headline">
               {{title}}
            </v-card-title>
            <v-row>
                <v-col>
                    <v-card-subtitle>{{Year}} ' {{Type}} ' {{Rated}} ' {{Runtime}}</v-card-subtitle>
                </v-col>
                <v-col>
                    <v-card-text>IMDB Rating:{{imdbRating}}</v-card-text>
                </v-col>
                <v-col>
                    <v-row class="ml-9">
                        <h3>Rate this</h3>
                    </v-row>
                    <v-row>
                    <v-rating
                    empty-icon="mdi-star-outline"
                    full-icon="mdi-star"
                    half-icon="mdi-star-halffull"
                    hover
                    length="5"
                    size="20"
                    value="3.5"
                    color="#FAC800"
                    ></v-rating>
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-responsive>
                            <v-img
                            class="ml-7"
                            max-height="400"
                            max-width="250"
                            append
                            :src="posterUrl"
                            ></v-img>
                    </v-responsive>
                </v-col>
                <v-col>
                    <v-row>        
                        <v-card
                        class="mt-8 blue-grey lighten-2 rounded-xl"
                        max-width="200"
                        >
                        <v-list-item one-line>
                            <v-list-item-content>Add to Watchlist 
                                <v-icon large
                                @click="addWatchList"
                                >mdi-plus</v-icon>
                            </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-row>
                    <v-row>
                        <v-card
                            class="mt-8 blue-grey lighten-2 rounded-xl"
                            max-width="300"
                            flat
                        >
                            <v-list-item three-line>
                            <v-list-item-content>
                                {{Awards}}
                            </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card
                    max-width="200"
                    class="rounded-xl blue-grey lighten-2 ml-10"
                    >
                        <v-list-item one-line>
                            <v-list-item-content>
                                {{Genre}}
                            </v-list-item-content>
                            </v-list-item>     
                    </v-card>
                </v-col>
                
            </v-row>
            <v-row>
                <v-card-text>
                     <v-list>
                        <v-row>
                            <v-list-item text-left>
                                <v-list-item-content>
                                <v-list-item-title
                                class="text-left"
                                >|Plot</v-list-item-title>
                                {{Plot}}
                                </v-list-item-content>
                            </v-list-item>
                        </v-row>
                        <v-row>
                            <v-list-item text-left>
                                <v-list-item-content>
                                <v-list-item-title
                                class="text-left"
                                >|Directed By</v-list-item-title>
                                {{Director}}
                                </v-list-item-content>
                            </v-list-item>
                        </v-row>
                    </v-list>
                    |Cast
                    <v-row
                    align="center"
                    class="spacer"
                    no-gutters
                    >
                        <v-col
                        class="pa-4 ml-5">
                            <v-avatar
                            size="72px"
                            color="orange"
                            >
                                <router-link to="/Movies">
                                    Actor 1 
                                </router-link>
                            </v-avatar>
                            <strong
                                class="text-xl-left"
                            >Actor's Name</strong>
                        </v-col>
                        <v-col
                        class="pa-4 ml-5">
                            <v-avatar
                            size="72px"
                            color="orange"
                            >
                                <router-link to="/Movies">
                                    Actor 1 
                                </router-link>
                            </v-avatar>
                            <strong
                                class="text-xl-left"
                            >Actor's Name</strong>
                        </v-col>
                        <v-col
                        class="pa-4 ml-5">
                            <v-avatar
                            size="72px"
                            color="orange"
                            >
                                <router-link to="/Movies">
                                    Actor 1 
                                </router-link>
                            </v-avatar>
                            <strong
                                class="text-xl-left"
                            >Actor's Name</strong>
                        </v-col>
                    </v-row>
                    <v-row
                    align="center"
                    class="spacer"
                    no-gutters
                    >
                        <v-col
                        class="pa-4 ml-5">
                            <v-avatar
                            size="72px"
                            color="orange"
                            >
                                <router-link to="/Movies">
                                    Actor 1 
                                </router-link>
                            </v-avatar>
                            <strong
                                class="text-xl-left"
                            >Actor's Name</strong>
                        </v-col>
                        <v-col
                        class="pa-4 ml-5">
                            <v-avatar
                            size="72px"
                            color="orange"
                            >
                                <router-link to="/Movies">
                                    Actor 1 
                                </router-link>
                            </v-avatar>
                            <strong
                                class="text-xl-left"
                            >Actor's Name</strong>
                        </v-col>
                        <v-col
                        class="pa-4 ml-5">
                            <v-avatar
                            size="72px"
                            color="orange"
                            >
                                <router-link to="/Movies">
                                    Actor 1 
                                </router-link>
                            </v-avatar>
                            <strong
                                class="text-xl-left"
                            >Actor's Name</strong>
                        </v-col>
                    </v-row>
                    <v-row
                    align="center"
                    class="spacer"
                    no-gutters
                    >
                        <v-col
                        class="pa-4 ml-5">
                            <v-avatar
                            size="72px"
                            color="orange"
                            >
                                <router-link to="/Movies">
                                    Actor 1 
                                </router-link>
                            </v-avatar>
                            <strong
                                class="text-xl-left"
                            >Actor's Name</strong>
                        </v-col>
                        <v-col
                        class="pa-4 ml-5">
                            <v-avatar
                            size="72px"
                            color="orange"
                            >
                                <router-link to="/Movies">
                                    Actor 1 
                                </router-link>
                            </v-avatar>
                            <strong
                                class="text-xl-left"
                            >Actor's Name</strong>
                        </v-col>
                        <v-col
                        class="pa-4 ml-5">
                            <v-avatar
                            size="72px"
                            color="orange"
                            >
                                <router-link to="/Movies">
                                    Actor 1 
                                </router-link>
                            </v-avatar>
                            <strong
                                class="text-xl-left"
                            >Actor's Name</strong>
                        </v-col>
                    </v-row>
                    |Related Movies
                    <v-carousel hide-delimiters
                        class="pa-16"
                    >
                        <v-carousel-item
                            v-for="item in this.carouselItems"
                            :key="item.id"
                        >{{item.text}}</v-carousel-item>
                    </v-carousel>
                    |User Reviews
                    
                </v-card-text>
            </v-row>

          </v-card>
</div>
</template>

<script>
export default {
    name:'movie',
     props:{
       title:{
           type:String,
           required:true
       },
       Actors:{
           type:String,
           required:true
       },
       Director:{
           type:String,
           required:true
       },
       Genre:{
           type:String,
           required:true
       },
       Rated:{
           type:String,
           required:true
       },
       imdbRating:{
           type:String,
           required:true
       },
       posterUrl:{
           type:String,
           required:true
       },
       Plot:{
           type:String,
           required:true
       },
       Runtime:{
           type:String,
           required:true
       },
       Year:{
           type:String,
           required:true
       },
       Writer:{
           type:String,
           required:true
       },
       Awards:{
           type:String,
           required:true
       },
       Type:{
           type:String,
           required:true
       }
   },
   methods:{
       addWatchList(){
           alert("You added me!")
       }
    },
    data(){
        return{
            carouselItems:[
                {
                    id:1,
                    text:"Movie 1"
                },
                {
                    id:2,
                    text:"Movie 2"
                },
                {
                    id:3,
                    text:"Movie 3"
                },
                {
                    id:4,
                    text:"Movie 4"
                },
                {
                    id:5,
                    text:"Movie 5"
                }
            ]
        }
    }
    
}
</script>

<style>

</style>