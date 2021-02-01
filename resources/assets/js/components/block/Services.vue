<template>
	<section class="x-container max-w-4xl xl:max-w-6xl">
		<div class="grid gap-x-6 gap-y-10 md:grid-cols-2 md:gap-y-12 xl:gap-y-16">
			<article
				v-for="(service, index) in $props.items"
				:key="index"
			>
				<h1
					class="x-h4"
					v-text="service.title"
				/>

				<p
					class="mt-4"
					v-text="service.content"
				/>

				<x-button
					class="mt-4"
					v-bind="service.cta"
				/>
			</article>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			items: {
				type: Array,
				required: true,
			},
		},
	};
</script>
