<template>
	<div class="x-container">
		<formulate-form
			v-model="$data.form"
			:schema="$props.schema"
			:action="$props.action"
			class="space-y-6 max-w-xl mx-auto"
			:class="{
				'opacity-50': $data.loading,
			}"
			method="POST"
			:disabled="$data.loading || $data.response"
		>
			<x-button
				title="Submit"
				type="submit"
				:disabled="$data.loading"
				@click.native.prevent="onSubmit"
			/>
		</formulate-form>

		<aside
			v-if="$data.response"
			class="relative z-1 -mt-15"
		>
			<pre v-text="$data.response" />
		</aside>
	</div>
</template>

<script>
	export default {
		props: {
			action: {
				type: String,
				default: null,
			},

			schema: {
				type: Array,
				default: null,
			},

			values: {
				type: Object,
				default: () => {},
			},
		},

		data() {
			return {
				errors: {},
				form: this.$props.values || {},
				loading: false,
				response: null,
			};
		},

		methods: {
			async onSubmit() {
				this.$data.loading = true;

				try {
					const response = await this.$axios.post(this.$props.action, this.$data.form);

					const { data, error } = await response.json();
					const { ok, status, next } = response;

					if (ok) {
						this.$data.errors = null;
						this.$data.response = data;
					} else if (status === 422) {
						this.$data.errors = error;
					} else {
						// passed client-side validation but failed unexpectedly
						throw error;
					}

					console.log(next);
				} catch (error) {
					// handle thrown + network errors
					window.alert(error); // eslint-disable-line no-alert
				}

				this.$data.loading = false;
			},
		},
	};
</script>
