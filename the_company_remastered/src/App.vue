<template>
	<div id="app">
		<app-company/>
		<!-- {{ counter }}
		{{ speed }}
		<app-button/> -->
	</div>
</template>

<script>
// import {mapGetters} from 'vuex'
// import Button from './components/Button_test.vue'
import Company from './components/Company.vue'

export default {
	// computed: {
	// 	...mapGetters(['counter', 'speed'])
	// },
	components: {
		// appButton: Button
		appCompany: Company
	}
}
</script>