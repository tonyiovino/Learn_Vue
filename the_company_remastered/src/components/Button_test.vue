<template>
	<button @click="incr">par o cazz</button>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
	methods: {
		...mapMutations(['mod_counter']),
		incr: function() {
			this.mod_counter()
		}
	}
}
</script>