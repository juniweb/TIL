import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        newsList: [],
        askList: [],
        jobsList: [],
        user: {},
        item: {}
    },
    getters: {
        askList(state) {
            return state.askList;
        },
        itemInfo(state) {
            return state.item;
        }
    },
    mutations,
    actions
})

