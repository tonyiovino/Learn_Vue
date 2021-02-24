<template>
	<div class="achievements">
		<h1 class="achievements__heading-primary">Achievements</h1>
		<ul class="achievements__unorder-list">
			<li class="achievements-list">
				<span>Clicks: {{ click.quantità }}</span>
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
        ...mapGetters(['click']),

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