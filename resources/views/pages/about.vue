<template>
	<builder
		:components="$data.model.builder"
		class="mt-10 md:mt-16 xl:mt-24"
	/>
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
