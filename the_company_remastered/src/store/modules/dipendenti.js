const state = {
	qty: 0,
	valore: 1,
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
	setDipendentiQty: (state, newQty) => state.qty = newQty,
	setDipendentiValore: (state, newValore) => state.valore = newValore,
	setDipendentiCostoBuy: (state, newCostoBuy) => state.costo_buy = newCostoBuy,
	setDipendentiCostoUpgrade: (state, newCostoUpgrade) => state.costo_upgrade = newCostoUpgrade,

	incrDipendentiQty: state => state.qty++,
	incrDipendentiSoldiSec: state => state.soldi_sec += state.valore,
	incrDipendentiCostoBuy: state => state.costo_buy *= 1.8,
	incrDipendentiCostoUpgrade: state => state.costo_upgrade *= 2,
	incrDipendentiValore: state => state.valore *= 1.2
}

const actions = {
	buyDipendenti: function({ commit, rootState }){
		if (rootState.soldi.qty >= state.costo_buy){
			commit('decrSoldiQty', state.costo_buy)
			commit('incrDipendentiQty')
			commit('incrDipendentiCostoBuy')
			commit('incrDipendentiSoldiSec')
		} else {
			alert('Non hai abbastanza soldi!')
		}
	},
	upgradeDipendenti: function ({ commit, rootState }) {
		if (rootState.soldi.qty >= state.costo_upgrade) {
			commit('decrSoldiQty', state.costo_upgrade)
			commit('incrDipendentiValore')
			commit('incrDipendentiCostoUpgrade')
		} else {
			alert('Non hai abbastanza soldi!')
		}
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}