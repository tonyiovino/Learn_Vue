<template>
	<div class="upgrade">
		<h1 class="upgrade__heading-primary">Upgrade</h1>
		<ul class="upgrade__unorder-list">
			<li class="item-list">
				<span>Valore dipendente: {{ dipendenti.valore }}</span>
				<button @click="upgrade_dipendenti">Upgrade: {{ dipendenti.costo_upgrade }}$</button>
			</li>
			<li class="item-list">
				<span>Valore negozio: {{ negozi.valore }}</span>
				<button @click="upgrade_negozi">Upgrade: {{ negozi.costo_upgrade }}$</button>
			</li>
			<li class="item-list">
				<span>Valore click: {{ click.valore }} </span>
				<button @click="upgrade_click">Upgrade: {{ click.costo_upgrade }}$</button>
			</li>
			<li class="item-list">
				<span>Valore tempo: {{ tempo.quantità/1000 }} s</span>
				<button @click="upgrade_tempo">Upgrade: {{ tempo.costo_upgrade }}$</button>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

export default {

	computed: {
		...mapGetters(['dipendenti', 'negozi', 'click', 'tempo'])
	},

	methods: {
		...mapMutations([
			'upgradeDipendenti',
			'upgradeNegozi',
			'upgradeClick',
			'upgradeTempo'
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
	}
}
</script>