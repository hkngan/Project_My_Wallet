import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"

export default createStore({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    strict: true,
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false
    },
    getters: {
        user: (state) => {
          return state.user;
        },
        isUserLoggedIn: (state) => {
            return state.isUserLoggedIn;
          }
    },
    mutations: {
        isUserLoggedIn(state, isUserLoggedIn){
            state.isUserLoggedIn = isUserLoggedIn;
          },
        setToken (state, token){
            state.token = token
            if (token){
                state.isUserLoggedIn = true
            } else{
                state.isUserLoggedIn = false
            }
        },
        setUser (state, user){
            state.user = user
        },
        LogOut(state){
            state.user = null
            state.posts = null
        },
    },
    actions:{
        isUserLoggedIn(context,isUserLoggedIn){
            context.commit('isUserLoggedIn',isUserLoggedIn);
          },
        setToken ({commit}, token) {
            commit('setToken', token)
        },
        setUser ({commit}, user) {
            commit('setUser', user)
        },
        async LogOut({commit}){
            let user = null
            commit('logout', user)
          }
    }
})