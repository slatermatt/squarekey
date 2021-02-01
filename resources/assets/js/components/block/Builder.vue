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
	import Services from '../block/Services';
	import Cta from '../block/Cta';
	import ContactForm from '../block/ContactForm';

	export default {
		components: {
			Intro,
			Split,
			Services,
			Cta,
			ContactForm,
		},

		props: {
			components: {
				type: Array,
				required: true,
			},
		},
	};
</script>
