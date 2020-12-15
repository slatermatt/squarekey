module.exports = {
	root: true,

	env: {
		browser: true,
		node: true,
	},

	parserOptions: {
		parser: 'babel-eslint'
	},

	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended'
	],

	plugins: [
	],

	rules: {
		"comma-dangle": [2, 'always-multiline'],
		"vue/html-indent": ['error', 'tab'],
		"space-before-function-paren": 0,
		"vue/no-v-html": 0,
		"no-tabs": 0,
		"indent": 0,
		"semi": 0,
	}
}
