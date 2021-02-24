<template>
	<div class="buttons">
		<button @click="action" class="btn">{{ text }}{{ value }}{{ text2 }}</button>
	</div>
</template>

<script>

export default {
	props: [
		'text',
		'value',
		'text2',
	],

	methods: {
		action() {
			this.$emit('action')
		}
	}
}
</script>