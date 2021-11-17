export const state = () => {
    return {
        base_url: process.env.NUXT_ENV_API_URL || "https://scrapping-mahi.herokuapp.com/api/v1",
        number: 0
    }
}

export const mutations = {
    increment(state, number) {
        state.number += number
    }
}

export const actions = {
    add({commit}, number) {
        commit('increment', number.number)
    }
}