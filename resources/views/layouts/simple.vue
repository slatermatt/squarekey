<template>
	<div
		v-cloak
		class="flex flex-col min-h-screen"
	>
		<site-header
			v-bind="$data.global"
		/>

		<site-navigation
			v-if="$store.state.nav.navActive"
			v-bind="$data.global"
		/>

		<main class="relative flex-auto bg-brand-tertiary z-site-content">
			<Nuxt />
		</main>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				global: require('../../content/global.json'),
			};
		},
	};
</script>
