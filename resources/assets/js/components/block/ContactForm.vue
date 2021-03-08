<template>
	<div class="x-container relative">
		<vue-friendly-iframe
			class="foo"
			:src="$props.action"
		/>
	</div>
</template>

<script>
	export default {
		props: {
			action: {
				type: String,
				default: null,
			},
		},
	};
</script>

<style>
	.vue-friendly-iframe > iframe {
		width: 100%;
		min-height: 1320px;
	}
</style>
