<template>
	<section
		:class="[
			'bg-gradient-to-br from-brand-primary to-blue',
			'py-16 md:py-24 xl:py-40',
		]"
	>
		<div
			:class="[
				'x-container',
				'grid gap-6 items-center',
				'md:grid-cols-4 md:max-w-4xl',
				'xl:max-w-6xl',
			]"
		>
			<h1
				class="x-h2 text-white md:col-span-3"
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
