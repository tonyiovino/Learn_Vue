<template>
	<div class="panel">
		<app-buy
			:amount_dipendenti="amount_dipendenti"
			:amount_negozi="amount_negozi"
			:price_buy_dipendenti="price_buy_dipendenti"
			:price_buy_negozi="price_buy_negozi"
			@buyDipendenti="buyDipendenti"
			@buyNegozi="buyNegozi"
		/>
		<app-upgrade
			:value_dipendenti="value_dipendenti"
			:value_negozi="value_negozi"
			:value_click="value_click"
			:value_tempo="value_tempo"
			:price_upgrade_dipendenti="price_upgrade_dipendenti"
			:price_upgrade_negozi="price_upgrade_negozi"
			:price_upgrade_click="price_upgrade_click"
			:price_upgrade_tempo="price_upgrade_tempo"
			@upgradeDipendenti="upgradeDipendenti"
			@upgradeNegozi="upgradeNegozi"
			@upgradeClick="upgradeClick"
			@upgradeTempo="upgradeTempo"
		/>
	</div>
</template>

<script>
import Buy from "./Buy.vue"
import Upgrade from "./Upgrade.vue"

export default {

	props: [
		/* Buy Props */
		'amount_dipendenti',
		'amount_negozi',
		'price_buy_dipendenti',
		'price_buy_negozi',

		/* Upgrade Props */
		'value_dipendenti',
		'value_negozi',
		'value_click',
		'value_tempo',
		'price_upgrade_dipendenti',
		'price_upgrade_negozi',
		'price_upgrade_click',
		'price_upgrade_tempo',
	],

	components: {
		appBuy: Buy, 
		appUpgrade: Upgrade, 
	},

	methods: {
		buyDipendenti() {
			this.$emit('buyDipendenti')
		},
		buyNegozi() {
			this.$emit('buyNegozi')
		},
		upgradeDipendenti() {
			this.$emit('upgradeDipendenti')
		},
		upgradeNegozi() {
			this.$emit('upgradeNegozi')
		},
		upgradeClick() {
			this.$emit('upgradeClick')
		},
		upgradeTempo() {
			this.$emit('upgradeTempo')
		},
	}
}
</script>