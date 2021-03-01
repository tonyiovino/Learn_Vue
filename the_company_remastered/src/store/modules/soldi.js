const state = {
    qty: 10000,
	sec: 0,
}

const getters = {
    soldiQty: state => state.qty,
    soldiSec: state => state.sec
}

const mutations = {
    setQty: (state, newQty) => {
        state.qty = newQty
    },

    incrQty: (state, increment) => {
        state.qty += increment
    },

    setSec: (state, newSec) => {
        state.sec = newSec
    }
}

const actions = {
    guadagnaSoldi: function({ commit, rootState }) {
        commit('incrQty', rootState.click.valore)
        commit('incrClick')
    },

    addSec: function({ commit, rootState }) {
        const increment = rootState.dipendenti.sec + rootState.negozi.sec
        commit('setSec', increment)
        commit('incrQty', increment)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}