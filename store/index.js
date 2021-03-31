import axios from 'axios'

//state
export const state = () =>({
    movie:{},
    showMovie:false
})

//getters
export const getters = {

}


//actions
export const actions = {
    async fetchMovie({commit},title){
        
        const res = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=c002ba0b`)
        console.log(res.data)
        commit('fetchMovie',res.data)
    }
    
}

//mutations
export const mutations = {
    fetchMovie(state,movie){
        state.movie = movie
        state.showMovie = !state.showMovie
        console.log(state.showMovie)
    }
}