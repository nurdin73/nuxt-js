export default {
    recipe(state, detail) {
        state.detail = detail
    },
    loading(state, loading) {
        state.loading = loading
    },
    error(state, error) {
        state.error = error
    }
}