<template>
	<div class="company">
		<!-- Soldi -->
		<p>oleeee: {{ dipendentiSec }}</p>
		<p>feiuiuebfe: {{ negoziSec }}</p>

		<div class="money-box">
			<div class="money-box__data">
				<span class="money-box__amount">Soldi: {{ soldiQty.toFixed(2) }}$</span>
				<span class="money-box__second">{{ soldiSec.toFixed(2) }}$/{{ tempoQty/1000 }}s</span>
			</div>
			<div class="money-box__actions">
				<button class="btn btn--primary" @click="guadagnaSoldi">Lavora: +{{ clickValore.toFixed(2)}}$</button>
			</div>
		</div>

		<!-- Panel -->
		<div class="panel-box">
			<app-panel/>
		</div>

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
			'guadagnaSoldi',
			'addSec'
		])
	},

	computed: {
		...mapGetters([
			'soldiQty',
			'soldiSec',
			'tempoQty',
			'clickQty',
			'dipendentiSec',
			'negoziSec',
			'clickValore'
		]),
	},

	created () {
		setInterval(this.addSec, this.tempoQty);
	},

	components: {
		appPanel: Panel,
		appAchievements: Achievements,
	},
}
</script>