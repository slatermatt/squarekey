<template>
	<div class="x-container">
		<form
			action="https://formspree.io/f/mbjpeppq"
			method="POST"
			class="flex flex-col space-y-5 max-w-xl mx-auto"
		>
			<div
				v-for="(field, index) in $props.fields"
				:key="index"
				class="flex flex-col w-full space-y-1"
			>
				<label
					:for="field.id"
					v-text="field.placeholder"
				/>

				<input
					class="px-4 py-3 border"
					v-bind="field"
				>
			</div>

			<x-button
				title="Submit"
				class="self-center"
			/>
		</form>
	</div>
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
