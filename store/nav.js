export const state = () => ({
	navActive: false,
});

export const mutations = {
	toggle(state) {
		state.navActive = !state.navActive;
	},
};
