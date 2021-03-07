<template>
	<div class="achievements">
		<h2 class="heading-secondary">Achievements</h2>

		<ul class="ulist achv-ulist">
			<li class="achv-list">
				<span class="achv-list__achv-button">Clicks: {{ clickQty }} ==> {{ clickAchvReq }}</span>
				<button class="achv-list__achv-button" @click="achvClick">Claim</button>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	
	methods: {
		...mapActions(['achvClick']),
	},

	computed: {
		...mapGetters([
			'clickQty',
			'clickAchvReq'
		]),
	},

}
</script>