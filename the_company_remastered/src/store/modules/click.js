const state = {
	qty: 0,
	valore: 0.1,
	costo_upgrade: 1,
//	achv_req: 50,				// Clicks per raggiungere l'achievement
//	achv_upgrade: 1.1			// Moltiplicatore aggiuntivo al valore di un solo click
}

const getters = {
	clickQty: state => state.qty,
	clickValore: state => state.valore,
	clickCostoUpgrade: state => state.costo_upgrade,
//	clickAchvReq: state => state.achvs_req,
//	clickAchvUpgrade: state => state.achv_upgrade
}

const mutations = {
	setClickValore: (state, newValore) => state.valore = newValore,
	setClickCostoBuy: (state, newCostoBuy) => state.costo_buy = newCostoBuy,
	setClickCostoUpgrade: (state, newCostoUpgrade) => state.costo_upgrade = newCostoUpgrade,

	countClick: state => state.qty++,
	incrClickValore: state => state.valore *= 1.2 /* * state.achv_upgrade*/,
	incrClickCostoUpgrade: state => state.costo_upgrade *= 2
//	incrAchvClicksReq: state => state.achvs_req *= 5,
//	incrAchvUpgrade: state => state.achv_upgrade *= 1.4
}

const actions = {
	upgradeClick: function ({ commit, rootState }) {
		if (rootState.soldi.qty >= state.costo_upgrade) {
			commit('decrSoldiQty', state.costo_upgrade)
			commit('incrClickValore')
			commit('incrClickCostoUpgrade')
		} else {
			alert('Non hai abbastanza soldi!')
		}
	}

	// achvClick: function ({ commit }) {
	// 	if (state.qty >= state.achvs_req) {
	// 		commit('incrClickValore')
	// 		commit('incrAchvClicksReq')
	// 		commit('incrAchvUpgrade')
	// 		alert("Click potenziato di: " + state.achv_upgrade.toFixed(1))
	// 	} else {
	// 		alert("Non hai raggiunto l'obiettivo!")
	// 	}
	// }

}

export default {
	state,
	getters,
	mutations,
	actions
}