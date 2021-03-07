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
	incrQtyDipendenti: state => state.qty++,
	incrSoldiSecDipendenti: state => state.soldi_sec += state.valore,
	incrCostoBuyDipendenti: state => state.costo_buy *= 1.6,
	incrCostoUpgradeDipendenti: state => state.costo_upgrade *= 1.6,
	incrValoreDipendenti: state => state.valore *= 1.4
}

const actions = {
	buyDipendenti: function({ commit, rootState }){
		if (rootState.soldi.qty >= state.costo_buy){
			commit('decrSoldiQty', state.costo_buy)
			commit('incrQtyDipendenti')
			commit('incrCostoBuyDipendenti')
			commit('incrSoldiSecDipendenti')
		} else {
			alert('Non hai abbastanza soldi!')
		}
	},
	upgradeDipendenti: function ({ commit, rootState }) {
		if (rootState.soldi.qty >= state.costo_upgrade) {
			commit('decrSoldiQty', state.costo_upgrade)
			commit('incrValoreDipendenti')
			commit('incrCostoUpgradeDipendenti')
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