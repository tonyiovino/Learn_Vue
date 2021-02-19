<template>
	<div class="dipendenti">
		<span>Compra i dipendenti:</span>
		<app-buttons @:click="buyDipendenti" text="Prezzo: " :value="costoDipendenti"/>
	</div>
</template>

<script>
import Buttons from "./Buttons.vue"

export default {

	data() {
		return {
			costoDipendenti: 100
		}
	},

	components: {
		appButtons: Buttons, 
	},

	methods: {
		<
	} 
}
</script>