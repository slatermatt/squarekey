<template>
	<div class="space-y-10 md:space-y-16 xl:space-y-24">
		<component
			:is="component.type"
			v-for="(component, index) in $props.components"
			:key="index"
			v-bind="component"
		/>
	</div>
</template>

<script>
	import Intro from '../block/Intro';
	import Split from '../block/Split';

	export default {
		components: {
			Intro,
			Split,
		},

		props: {
			components: {
				type: Array,
				required: true,
			},
		},
	};
</script>
