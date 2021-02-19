<template>
	<footer class="relative z-site-footer bg-white">
		<div class="x-container py-16 md:py-24 xl:py-40">
			<div class="flex justify-between">
				<logo />

				<div class="flex items-center space-x-4">
					<a
						v-for="(link, index) in $props.links"
						:key="index"
						:href="link.url"
						v-text="link.title"
					/>
				</div>
			</div>

			<hr class="border-grey-400 mt-6">

			<div class="flex justify-between mt-6">
				<p
					class="mt-4 text-center md:text-left"
					v-html="cCopy"
				/>

				<div class="flex items-center space-x-4">
					<p>Follow us:</p>

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

		links: {
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
