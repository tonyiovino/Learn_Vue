<template>
	<div class="company">
		<!-- Soldi -->
		<div class="view-money-box">
			<div class="view-money">
				<h1 class="view-money__amount">Soldi: {{ soldi.quantità.toFixed(2) }}$</h1>
				<h1 class="view-money__second">{{ soldi.sec.toFixed(2) }}$/{{ tempo.quantità/1000 }}s</h1>
			</div>
		</div>
		<!-- Money Click Button -->
		<div class="money-btn-box">
			<button class="money-btn" @click="soldi_click">
				Lavora: +{{ (click.valore).toFixed(2) }}$
			</button>
		</div>
		<!-- Panel -->
		<div class="panel-box">
			<app-panel/>
		</div>
	</div>
		
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import Panel from './Panel.vue'

export default {

	mounted () {
		setInterval(this.addSec, this.tempo.quantità);
	},
	methods: {
		...mapMutations(['soldiClick']),
		soldi_click: function() {
			this.soldiClick()
		}
	},

	computed: {
		...mapGetters(['soldi', 'click', 'tempo']),

		// dipendentiEntrate: function(){
		// 	if (this.Dipendenti.quantità >= 1){
		// 		return this.Dipendenti.quantità * this.Dipendenti.valore;
		// 	}
		// 	else {
		// 		return 0;
		// 	}
		// },
		// negoziEntrate: function(){
		// 	if (this.Negozi.quantità >= 1){
		// 		return this.Negozi.quantità * this.Negozi.valore;
		// 	}
		// 	else {
		// 		return 0;
		// 	}
		// },
	},

	components: {
		appPanel: Panel,
	},
}
</script>