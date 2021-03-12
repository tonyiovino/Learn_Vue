import Vue from 'vue'
import Vuex from 'vuex'

import soldi from './modules/soldi'
import tempo from './modules/tempo'
import dipendenti from './modules/dipendenti'
import negozi from './modules/negozi'
import click from './modules/click'
import prestige from './modules/prestige'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		soldi,
		tempo,
		dipendenti,
		negozi,
		click,
		prestige
	},

	state: { },
	getters: { },
	mutations: { },
	actions: { }
})
