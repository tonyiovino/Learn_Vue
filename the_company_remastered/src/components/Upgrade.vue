<template>
	<div class="upgrade">
		<h1 class="upgrade__heading-primary">Upgrade</h1>
		<ul class="upgrade__unorder-list">
			<li class="item-list">
				<span class="item-list__item-viewer">Valore dipendente: {{ dipendenti.valore.toFixed(2) }}</span>
				<button class="item-list__item-button" @click="upgradeDipendenti">Upgrade: {{ dipendenti.costo_upgrade.toFixed(2) }}$</button>
			</li>
			<li class="item-list">
				<span class="item-list__item-viewer">Valore negozio: {{ negozi.valore.toFixed(2) }}</span>
				<button class="item-list__item-button" @click="upgradeNegozi">Upgrade: {{ negozi.costo_upgrade.toFixed(2) }}$</button>
			</li>
			<li class="item-list">
				<span class="item-list__item-viewer">Valore click: {{ click.valore.toFixed(2) }} </span>
				<button class="item-list__item-button" @click="upgradeClick">Upgrade: {{ click.costo_upgrade.toFixed(2) }}$</button>
			</li>
			<li class="item-list">
				<span class="item-list__item-viewer">Valore tempo: {{ tempo.quantità/1000 }} s</span>
				<button class="item-list__item-button" @click="upgradeTempo">Upgrade: {{ tempo.costo_upgrade.toFixed(2) }}$</button>
			</li>
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
		...mapGetters(['dipendenti', 'negozi', 'click', 'tempo'])
	},
}
</script>