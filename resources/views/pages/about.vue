<template>
	<div>
		<!-- <intro v-bind="$data.model.intro" /> -->

		<pre v-text="$data" />
	</div>
</template>

<script>
import head from '../../assets/js/mixins/head';

export default {
	mixins: [head],

	async asyncData ({ $content }) {
		return await $content('about').fetch();
	},

};
</script>
