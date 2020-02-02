export default {
    namespaced: true,
    state: {
        count: 0
    },
    mutations: {
        changeCount(state,payload) {
            state.count = payload;
        }
    }
}