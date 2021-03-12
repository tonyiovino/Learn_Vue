const state = {
	qty: 0,
	valore: 10,
	soldi_sec: 0,
	costo_buy: 1000,
	costo_upgrade: 1500
}

const getters = {
	negoziQty: state => state.qty,
	negoziValore: state => state.valore,
	negoziSoldiSec: state => state.soldi_sec = state.qty * state.valore,
	negoziCostoBuy: state => state.costo_buy,
	negoziCostoUpgrade: state => state.costo_upgrade,
}

const mutations = {
	setNegoziQty: (state, newQty) => state.qty = newQty,
	setNegoziValore: (state, newValore) => state.valore = newValore,
	setNegoziCostoBuy: (state, newCostoBuy) => state.costo_buy = newCostoBuy,
	setNegoziCostoUpgrade: (state, newCostoUpgrade) => state.costo_upgrade = newCostoUpgrade,

	incrQtyNegozi: state => state.qty++,
	incrSoldiSecNegozi: state => state.soldi_sec += state.valore,
	incrCostoBuyNegozi: state => state.costo_buy *= 1.8,
	incrCostoUpgradeNegozi: state => state.costo_upgrade *= 2,
	incrValoreNegozi: state => state.valore *= 1.2
}

const actions = {
	buyNegozi: function({ commit, rootState }){
		if (rootState.soldi.qty >= state.costo_buy){
			commit('decrSoldiQty', state.costo_buy)
			commit('incrQtyNegozi')
			commit('incrCostoBuyNegozi')
			commit('incrSoldiSecNegozi')
		} else {
			alert('Non hai abbastanza soldi!')
		}
	},
	upgradeNegozi: function ({ commit, rootState }) {
		if (rootState.soldi.qty >= state.costo_upgrade) {
			commit('decrSoldiQty', state.costo_upgrade)
			commit('incrValoreNegozi')
			commit('incrCostoUpgradeNegozi')
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