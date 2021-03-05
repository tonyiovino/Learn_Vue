const state = {
	qty: 0,
	valore: 0.1,
	costo_upgrade: 1,
	achv_clicks_req: 50,		// Clicks per raggiungere l'achievement
	achv_upgrade: 1.1			// Moltiplicatore aggiuntivo al valore di un solo click
}

const getters = {
	clickQty: state => state.qty,
	clickValore: state => state.valore,
	clickAchvClicksReq: state => state.achv_clicks_req
}

const mutations = {
	countClick: state => state.qty++,
	incrClickValore: state => state.valore *= state.achv_upgrade,
	incrAchvClicksReq: state => state.achv_clicks_req *= 5,
	incrAchvUpgrade: state => state.achv_upgrade *= 1.6
}

const actions = {
	achvClick: function ({ commit }) {
		if (state.qty >= state.achv_clicks_req) {
			alert("Sto potenziando il click di: " + state.achv_upgrade.toFixed(1))
			commit('incrClickValore')
			commit('incrAchvClicksReq')
			commit('incrAchvUpgrade')
		} else {
			alert("Non hai raggiunto l'obiettivo!")
		}
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}