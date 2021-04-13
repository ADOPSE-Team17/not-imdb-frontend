//import axios from 'axios'

//state
export const state = () =>({
    showResultsEdit:false
})

//getters
export const getters = {
    
}


//actions
export const actions = {
    searchMovies({commit}){
        commit('searchMovies')
    }
}

//mutations
export const mutations = {
   searchMovies(state){
        // state.showResultsEdit = !state.showResultsEdit
        console.log(state.showResultsEdit)
    }
}