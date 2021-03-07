const state = {
	qty: 10,
	soldi_for_sec: 0,
}

const getters = {
	soldiQty: state => state.qty,
	soldiSec: state => state.soldi_for_sec
}

const mutations = {
	setQty: (state, newQty) => state.qty = newQty,
	setSoldiSec: (state, newSec) => state.soldi_for_sec = newSec,
	incrSoldiQty: (state, increment) => state.qty += increment,
	decrSoldiQty: (state, decrement) => state.qty -= decrement
}

const actions = {
	soldiClick: function({ commit, rootState }) {
		commit('incrSoldiQty', rootState.click.valore)
		commit('countClick')
	},

	addSec: function({ commit, rootState }) {
		const increment = rootState.dipendenti.soldi_sec + rootState.negozi.soldi_sec
		commit('setSoldiSec', increment)
		commit('incrSoldiQty', increment)
		commit('incrQtyTempo')
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}