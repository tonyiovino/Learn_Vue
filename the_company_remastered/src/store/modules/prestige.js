const state = {
	qty: 1,
	valore: 1.1,
	costo: 100
}

const getters = {
	prestigeQty: state => state.qty,
	prestigeValore: state => state.valore,
	prestigeCosto: state => state.costo_prestige,
}

const mutations = {
	incrPrestigeQty: state => state.qty *= state.valore,
	incrPrestigeValore: state => state.valore + 1,
	incrPrestigeCosto: state => state.costo_prestige * 10
}

const actions = {
	prestigeAll: function ({ commit, rootState }) {
		if (rootState.soldi.soldi_for_sec >= state.costo) {
			commit('incrPrestigeQty')
			commit('incrPrestigeValore')
			commit('incrPrestigeCosto')

			commit('setSoldiQty', 0)
			commit('setDipendentiQty', 0)
			commit('setNegoziQty', 0)

			commit('setDipendentiCostoBuy', 10 / state.qty)
			commit('setNegoziCostoBuy', 1000 / state.qty)

			commit('setDipendentiCostoUpgrade', 100 / state.qty)
			commit('setNegoziCostoUpgrade', 1500 / state.qty)
			commit('setClickCostoUpgrade', 1 / state.qty)
			commit('setTempoCostoUpgrade', 30000 / state.qty)

			commit('setDipendentiValore', 1 * state.qty)
			commit('setNegoziValore', 10 * state.qty)
			commit('setClickValore', 0.1 * state.qty)
			commit('setTempoValore', 1000)
		} else {
			alert('Non sei pronto per il Prestigio')
		}
	},
}

export default {
	state,
	getters,
	mutations,
	actions
}