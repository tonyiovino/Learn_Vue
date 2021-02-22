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
			:price_upgrade_dipendenti="price_upgrade_dipendenti"
			:price_upgrade_negozi="price_upgrade_negozi"
			@upgradeDipendenti="upgradeDipendenti"
			@upgradeNegozi="upgradeNegozi"
		/>
	</div>
</template>

<script>
import Buy from "./Buy.vue"
import Upgrade from "./Upgrade.vue"

export default {

	props: [
		'amount_dipendenti',
		'amount_negozi',
		'price_buy_dipendenti',
		'price_buy_negozi',
		'price_upgrade_dipendenti',
		'price_upgrade_negozi',
		'value_dipendenti',
		'value_negozi',
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
	}
}
</script>