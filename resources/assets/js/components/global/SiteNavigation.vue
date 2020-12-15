<template>
	<nav
		:class="[
			'absolute top-0 left-0 w-full mt-16',
			'bg-brand-secondary text-white z-site-navigation',
			'md:hidden',
		]"
	>
		<div class="x-container flex flex-col items-center justify-center space-y-5 my-10">
			<a
				v-for="(link, index) in $props.links"
				:key="index"
				:href="link.url"
				class="text-inherit"
				@click.prevent="onNavigate(link.url)"
				v-html="link.title"
			/>
		</div>
	</nav>
</template>

<script>
	import { mapMutations } from 'vuex';

	export default {
		inheritAttrs: false,

		props: {
			links: {
				type: Array,
				default: null,
			},
		},

		methods: {
			onNavigate(url) {
				this.toggle();

				this.$nextTick(() => this.$router.push({
					path: url,
				}));
			},

			...mapMutations({
				toggle: 'nav/toggle',
			}),
		},
	};
</script>
