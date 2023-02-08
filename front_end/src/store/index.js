import {createStore} from "vuex"
import requests from "./requests"
export default createStore({
    namespaced: true,
    state: {},
    getters:{},
    mutations:{},
    actions: {

    },
    modules:{
        requests
    },
})