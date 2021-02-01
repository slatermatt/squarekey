<template>
	<div
		v-cloak
		class="flex flex-col min-h-screen"
	>
		<main class="relative flex-auto z-site-content">
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
