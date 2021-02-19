<template>
	<div class="buttons" role="group">
		<button class="btn">{{ text }} {{ value }}</button>
	</div>
</template>

<script>

export default {
	props: [
		'text',
		'value',
	],
}
</script>