<template>
	<intersect
		:type="$props.tag"
		class="x-placeholder relative w-full"
		:class="$props.ratio ? $props.ratio : 'pt-9/16'"
		@intersect="$data.visible = true"
	>
		<transition name="x-fade">
			<slot v-if="$data.visible" />
		</transition>
	</intersect>
</template>

<script>
	export default {
		props: {
			tag: {
				type: String,
				default: 'div',
			},

			ratio: {
				type: String,
				default: null,
			},
		},

		data() {
			return {
				visible: false,
			};
		},
	}
</script>
