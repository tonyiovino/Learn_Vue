import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		Soldi: {
			quantità: 100000,
			sec: 0,
		},
		Dipendenti: {
			quantità: 0,
			valore: 1,
			costo_buy: 10,
			costo_upgrade: 100,
		},
		Negozi: {
			quantità: 0,
			valore: 10,
			costo_buy: 1000,
			costo_upgrade: 1500,
		},
		Tempo: {
			quantità: 1000,
			costo_upgrade: 30000,
		},
		Click: {
			valore: 0.1,
			costo_upgrade: 1,
		},
	},
	getters: {
		soldi: function(state){
			return state.Soldi
		},
		dipendenti: function(state){
			return state.Dipendenti
		},
		negozi: function(state){
			return state.Negozi
		},
		tempo: function(state){
			return state.Tempo
		},
		click: function(state){
			return state.Click
		}
	},
	mutations: {
		// mod_counter: function(state){
		// 	state.counter++;
		// 	return state
		// },
		soldiClick: function(state){
			state.Soldi.quantità += state.Click.valore;
			return state
		},
		addSec: function(state) {
			state.Soldi.sec = state.dipendentiEntrate + state.negoziEntrate;
			state.Soldi.quantità += state.Soldi.sec;
			return state
		},

		buyDipendenti: function(state) {
			if (state.Soldi.quantità >= state.Dipendenti.costo_buy){
				state.Soldi.quantità -= state.Dipendenti.costo_buy;
				state.Dipendenti.quantità += 1;
				state.Dipendenti.costo_buy *= 1.2;
			}
			else {
				alert("Non hai abbastanza soldi!");
			}
			return state
		},
		buyNegozi: function(state) {
			if (state.Soldi.quantità >= state.Negozi.costo_buy) {
				state.Soldi.quantità -= state.Negozi.costo_buy;
				state.Negozi.quantità += 1;
				state.Negozi.costo_buy *= 1.2
			} else {
				alert("Non hai abbastanza soldi!");
			}
			return state
		},

		upgradeDipendenti: function(state) {
			if (state.Soldi.quantità >= state.Dipendenti.costo_upgrade){
				state.Soldi.quantità -= state.Dipendenti.costo_upgrade;
				state.Dipendenti.valore *= 1.2;
				state.Dipendenti.costo_upgrade *= 1.5
			}
			else {
				alert("Non hai abbastanza soldi!");
			}
			return state
		},
		upgradeNegozi: function(state) {
			if (state.Soldi.quantità >= state.Negozi.costo_upgrade) {
				state.Soldi.quantità -= state.Negozi.costo_upgrade;
				state.Negozi.valore *= 1.2;
				state.Negozi.costo_upgrade *= 1.5
			} else {
				alert("Non hai abbastanza soldi!");
			}
			return state
		},
		upgradeClick: function(state) {
			if (state.Soldi.quantità >= state.Click.costo_upgrade) {
				state.Soldi.quantità -= state.Click.costo_upgrade;
				state.Click.valore *= 1.6;
				state.Click.costo_upgrade *= 1.8
			} else {
				alert("Non hai abbastanza soldi!");
			}
			return state
		},
		upgradeTempo: function(state) {
			if (state.Soldi.quantità >= state.Tempo.costo_upgrade) {
				if (state.Tempo.quantità > 50) {
					state.Soldi.quantità -= state.Tempo.costo_upgrade;
					state.Tempo.quantità -= 50;
					state.Tempo.costo_upgrade *= 1.8
				} else {
					alert("Hai raggiunto la velocità massima!");
				}
			} else {
				alert("Non hai abbastanza soldi!");
			}
			return state
		},
	},
	actions: {
	},
	modules: {
	}
})
