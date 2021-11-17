export default {
    product(state, data) {
        state.detail = data
    },
    loading(state, loading) {
        state.loading = loading
    },
    error(state, error) {
        state.error = error
    }
}