import Vue from 'vue'
import Vuex from 'vuex'
import setting from './setting'
import banner from './banner'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        setting,
        banner
    },
    strict: true
})

export default store