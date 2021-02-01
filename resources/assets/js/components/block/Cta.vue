<template>
	<section class="bg-brand-primary py-10 md:py-16 xl:py-24">
		<div
			:class="[
				'x-container',
				'grid gap-6 items-center',
				'md:grid-cols-4 md:max-w-4xl',
			]"
		>
			<h1
				class="x-h3 text-white md:col-span-3"
				v-text="$props.title"
			/>

			<div class="md:col-span-1">
				<x-button
					v-bind="$props.cta"
					light
				/>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true,
			},

			cta: {
				type: Object,
				required: true,
			},
		},
	};
</script>
