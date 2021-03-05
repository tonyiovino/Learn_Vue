<template>
	<div class="upgrade">
		<h1 class="upgrade__heading-primary">Upgrade</h1>
		<ul class="upgrade__unorder-list">
			<!--li class="item-list">
				<span class="item-list__item-viewer">Valore dipendente: {{ dipendentiValore.toFixed(2) }}</span>
				<button class="item-list__item-button" @click="upgradeDipendenti">Upgrade: {{ dipendentiCostoUpgrade.toFixed(2) }}$</button>
			</li>
			<li class="item-list">
				<span class="item-list__item-viewer">Valore negozio: {{ negoziValore.toFixed(2) }}</span>
				<button class="item-list__item-button" @click="upgradeNegozi">Upgrade: {{ negoziCostoUpgrade.toFixed(2) }}$</button>
			</li>
			<li class="item-list">
				<span class="item-list__item-viewer">Valore click: {{ clickValore.toFixed(2) }} </span>
				<button class="item-list__item-button" @click="upgradeClick">Upgrade: {{ clickCostoUpgrade.toFixed(2) }}$</button>
			</li>
			<li class="item-list">
				<span class="item-list__item-viewer">Valore tempo: {{ tempoQuantità/1000 }}s</span>
				<button class="item-list__item-button" @click="upgradeTempo">Upgrade: {{ tempoCostoUpgrade.toFixed(2) }}$</button-->
			<!--/li-->
		</ul>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {

	methods: {
		...mapMutations([
			'upgradeDipendenti',
			'upgradeNegozi',
			'upgradeClick',
			'upgradeTempo',
			'addSec'
		]),
	},

	computed: {
		...mapGetters([
			'dipendentiValore',
			'dipendentiCostoUpgrade',
			'clickValore',
			'clickCostoUpgrade',
			'tempoQuantità',
			'tempoCostoUpgrade'
		])
	},
}
</script>