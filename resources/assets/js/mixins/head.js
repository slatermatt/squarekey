export default {
	head() {
		return {
			title: this.$data.title,
			link: [
				{
					hid: 'canonical',
					rel: 'canonical',
					href: this.$route.path,
				},
			],
		};
	},
};
