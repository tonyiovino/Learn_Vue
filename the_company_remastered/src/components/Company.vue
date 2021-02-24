<template>
	<div class="company">
		<!-- Soldi -->
		<p>oleeee: {{ dipendenti.sec }}</p>
		<p>feiuiuebfe: {{ negozi.sec }}</p>

		<div class="view-money-box">
			<div class="view-money">
				<span class="view-money__amount">Soldi: {{ soldi.quantità.toFixed(2) }}$</span>
				<span class="view-money__second">{{ soldi.sec.toFixed(2) }}$/{{ tempo.quantità/1000 }}s</span>
			</div>
		</div>
		<!-- Money Click Button -->
		<div class="money-btn-box">
			<button class="money-btn" @click="soldi_click">
				Lavora: +{{ click.valore.toFixed(2)}}$
			</button>
		</div>
		<!-- Panel -->
		<div class="panel-box">
			<!-- <app-panel/> -->
		</div>
		<div class="achievements-box">
			<app-achievements/>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
// import Panel from './Panel.vue'
import Achievements from './Achievements.vue'

export default {

	methods: {
		...mapMutations(['soldiClick', 'addSec']),

		soldi_click: function() {
			this.soldiClick()
		},
		add_sec: function () {
			this.addSec()
		},
	},

	computed: {
		...mapGetters(['soldi', 'click', 'tempo', 'dipendenti', 'negozi']),
	},

	mounted () {
		setInterval(this.add_sec, this.tempo.quantità);
	},

	components: {
		// appPanel: Panel,
		appAchievements: Achievements,
	},
}
</script>