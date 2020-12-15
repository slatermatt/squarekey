<template>
	<div class="flex flex-col min-h-screen">
		<site-header
			v-bind="$data.global"
		/>

		<site-navigation
			v-if="$store.state.nav.navActive"
			v-bind="$data.global"
		/>

		<main class="relative flex-auto bg-grey-100 z-site-content">
			<Nuxt />
		</main>

		<site-footer
			v-bind="$data.global"
		/>
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
