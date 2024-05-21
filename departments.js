import departmentsHttp  from './api/departments-http';


export function getDepartments() {
  return departmentsHttp.getDepartmentsList();
}

export function createDepartment(department) {
  return departmentsHttp.createDepartment(department)
}

export function updateDepartment(department) {
  return departmentsHttp.updateDepartment(department)
}

export function removeDepartment(id) {
  return departmentsHttp.removeDepartment(id)
}

export function getDepartmentById(id) {
  return departmentsHttp.getDepartmentById(id)
}


export default {
  getDepartments,
  createDepartment,
  updateDepartment,
  removeDepartment,
  getDepartmentById
}
