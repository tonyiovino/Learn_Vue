<template>
	<div class="achievements">
		<h2 class="heading-secondary">Achievements</h2>

		<ul class="ulist">
			<li class="ulist__item">
				<span>Clicks: {{ clickQty }}</span>
            </li>
		</ul>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
	
	methods: {
		...mapMutations(['']),
	},

	computed: {
        ...mapGetters([
			'clickQty'
		]),
	},
}
</script>