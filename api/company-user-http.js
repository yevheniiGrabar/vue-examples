import env from "@/services/infrastructure/env";
import axios from "axios";

const HOST = env.getHost();

const endpoints = {
  base: `${HOST}/api/user`,
  id: `${HOST}/api/user/{id}`
}

function getCompanyUserList() {
  return axios
    .get(endpoints.base)
    .then(res => res.data.data)
}

export function getCompanyUserById(id) {
  return axios
    .get(endpoints.id.replace('{id}', id))
    .then(({data}) => data)
}

function removeCompanyUser({id}) {
  const url = endpoints.id.replace('{id}', id);

  return axios.delete(url)
    .then(({data}) => data);
}

function createCompanyUser(user) {

  return axios.post(endpoints.base,
    {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
      country: user.country,
      city: user.city,
      affiliate_id: user.affiliate_id
    })
    .then((res) => res.data);
}

function updateCompanyUser(user) {
  const url = endpoints.id.replace('{id}', user.id);

  return axios.put(url, user)
    .then((res) => res.data);
}

export default {
  getCompanyUserList,
  createCompanyUser,
  removeCompanyUser,
  updateCompanyUser,
  getCompanyUserById
}




