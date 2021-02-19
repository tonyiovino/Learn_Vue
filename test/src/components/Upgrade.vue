<template>
	<div class="upgrade">
		<header class="header">
			<app-dipendenti/>
			<app-dipendenti/>
			<app-dipendenti/>
			<app-dipendenti/>
		</header>
	</div>
</template>

<script>
import Dipendenti from "./Dipendenti.vue"

export default {

	data() {
		return {
		
		}
	},

	components: {
		appDipendenti: Dipendenti, 
	}
}
</script>