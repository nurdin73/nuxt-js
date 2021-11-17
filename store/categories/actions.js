import { BASE_URL } from "~/configs/app"
export default {
    async getCategories({ commit }) {
        const req = await fetch(`${BASE_URL}/categories/recipe`)
        const res = await req.json()
        commit('categories', res)
    },
}