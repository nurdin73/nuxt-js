export default {
    getLatest(state, latest) {
        state.latests = latest
    },
    getArticleLatest(state, articlelatest) {
        state.articleLatest = articlelatest
    },
    getRecipeLatest(state, recipeLatest) {
        state.recipeLatest = recipeLatest
    },
    loading(state, loading) {
        state.loading = loading
    },
    error(state, error) {
        state.error = error
    }
}