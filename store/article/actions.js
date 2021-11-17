import { BASE_URL } from "~/configs/app"

export default {
    async getArticle({commit}, {category, key}) {
        // const req = fetch(`${BASE_URL}/article/${category}/${key}`).then(res => res.json()).then(res => {
        //     commit('article', res)
        // }).catch(err => {
        //     commit('error', err.message)
        // })
        try {
            const req = await fetch(`${BASE_URL}/article/${category}/${key}`)
            const res = await req.json()
            commit('article', res)
            return res
        } catch (error) {
            commit('error', error.message)
        }
    }
}