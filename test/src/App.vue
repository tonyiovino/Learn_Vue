<template>
	<div id="app">
		<app-company/>
		<!-- <app-small-game /> -->
	</div>
</template>

<script>
// import SmallGame from './components/SmallGame.vue'
import Company from './components/Company.vue'

export default {
	name: 'App',

	components: {
		// appSmallGame: SmallGame,
		appCompany: Company,
	}
}
</script>