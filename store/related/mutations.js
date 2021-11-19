export default {
    articles(state, articles) {
        state.articles = articles
    },
    recipes(state, recipes) {
        state.recipes = recipes
    },
    loading(state, loading) {
        state.loading = loading
    },
    error(state, error) {
        state.error = error
    }
}