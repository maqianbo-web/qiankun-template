const state = {
    isCollapse: false,
    isMicro: false,
};

const mutations = {
    SET_ISCOLLAPSE(state, val) {
        state.isCollapse = val;
    },
    SET_ISMICRO(state, val) {
        state.isMicro = val;
    },
};

const actions = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
