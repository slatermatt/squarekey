<template>
	<div class="flex flex-col items-center justify-center min-h-screen h-full">
		<h1
			class="text-center max-w-2xl x-h1"
			v-text="$data.model.title"
		/>

		<x-button
			class="mt-8 md:mt-10 xl:mt-12"
			v-bind="$data.model.cta"
		/>
	</div>
</template>

<script>
	import head from '../../assets/js/mixins/head';

	export default {
		mixins: [head],

		layout: 'simple',

		async asyncData ({ $content }) {
			return await $content('index').fetch();
		},
	};
</script>
