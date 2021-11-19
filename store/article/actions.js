import { BASE_URL } from "~/configs/app"

export default {
    getArticle({commit}, {category, key}) {
        // const req = fetch(`${BASE_URL}/article/${category}/${key}`).then(res => res.json()).then(res => {
        //     commit('article', res)
        // }).catch(err => {
        //     commit('error', err.message)
        // })
        commit('loading', true)
        this.$axios.get(`${BASE_URL}/article/${category}/${key}`).then(res => res.data).then(res => {
            commit('detail', res)
            commit('loading', false)
        }).catch(err => {
            commit('error', err.message)
            commit('loading', false)
        })
        // try {
        //     const req = await fetch(`${BASE_URL}/article/${category}/${key}`)
        //     const res = await req.json()
        //     commit('article', res)
        //     return res
        // } catch (error) {
        //     commit('error', error.message)
        // }
    }
}