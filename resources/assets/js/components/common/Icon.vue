<template>
	<svg class="inline-block w-em h-em fill-current align-top">
		<use
			v-for="computedName in computedNames"
			:key="computedName"
			:xlink:href="`${$props.sprite}#${computedName}`"
			v-bind="$props.use"
		/>
	</svg>
</template>

<script>
	export default {
		props: {
			name: {
				type: String,
				default: null,
			},

			names: {
				type: Array,
				default: null,
			},

			sprite: {
				type: String,
				default: '/static/img/sprite.svg',
			},

			use: {
				type: Object,
				default: null,
			},
		},

		computed: {
			computedNames() {
				return this.$props.names || [this.$props.name];
			},
		},
	};
</script>
