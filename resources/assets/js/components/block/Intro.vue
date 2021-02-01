<template>
	<section class="x-container">
		<div class="max-w-lg mx-auto text-center">
			<h1
				class="x-h2"
				v-text="$props.title"
			/>

			<p
				v-if="$props.content"
				class="x-h5 mt-5"
				v-text="$props.content"
			/>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true,
			},

			content: {
				type: String,
				default: null,
			},
		},
	};
</script>
