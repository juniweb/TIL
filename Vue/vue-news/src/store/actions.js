import {
    fetchList,
    fetchUserInfo, 
    fetchItemInfo
} from "../api/index";

export default {
    // promise
    // FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //         .then(response => {
    //             commit('SET_LIST', response.data);
    //             return response;
    //         })
    //         .catch(error => console.log(error))
    // },
    // async
    async FETCH_LIST({ commit }, pageName) {
        try {
            const response = await fetchList(pageName);
            commit('SET_LIST', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async FETCH_USER({ commit }, userName) {
        try {
            const response = await fetchUserInfo(userName);
            commit('SET_USER', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },    
    async FETCH_ITEM({ commit }, itemId) {
        try {
            const response = await fetchItemInfo(itemId);
            commit('SET_ITEM', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }    
}