<template>
	<div id="app">
		<!-- <app-upgrade/> -->
		<app-company/>
		<!-- <app-small-game /> -->
	</div>
</template>

<script>
// import Upgrade from './components/Upgrade.vue'
// import SmallGame from './components/SmallGame.vue'
import Company from './components/Company.vue'

export default {
	name: 'App',

	components: {
		// appUpgrade: Upgrade,
		// appSmallGame: SmallGame,
		appCompany: Company,
	}
}
</script>