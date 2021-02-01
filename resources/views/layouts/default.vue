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

		<main class="relative flex-auto z-site-content">
			<transition
				name="x-fade"
				mode="out-in"
			>
				<Nuxt />
			</transition>
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
