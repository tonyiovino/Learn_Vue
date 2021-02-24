<template>
	<div class="upgrade">
		<h1 class="upgrade__heading-primary">Upgrade</h1>
		<ul class="upgrade__unorder-list">
			<li class="item-list">
				<span>Valore dipendente: {{ dipendenti.valore.toFixed(2) }}</span>
				<button @click="upgrade_dipendenti">Upgrade: {{ dipendenti.costo_upgrade.toFixed(2) }}$</button>
			</li>
			<li class="item-list">
				<span>Valore negozio: {{ negozi.valore.toFixed(2) }}</span>
				<button @click="upgrade_negozi">Upgrade: {{ negozi.costo_upgrade.toFixed(2) }}$</button>
			</li>
			<li class="item-list">
				<span>Valore click: {{ click.valore.toFixed(2) }} </span>
				<button @click="upgrade_click">Upgrade: {{ click.costo_upgrade.toFixed(2) }}$</button>
			</li>
			<li class="item-list">
				<span>Valore tempo: {{ tempo.quantità/1000 }} s</span>
				<button @click="upgrade_tempo">Upgrade: {{ tempo.costo_upgrade.toFixed(2) }}$</button>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

export default {

	methods: {
		...mapMutations([
			'upgradeDipendenti',
			'upgradeNegozi',
			'upgradeClick',
			'upgradeTempo',
			'addSec'
		]),

		upgrade_dipendenti: function() {
			this.upgradeDipendenti()
		},
		upgrade_negozi: function() {
			this.upgradeNegozi()
		},
		upgrade_click: function() {
			this.upgradeClick()
		},
		upgrade_tempo: function() {
			this.upgradeTempo()
		},
	},

	computed: {
		...mapGetters(['dipendenti', 'negozi', 'click', 'tempo'])
	},
}
</script>