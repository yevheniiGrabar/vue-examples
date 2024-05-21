import departmentsService from "@/services/departments";
import departments, {getDepartments, removeDepartment, updateDepartment} from "../../services/departments";

export const departmentsGetters = {
  GET_LIST: 'GET_LIST'
};

export const departmentsActions = {
  LOAD_LIST: 'LOAD_LIST',
  ADD_DEPARTMENT: 'ADD_DEPARTMENT',
  UPDATE_DEPARTMENT: 'UPDATE_DEPARTMENT',
  REMOVE_DEPARTMENT: 'REMOVE_DEPARTMENT'
};

export const departmentsMutations = {
  SET_LIST: 'SET_LIST',
  ADD_DEPARTMENT: 'ADD_DEPARTMENT',
  UPDATE_DEPARTMENT: 'UPDATE_DEPARTMENT',
  REMOVE_DEPARTMENT: 'REMOVE_DEPARTMENT'
};


const getters = {
  [departmentsGetters.GET_LIST]: (state) => state.departments,
};


const actions = {
  [departmentsActions.LOAD_LIST]: ({commit}) => {
    departmentsService
      .getDepartments()
      .then((departments) => commit(departmentsMutations.SET_LIST, departments));
  },
  [departmentsActions.ADD_DEPARTMENT]: ({commit}, payload) => {
    return departmentsService.createDepartment(payload)
      .then(department => {
        commit(departmentsMutations.ADD_DEPARTMENT, department);
      });
  },
  [departmentsActions.UPDATE_DEPARTMENT]: ({commit}, payload) => {
    return departmentsService.updateDepartment(payload)
      .then(department => {
        commit(departmentsMutations.UPDATE_DEPARTMENT, department);
      });
  },
  [departmentsActions.REMOVE_DEPARTMENT]: ({commit}, department) => {
    departmentsService.removeDepartment(department)
      .then(() => commit(departmentsMutations.REMOVE_DEPARTMENT, department));
  }

};

const mutations = {
  [departmentsMutations.SET_LIST]: (state, departments) => {
    state.departments = departments
  },
  [departmentsMutations.ADD_DEPARTMENT]: (state, department) => {
    state.departments = [department, ...state.departments]
  },
  [departmentsMutations.UPDATE_DEPARTMENT]: (state, updateDepartment) => {
    state.departments = state.departments
      .map((department) => department.id === updateDepartment.id ? updateDepartment: department)
  },
  [departmentsMutations.REMOVE_DEPARTMENT]: (state, removeDepartment) => {
    state.departments = state.departments
      .filter((department) => department.id !== removeDepartment.id)
  }


};


export default {
  namespaced: true,
  state: () => ({
    departments: [],
  }),
  getters,
  actions,
  mutations
}
