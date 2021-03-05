const state = {
	qty: 0,
	valore: 10,
	soldi_sec: 0,
	costo_buy: 10,
	costo_upgrade: 100
}

const getters = {
	dipendentiQty: state => state.qty,
	dipendentiValore: state => state.valore,
	dipendentiSoldiSec: state => state.soldi_sec = state.qty * state.valore,
	dipendentiCostoBuy: state => state.costo_buy,
	dipendentiCostoUpgrade: state => state.costo_upgrade
}

const mutations = {
	incrQtyDipendenti: function(state) {
		state.qty += 1
		state.costo_buy *= 1.4
		state.soldi_sec += state.valore
	}
}

const actions = {
	buyDipendenti: function({ commit }){
		commit('incrQtyDipendenti')
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}