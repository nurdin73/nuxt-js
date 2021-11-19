import { BASE_URL } from "~/configs/app"

export default {
    async recipe({commit}, key) {
        commit('loading', true)
        this.$axios.get(`${BASE_URL}/recipe/${key}`).then(res => res.data).then(res => {
            commit('loading', false)
            commit('recipe', res)
        }).catch(err => {
            commit('loading', false)
            commit('error', err.message)
        })
    }
}