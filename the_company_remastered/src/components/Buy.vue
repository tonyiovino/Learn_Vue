<template>
	<div class="buy">
		<h2 class="heading-secondary">Buy</h2>
		<ul class="buy__unorder-list">
			<li class="item-list">
				<span class="item-list__item-viewer">Dipendenti: {{ dipendentiQty }}</span>
				<button class="item-list__item-button" @click="buyDipendenti">Compra: {{ dipendentiCostoBuy.toFixed(2) }}$</button>
			</li>
			<li class="item-list">
				<span class="item-list__item-viewer">Negozi: {{ negoziQty }}</span>
				<button class="item-list__item-button" @click="buyNegozi">Compra: {{ negoziCostoBuy.toFixed(2) }}$</button>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	
	methods: {
		...mapActions(['buyDipendenti', 'buyNegozi']),
	},

	computed: {
		...mapGetters([
			'dipendentiQty',
			'dipendentiCostoBuy',
			'negoziQty',
			'negoziCostoBuy'
		])
	},
}
</script>