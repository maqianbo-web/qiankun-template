const state = {
    user: {
        name: 'maqianbo',
    },
};

const mutations = {
    SET_USER(state, val) {
        state.user = val;
    },
};

const actions = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
