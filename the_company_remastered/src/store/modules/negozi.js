const state = {
	qty: 0,
	valore: 100,
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
	incrQtyNegozi: function(state) {
		state.qty++
		state.costo_buy *= 1.4
		state.soldi_sec += state.valore
	}
}

const actions = {
	buyNegozi: function({ commit }){
		commit('incrQtyNegozi')
	}
}


export default {
	state,
	getters,
	mutations,
	actions
}