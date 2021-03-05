<template>
	<div class="company">
		<!-- Soldi -->
		<p>Dipendenti al sec: {{ dipendentiSoldiSec }}</p>
		<p>Negozi al sec: {{ negoziSoldiSec }}</p>
		<p><strong>Tempo {{ tempoQty }}</strong></p>

		<div class="money-box">
			<div class="money-box__data">
				<span class="money-box__amount">Soldi: {{ soldiQty.toFixed(2) }}$</span>
				<span class="money-box__second">{{ soldiSec.toFixed(2) }}$/{{ tempoValore/1000 }}s</span>
			</div>
			<div class="money-box__actions">
				<button class="btn btn--primary" @click="guadagnaSoldi">Lavora: +{{ clickValore.toFixed(2)}}$</button>
			</div>
		</div>

		<app-panel/>

		<app-achievements/>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Panel from './Panel.vue'
import Achievements from './Achievements.vue'

export default {

	methods: {
		...mapActions([
			'guadagnaSoldi','addSec'
		])
	},

	computed: {
		...mapGetters([
			'soldiQty',
			'soldiSec',
			'tempoQty',
			'tempoValore',
			'clickQty',
			'clickValore',
			'dipendentiSoldiSec',
			'negoziSoldiSec'
		]),

	},
	
	created () {
		setInterval(this.addSec, this.tempoValore);
	},

	components: {
		appPanel: Panel,
		appAchievements: Achievements,
	},
}
</script>