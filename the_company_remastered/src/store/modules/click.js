const state = {
	qty: 0,
	valore: 0.1,
	costo_upgrade: 1,
	achv_req: 50,				// Clicks per raggiungere l'achievement
	achv_upgrade: 1.1			// Moltiplicatore aggiuntivo al valore di un solo click
}

const getters = {
	clickQty: state => state.qty,
	clickValore: state => state.valore,
	clickAchvReq: state => state.achvs_req,
}

const mutations = {
	countClick: state => state.qty++,
	incrClickValore: state => state.valore *= state.achv_upgrade,
	incrAchvClicksReq: state => state.achvs_req *= 5,
	incrAchvUpgrade: state => state.achv_upgrade *= 1.4
}

const actions = {
	achvClick: function ({ commit }) {
		if (state.qty >= state.achvs_req) {
			commit('incrClickValore')
			commit('incrAchvClicksReq')
			commit('incrAchvUpgrade')
			alert("Click potenziato di: " + state.achv_upgrade.toFixed(1))
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