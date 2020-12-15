<template>
	<footer class="relative z-site-footer text-center">
		<div>
			<a
				v-for="(link, index) in $props.social"
				:key="index"
				:href="link.url"
				v-html="link.title"
			/>
		</div>

		<div>
			&copy; <span v-text="$data.year" />
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

	data() {
		return {
			year: new Date().getFullYear(),
		};
	},
};
</script>
