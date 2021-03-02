<template>
	<div class="x-container flex flex-col items-center justify-center min-h-screen h-full">
		<div class="max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
			<logo />

			<h1
				:class="[
					'x-h1 x-fade mt-2',
					'xl:mt-5',
				]"
				v-text="$data.model.title"
			/>

			<x-button
				class="mt-8 md:mt-10 xl:mt-12"
				v-bind="$data.model.cta"
			/>
		</div>
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
