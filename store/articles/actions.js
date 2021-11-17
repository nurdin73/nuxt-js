import { BASE_URL } from "~/configs/app"
export default {
    async getArticles({commit}) {
        commit('loading', true)
        this.$axios.get(`${BASE_URL}/latest`).then(res => res.data).then(res => {
            commit('articles', res)
            commit('loading', false)
        }).catch(error => {
            commit('error', error.message)
            commit('loading', false)
        })
    },
}