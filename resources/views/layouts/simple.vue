<template>
	<div
		v-cloak
		class="flex flex-col min-h-screen bg-brand"
	>
		<main class="relative flex-auto z-site-content">
			<div class="relative z-1">
				<Nuxt />
			</div>

			<div class="opacity-50 hidden lg:block">
				<video
					class="absolute inset-0 w-full h-full object-cover"
					src="/static/img/globe.mov"
					playsinline
					autoplay
					muted
					loop
				/>
			</div>
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
