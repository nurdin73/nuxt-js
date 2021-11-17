export default {
    articles(state, articles) {
        state.data = articles
        console.log('masuk sini');
    },
    loading(state, loading) {
        state.loading = loading
    },
    error(state, error) {
        state.error = error
    }
}