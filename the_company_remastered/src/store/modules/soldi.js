const state = {
	qty: 10000,
	soldi_for_sec: 0,
}

const getters = {
	soldiQty: state => state.qty,
	soldiSec: state => state.soldi_for_sec
}

const mutations = {
	// setQty: (state, newQty) => {
	// 	state.qty = newQty
	// },

	incrQty: (state, increment) => {
		state.qty += increment
	},

	decrQty: (state, increment) => {
		state.qty -= increment
	},

	setSec: (state, newSec) => {
		state.soldi_for_sec = newSec
	}
}

const actions = {
	guadagnaSoldi: function({ commit, rootState }) {
		commit('incrQty', rootState.click.valore)
		commit('countClick')
	},

	// togliSoldi: function({ commit }){
	// 	commit('decrQty', decrement)
	// 	// deve poter essere un valore sia per le
	// 	// operazioni "Buy" e sia per "Upgrade"
	// 	// tramite la variabile presente in ogni modulo
	// 	// tranne soldi.js, che si chiamano "costo_buy" e
	// 	// "costo_upgrade"
	// },

	addSec: function({ commit, rootState }) {
		const increment = rootState.dipendenti.soldi_sec + rootState.negozi.soldi_sec
		rootState.tempo.qty++
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