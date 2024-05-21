import Vue from "vue";
import Vuex from 'vuex';

import affiliates from "./modules/affiliates";
import departments from "./modules/departments";
import companyUsers from "./modules/user"
import courses from "./modules/courses";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    affiliates,
    departments,
    courses,
    companyUsers,
  }
});
