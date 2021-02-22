<template>
	<div class="buy">
		<h1 class="buy__heading-primary">Buy</h1>
		<ul class="buy__unorder-list">
			<li class="item-list">
				<app-item
					text_item="Dipendenti: "
					:num_item="amount_dipendenti"
				/>
				<app-buttons
					text="Compra: "
					:value="price_buy_dipendenti"
					text2="$"
					@action="buyDipendenti"
				/>
			</li>
			<li class="item-list">
				<app-item
					text_item="Negozi: "
					:num_item="amount_negozi"
				/>
				<app-buttons
					text="Compra: "
					:value="price_buy_negozi"
					text2="$"
					@action="buyNegozi"
				/>
			</li>
		</ul>
	</div>
</template>

<script>
import Item from "./Item.vue"
import Buttons from "./Buttons.vue"

export default {

	props: [
		'amount_dipendenti',
		'amount_negozi',
		'price_buy_dipendenti',
		'price_buy_negozi',
	],

	components: {
		appItem: Item,
		appButtons: Buttons,
	},

	methods: {
		buyDipendenti() {
			this.$emit('buyDipendenti')
		},
		buyNegozi() {
			this.$emit('buyNegozi')
		},
	}
}
</script>