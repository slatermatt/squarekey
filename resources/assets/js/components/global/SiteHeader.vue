<template>
	<header class="relative z-site-header text-center border-b-2 border-grey-300 h-16 xl:h-auto">
		<div class="x-container flex items-center justify-between py-4">
			<router-link
				:class="[
					'relative block w-full max-w-logo',
					'xl:max-w-logo-xl',
				]"
				to="/"
			>
				<placeholder ratio="pt-logo">
					<img
						src="//placehold.it/491x127?text=Squarekey"
						alt="Squarekey"
					>
				</placeholder>
			</router-link>

			<div class="md:hidden">
				<button
					class="flex items-center p-2"
					@click="toggle"
				>
					<icon :name="cNavActive ? 'close' : 'burger'" />
				</button>
			</div>

			<div class="hidden space-x-4 items-center md:flex">
				<nuxt-link
					v-for="(link, index) in $props.links"
					:key="index"
					:to="link.url"
					v-html="link.title"
				/>
			</div>
		</div>
	</header>
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

		computed: {
			cNavActive() {
				return this.$store.state.nav.navActive;
			},
		},

		methods: {
			...mapMutations({
				toggle: 'nav/toggle',
			}),
		},
	};
</script>
