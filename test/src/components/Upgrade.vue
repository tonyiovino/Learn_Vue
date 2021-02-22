<template>
	<div class="upgrade">
		<h1 class="upgrade__heading-primar">Upgrade</h1>
		<ul class="upgrade__unorder-list">
			<li class="item-list">
				<app-item
					text_item="Valore dipendente: "
					:num_item="value_dipendenti"
					:text_item2="dipendentiEntrate"
				/>
				<app-buttons
					text="Upgrade: "
					:value="price_upgrade_dipendenti"
					text2="$"
					@action="upgradeDipendenti"
				/>
			</li>
			<li class="item-list">
				<app-item
					text_item="Valore negozio: "
					:num_item="value_negozi"
					:text_item2="negoziEntrate"
				/>
				<app-buttons
					text="Upgrade: "
					:value="price_upgrade_negozi"
					text2="$"
					@action="upgradeNegozi"
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
		'value_dipendenti',
		'value_negozi',
		'price_upgrade_dipendenti',
		'price_upgrade_negozi',
		'dipendentiEntrate',
		'negoziEntrate',
	],

	components: {
		appItem: Item, 
		appButtons: Buttons,
	},

	methods: {
		upgradeDipendenti() {
			this.$emit('upgradeDipendenti')
		},
		upgradeNegozi() {
			this.$emit('upgradeNegozi')
		},
	}
}
</script>