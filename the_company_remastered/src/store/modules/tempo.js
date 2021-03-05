const state = {
	qty: 0,
	valore: 1000,
	costo_upgrade: 30000
}

const getters = {
	tempoValore: state => state.valore,
	tempoQty: state => state.qty,
	
}

const mutations = {
	incrQtyTempo: function (state) {
		state.qty++
	},

	decrTempo: function (state) {
		state.valore -= 500
		state.costo_upgrade *= 1.4
	}
}

const actions = {
	onesec: function ({ commit }) {
		commit('incrQtyTempo')
	},
	upgradeTempo: function ({ commit }) {
		commit('decrTempo')
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}