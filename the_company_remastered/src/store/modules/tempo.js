const state = {
	qty: 0,
	valore: 1000,
	costo_upgrade: 30000,
}

const getters = {
	tempoValore: state => state.valore,
	tempoQty: state => state.qty,
	tempAchvReqOre: state => state.achv_req.ore,
	tempAchvReqMinuti: state => state.achv_req.minuti
	
}

const mutations = {
	incrQtyTempo: state => state.qty++,
	decrValoreTempo: state => state.valore -= 50,
	incrCostoUpgradeTempo: state => state.costo_upgrade *= 1.6
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