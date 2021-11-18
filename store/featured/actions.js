import { BASE_URL } from "~/configs/app"

export default {
    async featured({ commit }) {
        commit('loading', true)
        this.$axios.get(`${BASE_URL}/recipes/featured`).then(res => res.data).then(res => {
            commit('data', res)
            commit('loading', false)
        }).catch(error => {
            commit('error', error.message)
            commit('loading', false)
        })
    },
}