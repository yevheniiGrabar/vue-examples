import userService from "@/services/user";
import {updateCompanyUser} from "../../services/user";

export const CompanyUserGetters = {
  GET_LIST: 'GET_LIST'
}

export const companyUserActions = {
  LOAD_LIST: 'LOAD_LIST',
  ADD_USER: 'ADD_USER',
  UPDATE_USER: 'UPDATE_USER',
  REMOVE_USER: 'REMOVE_USER'
};

export const companyUserMutations = {
  SET_LIST: 'SET_LIST',
  ADD_USER: 'ADD_USER',
  UPDATE_USER: 'UPDATE_USER',
  REMOVE_USER: 'REMOVE_USER'
};

const getters = {
  [CompanyUserGetters.GET_LIST]: (state) => state.companyUsers,
};

const actions = {
  [companyUserActions.LOAD_LIST]: ({commit}) => {
    userService
      .getCompanyUsers()
      .then((companyUsers) => commit(companyUserMutations.SET_LIST, companyUsers));
  },
  [companyUserActions.ADD_USER]: ({commit}, payload) => {
    return userService.createCompanyUser(payload)
      .then(companyUsers => {
        commit(companyUserMutations.ADD_USER, companyUsers);
      });
  },
  [companyUserActions.UPDATE_USER]: ({commit}, payload) => {
    return companyUsers.updateCompanyUser(payload)
      .then(companyUsers => {
        commit(companyUserMutations.UPDATE_USER, companyUsers);
      });
  },
  [companyUserActions.REMOVE_USER]: ({commit}, companyUsers) => {
    userService.removeCompanyUser(companyUsers)
      .then(() => commit(companyUserMutations.REMOVE_USER, companyUsers));
  }
};

const mutations = {
  [companyUserMutations.SET_LIST]: (state, companyUsers) => {
    state.companyUsers = companyUsers
  },
  [companyUserMutations.ADD_USER]: (state, companyUsers) => {
    state.companyUsers = [companyUsers, ...state.companyUsers]
  },
  [companyUserMutations.UPDATE_USER]: (state, companyUsers) => {
    state.companyUsers = state.companyUsers
      .map((companyUsers) => companyUsers.id === companyUsers.id ? updateCompanyUser: companyUsers)
  },
  [companyUserMutations.REMOVE_USER]: (state, removeCompanyUser) => {
    state.companyUsers = state.companyUsers
      .filter((companyUsers) => companyUsers.id !== removeCompanyUser.id)
  }
};

export default {
  namespaced: true,
  state: () => ({
    companyUsers: [],
  }),
  getters,
  actions,
  mutations
}

