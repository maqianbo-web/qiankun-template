const state = {
    isCollapse: false,
};

const mutations = {
    SET_ISCOLLAPSE(state, val) {
        state.isCollapse = val;
    },
};

const actions = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
