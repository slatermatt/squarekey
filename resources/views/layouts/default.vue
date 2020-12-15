<template>
	<div>
		<site-header
			v-bind="$data.global"
		/>

		<main class="relative z-site-content">
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
