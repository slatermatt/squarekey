<template>
	<footer class="relative z-site-footer text-center border-t-2 border-grey-300">
		<div class="x-container py-4">
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

			<div class="mt-4">
				<p v-html="cCopy" />
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
	},

	computed: {
		cCopy() {
			const year = new Date().getFullYear();

			return `&copy;${year} Squarekey`;
		},
	},
};
</script>
