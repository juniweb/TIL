export default {
    SET_NEWS(state, data) {
        console.log('SET_NEWS', data);
        state.newsList = data;
    },
    SET_ASK(state, data) {
        console.log('SET_ASK', data);
        state.askList = data;
    },
    SET_JOBS(state, data) {
        console.log('SET_JOBS', data);
        state.jobsList = data;
    }
}