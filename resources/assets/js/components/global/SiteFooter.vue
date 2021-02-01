<template>
	<footer class="relative z-site-footer bg-brand-tertiary">
		<div class="x-container py-4">
			<div class="flex justify-between">
				<logo />

				<div class="space-x-4">
					<a
						v-for="(link, index) in $props.social"
						:key="index"
						:href="link.url"
					>
						<icon
							:name="link.icon"
							size="w-8 h-8"
						/>
					</a>
				</div>
			</div>

			<p
				class="mt-4 text-center md:text-left"
				v-html="cCopy"
			/>
		</div>
	</footer>
</template>

<script>
export default {
	inheritAttrs: false,

	props: {
		social: {
			type: Array,
			default: null,
		},
	},

	computed: {
		cCopy() {
			const year = new Date().getFullYear();

			return `&copy;${year} Squarekey`;
		},
	},
};
</script>
