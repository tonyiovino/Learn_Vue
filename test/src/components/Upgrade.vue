<template>
	<div class="upgrade">
		<h1 class="upgrade__heading-primary">Upgrade</h1>
		<ul class="upgrade__unorder-list">
			<li class="item-list">
				<app-item
					text_item="Valore dipendente: "
					:num_item="value_dipendenti"
					text_item2="$"
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
					text_item2="$"
				/>
				<app-buttons
					text="Upgrade: "
					:value="price_upgrade_negozi"
					text2="$"
					@action="upgradeNegozi"
				/>
			</li>
			<li class="item-list">
				<app-item
					text_item="Valore click: "
					:num_item="value_click"
					text_item2="$"
				/>
				<app-buttons
					text="Upgrade: "
					:value="price_upgrade_click"
					text2="$"
					@action="upgradeClick"
				/>
			</li>
			<!-- Work in progress
			<li class="item-list">
				<app-item
					text_item="Valore tempo: "
					:num_item="value_tempo"
					text_item2="s"
				/>
				<app-buttons
					text="Upgrade: "
					:value="price_upgrade_tempo"
					text2="$"
					@action="upgradeTempo"
				/>
			</li> -->
		</ul>
	</div>
</template>

<script>
import Item from "./Item.vue"
import Buttons from "./Buttons.vue"

export default {

	props: [
		'dipendentiEntrate',
		'negoziEntrate',
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
		upgradeClick() {
			this.$emit('upgradeClick')
		},
		upgradeTempo() {
			this.$emit('upgradeTempo')
		},
	}
}
</script>