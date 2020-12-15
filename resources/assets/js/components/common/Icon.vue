<template>
	<svg
		:class="[
			'inline-block fill-current align-top',
			$props.size,
		]"
	>
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

			size: {
				type: String,
				default: 'w-em h-em',
			},
		},

		computed: {
			computedNames() {
				return this.$props.names || [this.$props.name];
			},
		},
	};
</script>
