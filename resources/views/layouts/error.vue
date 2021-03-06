<template>
	<div class="mt-10 md:mt-16 xl:mt-24">
		<div class="x-container text-center">
			<h1 class="x-h1 x-fade">
				{{ $props.error.statusCode }} - {{ $props.error.message }}
			</h1>

			<x-button
				class="mt-6"
				title="Back home"
				url="/"
			/>
		</div>
	</div>
</template>

<script>
export default {
	layout: 'default',

	props: {
		error: {
			type: Object,
			default: null,
		},
	},

	head () {
		return {
			title: this.$props.error.statusCode,
		};
	},
};
</script>
