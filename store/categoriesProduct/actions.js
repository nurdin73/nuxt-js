import { BASE_URL } from "~/configs/app"
export default {
    async getCategories({ commit }) {
        commit('loading', true)
        this.$axios.get(`${BASE_URL}/categories/product`).then(res => res.data).then(res => {
            commit('data', res)
            commit('loading', false)
        }).catch(error => {
            commit('error', error.message)
            commit('loading', false)
        })
    },
}