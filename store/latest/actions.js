import { BASE_URL } from "~/configs/app"

export default {
    getAll({commit}) {
        commit('loading', true)
        this.$axios.get(`${BASE_URL}/latest`).then(res => res.data).then(res => {
            commit('getLatest', res)
            commit('loading', false)
        }).catch(err => {
            commit('error', err.message)
            commit('loading', false)
        })
    },
    getRecipe({commit}) {
        commit('loading', true)
        this.$axios.get(`${BASE_URL}/recipe/latest`).then(res => res.data).then(res => {
            commit('getRecipeLatest', res)
            commit('loading', false)
        }).catch(err => {
            commit('error', err.message)
            commit('loading', false)
        })
    },
    getArticle({commit}) {
        commit('loading', true)
        this.$axios.get(`${BASE_URL}/article/latest`).then(res => res.data).then(res => {
            commit('getArticleLatest', res)
            commit('loading', false)
        }).catch(err => {
            commit('error', err.message)
            commit('loading', false)
        })
    }
}