<template>
	<component
		:is="cComponent"
		:to="$props.url"
		:class="[
			'inline-flex items-center',
			'px-4 py-2 space-x-2 text-white rounded-md',
			$props.light
				? 'border-2 border-white'
				: 'bg-brand-primary',
			{
				'opacity-75 cursor-not-allowed': $props.disabled,
			},
		]"
		:disabled="$props.disabled"
		v-bind="$attrs"
	>
		<span
			v-if="$props.title"
			v-text="$props.title"
		/>

		<icon
			v-if="$props.icon"
			v-bind="$props.icon"
		/>
	</component>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: null,
			},

			url: {
				type: String,
				default: null,
			},

			icon: {
				type: Object,
				default: null,
			},

			disabled: Boolean,
			light: Boolean,
		},

		computed: {
			cComponent() {
				return this.$props.url ? 'nuxt-link' : 'button';
			},
		},
	};
</script>
