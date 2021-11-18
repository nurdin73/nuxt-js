export default {
    data(state, data) {
        state.data = data
    },
    loading(state, loading) {
        state.loading = loading
    },
    error(state, error) {
        state.error = error
    }
}