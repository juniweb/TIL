import {
    fetchList,
    fetchUserInfo, 
    fetchItemInfo
} from "../api/index";

export default {
    FETCH_LIST({ commit }, pageName) {
        fetchList(pageName)
            .then(({ data }) => commit('SET_LIST', data))
            .catch(error => console.log(error))
    },

    FETCH_USER({ commit }, userName) {
        fetchUserInfo(userName)
            .then(({ data }) => commit('SET_USER', data))
            .catch(error => console.log(error))
    },
    FETCH_ITEM({ commit }, itemId) {
        fetchItemInfo(itemId)
            .then(({ data }) => commit('SET_ITEM', data))
            .catch(error => console.log(error))
    }
}