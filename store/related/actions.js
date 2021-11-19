import { BASE_URL } from "~/configs/app"

export default {
    getArticles({commit}, category, key) {
        commit('loading', true)
        this.$axios.get(`${BASE_URL}/article/${category}/${key}/related`).then(res => res.data).then(res => {
            commit('articles', res)
            commit('loading', false)
        }).catch(err => {
            commit('error', err.message)
            commit('loading', false)
        })
    },
    getRecipes({commit}, key) {
        commit('loading', true)
        this.$axios.get(`${BASE_URL}/recipe/${key}/related`).then(res => res.data).then(res => {
            commit('recipes', res)
            commit('loading', false)
        }).catch(error => {
            commit('error', error.message)
            commit('loading', false)
        })
    }
}