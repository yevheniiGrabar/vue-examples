import companyUserHttp from './api/company-user-http'

export function getCompanyUsers() {
  return companyUserHttp.getCompanyUserList();
}

export function createCompanyUser(companyUser) {
  return companyUserHttp.createCompanyUser(companyUser);
}

export function updateCompanyUser(companyUser) {
  return companyUserHttp.updateCompanyUser(companyUser);
}

export function removeCompanyUser(id) {
  return companyUserHttp.removeCompanyUser(id);
}

export function getCompanyUserById(id) {
  return companyUserHttp.getCompanyUserById(id);
}

export default {
  getCompanyUsers,
  createCompanyUser,
  updateCompanyUser,
  removeCompanyUser,
  getCompanyUserById
}
