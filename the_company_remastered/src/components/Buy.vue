<template>
	<div class="buy">
		<h1 class="buy__heading-primary">Buy</h1>
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
import { mapGetters, mapMutations } from 'vuex';

export default {
	
	methods: {
		...mapMutations(['buyDipendenti', 'buyNegozi']),
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