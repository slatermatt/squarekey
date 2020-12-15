<template>
	<header class="relative z-site-header text-center">
		<div>
			<h1>Site header</h1>
		</div>

		<div>
			<nuxt-link
				v-for="(link, index) in $props.links"
				:key="index"
				:to="link.url"
				v-html="link.title"
			/>
		</div>
	</header>
</template>

<script>
export default {
	inheritAttrs: false,

	props: {
		links: {
			type: Array,
			default: null,
		},
	},
};
</script>
