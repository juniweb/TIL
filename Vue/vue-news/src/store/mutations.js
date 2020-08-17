export default {
    SET_LIST(state, data) {
        console.log('SET_LIST', data);
        state.list = data;
    },
    SET_USER(state, data) {
        console.log('SET_USER', data);
        state.user = data;
    },
    SET_ITEM(state, data) {
        console.log('SET_ITEM', data);
        state.item = data;
    }

}