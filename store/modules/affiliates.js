import affiliatesService from '../../services/affiliates';

export const affiliatesActions = {
  LOAD_LIST: 'LOAD_LIST',
  ADD_BRANCH: 'ADD_BRANCH',
  REMOVE_BRANCH: 'REMOVE_BRANCH',
  UPDATE_BRANCH: 'UPDATE_BRANCH'
};

export const affiliatesMutations = {
  ADD_BRANCH: 'ADD_BRANCH',
  REMOVE_BRANCH: 'REMOVE_BRANCH',
  UPDATE_BRANCH: 'UPDATE_BRANCH',
  SET_LIST: 'SET_LIST'
};

export const affiliatesGetters = {
  GET_LIST: 'GET_LIST'
};

const getters = {
  [affiliatesGetters.GET_LIST]: state => state.affiliates
};

const actions = {
  [affiliatesActions.LOAD_LIST]: ({ commit }) => {
    affiliatesService
      .getAllAffiliates()
      .then((affiliates) => commit(affiliatesMutations.SET_LIST, affiliates));
  },
  [affiliatesActions.ADD_BRANCH]: ({ commit }, payload) => {
    return affiliatesService.createAcademy(payload)
      .then((affiliate) => {
        commit(affiliatesMutations.ADD_BRANCH, affiliate);
      })
  },
  [affiliatesActions.UPDATE_BRANCH]: ({ commit }, payload) => {
    return affiliatesService.updateAcademy(payload)
      .then((affiliate) => {
        commit(affiliatesMutations.UPDATE_BRANCH, affiliate);
      });
  },
  [affiliatesActions.REMOVE_BRANCH]: ({ commit }, affiliate) => {
    affiliatesService.removeAcademy(affiliate)
      .then(() => commit(affiliatesMutations.REMOVE_BRANCH, affiliate))
  }
};

const mutations = {
    [affiliatesMutations.SET_LIST]: (state, list) => {
      state.affiliates = [ ...list ];
    },
    [affiliatesMutations.ADD_BRANCH]: (state, affiliate) => {
      state.affiliates = [ affiliate, ...state.affiliates ];
    },
    [affiliatesMutations.REMOVE_BRANCH]: (state, removedBranch) => {
      state.affiliates = state.affiliates
        .filter((affiliate) => affiliate.id !== removedBranch.id);
    },
    [affiliatesMutations.UPDATE_BRANCH]: (state, updatedBranch) => {
      state.affiliates = state.affiliates
        .map((affiliate) => affiliate.id === updatedBranch.id ? updatedBranch : affiliate)
    }
  };

export default {
  namespaced: true,
  state: () => ({
    affiliates: [],
  }),
  getters,
  actions,
  mutations,
}
