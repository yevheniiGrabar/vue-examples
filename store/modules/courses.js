import coursesService from '@/services/courses'

export const courseGetters = {
  GET_LIST: 'GET_LIST',
  GET_UNASSIGNED_LIST: 'GET_UNASSIGNED_LIST'
}

export const courseMutations = {
  SET_LIST: 'SET_LIST',
  REMOVE: 'REMOVE'
}

export const courseActions = {
  GET_LIST: 'GET_LIST',
  GET_UNASSIGNED_LIST: 'GET_UNASSIGNED_LIST',
  REMOVE: 'REMOVE',
}

const getters = {
    [courseGetters.GET_LIST]: (state) => state.courses,
    [courseGetters.GET_UNASSIGNED_LIST]: (state) => state.courses,
};

const actions = {
    [courseActions.GET_LIST]: ({ commit }) => {
      return coursesService.getCourses()
        .then((courses) => commit(courseMutations.SET_LIST, courses));
    },
    [courseActions.GET_UNASSIGNED_LIST]: ({ commit }) => {
      return coursesService.getCourses({
        'department_unassigned': 1
      })
        .then((courses) => commit(courseMutations.SET_LIST, courses));
    },
    [courseActions.REMOVE]: ({ commit }, course) => {
      return coursesService.deleteCourse(course.id)
        .then(() => commit(courseMutations.REMOVE, course));
    }
};

const mutations = {
  [courseMutations.SET_LIST]: (state, courses) => {
    state.courses = courses
  },
  [courseMutations.REMOVE]: (state, { id }) => {
    state.courses = state.courses.filter(course => course.id !== id);
  }
};

export default {
    namespaced: true,
    state: () => ({
      courses: [],
    }),
    getters,
    actions,
    mutations
}
