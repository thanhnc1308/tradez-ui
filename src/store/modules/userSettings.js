const state = {
  showGlobalSettingsButton: false
};

const mutations = {
  SET_SHOW_GLOBAL_SETTINGS_BUTTON: (state, value) => {
    state.showGlobalSettingsButton = value;
  }
};

const actions = {
  showGlobalSettingsButton({ commit }, value) {
    commit("SET_SHOW_GLOBAL_SETTINGS_BUTTON", value);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
