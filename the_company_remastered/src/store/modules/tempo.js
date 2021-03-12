const state = {
	qty: 0,
	valore: 1000,
	costo_upgrade: 30000,
}

const getters = {
	tempoQty: state => state.qty,
	tempoValore: state => state.valore,
	tempoCostoUpgrade: state => state.costo_upgrade
}

const mutations = {
	setTempoValore: (state, newValore) => state.valore = newValore,
	setTempoCostoUpgrade: (state, newCostoUpgrade) => state.costo_upgrade = newCostoUpgrade,

	incrQtyTempo: state => state.qty++,
	incrCostoUpgradeTempo: state => state.costo_upgrade *= 2,

	decrValoreTempo: state => state.valore -= 50
}

const actions = {
	upgradeTempo: function ({ commit }) {
		commit('decrValoreTempo')
		commit('incrCostoUpgradeTempo')
	},
}

export default {
	state,
	getters,
	mutations,
	actions
}