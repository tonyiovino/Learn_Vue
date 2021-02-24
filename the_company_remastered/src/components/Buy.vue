<template>
	<div class="buy">
		<h1 class="buy__heading-primary">Buy</h1>
		<ul class="buy__unorder-list">
			<li class="item-list">
				<span>Dipendenti: {{ dipendenti.quantità }}</span>
				<button @click="buy_dipendenti">Compra: {{ dipendenti.costo_buy.toFixed(2) }}$</button>
			</li>
			<li class="item-list">
				<span>Negozi: {{ negozi.quantità }}</span>
				<button @click="buy_negozi">Compra: {{ negozi.costo_buy.toFixed(2) }}$</button>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
	
	methods: {
		...mapMutations(['buyDipendenti', 'buyNegozi']),

		buy_dipendenti: function() {
			this.buyDipendenti()
		},
		buy_negozi: function() {
			this.buyNegozi()
		},
	},

	computed: {
		...mapGetters(['dipendenti', 'negozi'])
	},
}
</script>