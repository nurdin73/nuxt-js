import { BASE_URL } from "~/configs/app"
export default {
    getCategories({ commit }) {
        commit('loading', true)
        this.$axios.get(`${BASE_URL}/categories/article`).then(res => res.data).then(res => {
            commit('data', res)
            commit('loading', false)
        }).catch(error => {
            commit('error', error.message)
            commit('loading', false)
        })
    },
}