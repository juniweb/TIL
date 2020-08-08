import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        newsList: [],
        askList: [],
        jobsList: []
    },
    getters: {
        askList(state) {
            return state.askList;
        }
    },
    mutations,
    actions
})


