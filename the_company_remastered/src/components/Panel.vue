<template>
	<div class="panel">
		<app-buy/>
		<!--app-upgrade/-->
	</div>
</template>

<script>
import Buy from './Buy.vue'
// import Upgrade from "./Upgrade.vue"

export default {

	components: {
		appBuy: Buy,
		// appUpgrade: Upgrade,
	},
}
</script>