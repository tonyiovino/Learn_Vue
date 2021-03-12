<template>
	<div class="company">
		<!-- Soldi -->
		<p>Dipendenti al sec: {{ dipendentiSoldiSec }}</p>
		<p>Negozi al sec: {{ negoziSoldiSec }}</p>
		<p>Tempo: {{ tempoQty }}</p>
		<button class="btn prestige" @click="prestigeAll">Prestige</button>

		<div class="money-box">
			<div class="money-box__data">
				<span class="money-box__amount">Soldi: {{ soldiQty.toFixed(2) }}$</span>
				<span class="money-box__second">{{ soldiSec.toFixed(2) }}$/{{ tempoValore/1000 }}s</span>
			</div>
			<div class="money-box__actions">
				<button class="btn btn--primary" @click="soldiClick">Lavora: +{{ clickValore.toFixed(2)}}$</button>
			</div>
		</div>

		<div class="panel">
			<app-buy/>
			<app-upgrade/>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Buy from './Buy.vue'
import Upgrade from "./Upgrade.vue"
// import Achievements from './Achievements.vue'

export default {

	methods: {
		...mapActions([
			'soldiClick',
			'addSec',
			'prestigeAll'
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
		...mapActions([
			''
		])
	},

	created () {
		setInterval(this.addSec, this.tempoValore)
	},

	components: {
		appBuy: Buy,
		appUpgrade: Upgrade,
		// appAchievements: Achievements,
	}
}
</script>