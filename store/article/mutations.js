export default {
    article(state, payload) {
        console.log(payload);
        state.detail = payload
    },
    loading(state, loading) {
        state.loading = loading
    },
    error(state, error) {
        state.error = error
    }
}