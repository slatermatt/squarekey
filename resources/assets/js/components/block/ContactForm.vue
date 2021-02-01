<template>
	<form action="/">
		<div
			v-for="(field, index) in $props.fields"
			:key="index"
		>
			<label>
				<input v-bind="field">
			</label>
		</div>
	</form>
</template>

<script>
	export default {
		props: {
			fields: {
				type: Array,
				required: true,
			},
		},
	};
</script>
