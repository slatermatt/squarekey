import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate';

Vue.use(VueFormulate, {
	classes: {
		wrapper: 'space-y-2',
		outer: 'space-y-2',
		input: 'border-2 border-gray-400 rounded px-6 py-4 leading-none focus:border-brand-primary outline-none border-box w-full text-base md:text-lg',
		label: 'x-h6 font-medium',
		help: 'text-xs',
		error: 'text-red-700 text-xs text-red',
	},
});
