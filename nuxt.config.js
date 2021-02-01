export default {
	target: 'static',
	ssr: false,

	dir: {
		assets: 'resources/assets',
		layouts: 'resources/views/layouts',
		pages: 'resources/views/pages',
		static: 'resources/static',
	},

	components: [
		{
			path: 'resources/assets/js/components',
		},
	],

	content: {
		dir: 'resources/content',
	},

	generate: {
		fallback: '404.html',
	},

	css: [
		// '@/resources/assets/scss/app',
	],

	plugins: [
		'~/resources/assets/js/mixins/include',
	],

	buildModules: [
		[
			'@nuxtjs/eslint-module', {
				context: 'resources/assets/js',
				// eslintPath: 'build/.eslintrc',
			},
		],
		'@nuxtjs/tailwindcss',
	],

	modules: [
		'@nuxt/content'
	],

	tailwindcss: {
		cssPath: 'resources/assets/scss/app.scss',
		configPath: 'build/tailwind.config.js',
		exposeConfig: false,
		config: {},
	},

	head: {
		title: 'Squarekey',
		meta: [
			{
				charset: 'utf-8',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || '',
			},
			{
				hid: 'og:title',
				name: 'og:title',
			},
			{
				hid: 'og:description',
				name: 'og:description',
			},
			{
				hid: 'og:type',
				name: 'og:type',
			},
			{
				hid: 'og:url',
				name: 'og:url',
			},
			{
				hid: 'og:site_name',
				name: 'og:site_name',
			},
			{
				hid: 'og:image',
				name: 'og:image',
			},
			{
				name: 'twitter:card',
				content: 'summary_large_image',
			},
		],
		link: [
			{
				rel: 'icon',
				type: 'image/png',
				href: '/static/img/meta/favicon-32.png',
			},
			{
				rel: 'apple-touch-icon',
				href: '/static/img/meta/favicon-180.png',
			},
			{
				hid: 'canonical',
				rel: 'canonical',
				href: '/',
			},
		],
	},

	messages: {
		error_404: 'Oh no',
		back_to_home: 'Cmon, back home!',
	},
}
