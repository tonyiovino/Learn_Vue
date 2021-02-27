import Vue from 'vue'
import Vuex from 'vuex'

import soldi from './modules/soldi'
import tempo from './modules/tempo'
import dipendenti from './modules/dipendenti'
import negozi from './modules/negozi'
import click from './modules/click'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		soldi,
		tempo,
		dipendenti,
		negozi,
		click
	},

	state: { },
	getters: { },
	mutations: {
		// mod_counter: function(state){
		// 	state.counter++;
		// 	return state
		// },
		
		

		/*buyDipendenti: function(state) {
			if (state.soldi.quantità >= state.dipendenti.costo_buy){
				state.soldi.quantità -= state.dipendenti.costo_buy;
				state.dipendenti.quantità += 1;
				state.dipendenti.costo_buy *= 1.2;
				state.dipendenti.sec += state.dipendenti.valore
			}
			else {
				alert("Non hai abbastanza soldi!");
			}
			return state
		},
		buyNegozi: function(state) {
			if (state.soldi.quantità >= state.negozi.costo_buy) {
				state.soldi.quantità -= state.negozi.costo_buy;
				state.negozi.quantità += 1;
				state.negozi.costo_buy *= 1.2;
				state.negozi.sec += state.negozi.valore
			} else {
				alert("Non hai abbastanza soldi!");
			}
			return state
		},

		upgradeDipendenti: function(state) {
			if (state.soldi.quantità >= state.dipendenti.costo_upgrade){
				state.soldi.quantità -= state.dipendenti.costo_upgrade;
				state.dipendenti.valore *= 1.4;
				state.dipendenti.costo_upgrade *= 1.6;
				state.dipendenti.sec *= 1.4
			}
			else {
				alert("Non hai abbastanza soldi!");
			}
			return state
		},
		upgradeNegozi: function(state) {
			if (state.soldi.quantità >= state.negozi.costo_upgrade) {
				state.soldi.quantità -= state.negozi.costo_upgrade;
				state.negozi.valore *= 1.4;
				state.negozi.costo_upgrade *= 1.6
				state.dipendenti.sec *= 1.4
			} else {
				alert("Non hai abbastanza soldi!");
			}
			return state
		},
		upgradeClick: function(state) {
			if (state.soldi.quantità >= state.click.costo_upgrade) {
				state.soldi.quantità -= state.click.costo_upgrade;
				state.click.valore *= 1.6;
				state.click.costo_upgrade *= 1.8
			} else {
				alert("Non hai abbastanza soldi!");
			}
			return state
		},
		upgradeTempo: function(state) {
			if (state.soldi.quantità >= state.tempo.costo_upgrade) {
				if (state.tempo.quantità > 50) {
					state.soldi.quantità -= state.tempo.costo_upgrade;
					state.tempo.quantità -= 50;
					state.tempo.costo_upgrade *= 1.8;
				} else {
					alert("Hai raggiunto la velocità massima!");
				}
			} else {
				alert("Non hai abbastanza soldi!");
			}
			return state
		},*/
	},
	actions: {
	}
})
