<template>
	<div class="item">
		<h1 class="item__heading-primary">{{ text_item }}{{ num_item }}{{ text_item2 }}</h1>
	</div>
</template>

<script>

export default {

	props: [
		'text_item',
		'num_item',
		'text_item2',
	],

	methods: {
		action() {
			this.$emit('action')
		}
	},
}
</script>