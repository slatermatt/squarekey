<template>
	<div class="x-container relative">
		<formulate-form
			ref="formulate"
			v-model="$data.form"
			:schema="$props.schema"
			:action="$props.action"
			class="space-y-6 max-w-xl mx-auto"
			:class="{
				'opacity-50': $data.loading,
				'pointer-events-none': $data.loading || $data.response,
			}"
			method="POST"
			:disabled="$data.loading || !!$data.response"
			@submit="onSubmit"
		>
			<x-button
				title="Submit"
				type="submit"
				:disabled="$data.loading"
			/>
		</formulate-form>

		<aside
			v-if="$data.response"
			:class="[
				'absolute text-center max-w-xs z-1',
				'top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2',
				'p-12 bg-gradient-to-br from-brand-primary to-blue text-white',
			]"
		>
			<h1
				class="x-h3"
				v-text="this.$data.response.title"
			/>

			<p
				class="text-xl mt-2"
				v-text="this.$data.response.content"
			/>
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

			success: {
				type: Object,
				default: () => {},
			},

			submit: {
				type: Object,
				default: null,
			},
		},

		data() {
			return {
				message: null,
				errors: {},
				form: this.$props.values || {},
				loading: false,
				isError: false,
			};
		},

		methods: {
			get(obj, path, defValue) {
				if (!path) {
					return undefined;
				}

				const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);

				return (
					pathArray.reduce((prevObj, key) => prevObj && prevObj[key], obj || defValue)
				);
			},

			async onSubmit() {
				this.$data.loading = true;

				await this.$axios
					.post(this.$props.action, this.$data.form)
					.then(this.onSubmitSuccess)
					.catch(this.onSubmitFailure)
					.then(this.onSubmitAlways, this.onSubmitAlways);
			},

			onSubmitSuccess(response) {
				this.$data.loading = false;

				this.$data.isError = false;
				this.$data.response = {
					title: `${this.$props.success.title}, ${this.$data.form.firstName}`,
					content: this.$props.success.content,
				};
				this.$data.form = {};
			},

			onSubmitFailure(error) {
				if (this.get(error, 'response.status') !== 422) {
					return;
				}

				this.$data.errorMessage = this.get(error, 'response.data.message');
				this.$data.errors = (this.get(error, 'response.data.errors') || {});

				// this.scrollToError();
			},

			onSubmitAlways() {
				this.$data.loading = false;
			},

			scrollToError() {
				if (!this.$data.errors) {
					return;
				}

				this.$nextTick(() => {
					const $firstError = this.$refs.fields.filter(el => el.errors)[0].$el;

					$firstError.scrollIntoView({
						behavior: 'smooth',
						block: 'center',
					});
				});
			},
		},
	};
</script>
