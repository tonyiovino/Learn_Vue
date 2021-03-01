const state = {
	qty: 0,
	valore: 100,
	sec: 0,
	costo_buy: 1000,
	costo_upgrade: 1500
}

const getters = {
	negoziQty: state => state.qty,
	negoziValore: state => state.valore,
	negoziSec: state => state.sec,
	negoziCostoBuy: state => state.costo_buy,
	negoziCostoUpgrade: state => state.costo_upgrade,
}

const mutations = {

}

const actions = {

}

export default {
	state,
	getters,
	mutations,
	actions
}