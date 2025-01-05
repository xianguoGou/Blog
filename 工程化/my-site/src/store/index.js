import Vue from 'vue'
import Vuex from 'vuex'
import setting from './setting'
import banner from './banner'
import about from './about'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        setting,
        banner,
        about
    },
    strict: true
})

export default store