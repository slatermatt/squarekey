<template>
	<section
		:class="{
			'bg-brand-tertiary py-10 md:py-16 xl:py-24': $props.flipped,
		}"
	>
		<div class="x-container">
			<div
				:class="[
					'grid gap-6',
					'lg:grid-cols-2',
					'lg:items-center',
				]"
			>
				<div class="max-w-lg mx-auto lg:max-w-sm">
					<h1
						class="x-h3"
						v-text="$props.title"
					/>

					<p
						v-if="$props.content"
						class="mt-4"
						v-text="$props.content"
					/>
				</div>

				<div
					class="order-first"
					:class="{
						'lg:order-none': $props.flipped,
					}"
				>
					<placeholder ratio="pt-12/16">
						<img v-bind="$props.img">
					</placeholder>
				</div>
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

			content: {
				type: String,
				default: null,
			},

			img: {
				type: Object,
				required: true,
			},

			flipped: Boolean,
		},
	};
</script>
