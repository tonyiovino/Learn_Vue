<template>
	<div id="app">
		<h1 class="heading-primary">The Company</h1>

		<app-company/>
	</div>
</template>

<script>
import Company from './components/Company.vue'

export default {
	components: {
		appCompany: Company
	}
}
</script>