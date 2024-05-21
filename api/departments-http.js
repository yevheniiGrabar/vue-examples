import env from "@/services/infrastructure/env";
import axios from "axios";

const HOST = env.getHost();

const endpoints = {
  base: `${HOST}/api/departments`,
  id: `${HOST}/api/departments/{id}`,
}

function getDepartmentsList() {
  return axios
    .get(endpoints.base)
    .then(res => res.data.data)
}

export function getDepartmentById(id) {
  return axios
    .get(endpoints.id.replace('{id}', id))
    .then(({ data }) => data);
}

function removeDepartment({ id }) {
  const url = endpoints.id.replace('{id}', id);

  return axios.delete(url)
    .then(({ data }) => data);
}

function createDepartment(department) {

  return axios.post(endpoints.base,
    {
      title: department.title,
      course_ids: department.course_ids,
    })
    .then((res) => res.data);
}

function updateDepartment(department) {
  const url = endpoints.id.replace('{id}', department.id);

  return axios.put(url, department)
    .then((res) => res.data);
}

export default {
  getDepartmentsList,
  createDepartment,
  removeDepartment,
  updateDepartment,
  getDepartmentById
}
