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

        /*achievementClick: function() {
			alert('hey');
            if (this.click.quantità == 100){
            //     alert('Hai raggiunto un obiettivo!');
            //     return this.click.valore *= 1.1
            // } else {
				alert('Hai raggiunto un obiettivo!');
			}
            return 0;
        }*/
	},
}
</script>