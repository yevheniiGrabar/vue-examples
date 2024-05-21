import env from "@/services/infrastructure/env";
import axios from "axios";

const HOST = env.getHost();

const endpoints = {
  create: `${HOST}/api/affiliates`,
  getList: `${HOST}/api/affiliates`,
  delete: `${HOST}/api/affiliates/{id}`,
  update: `${HOST}/api/affiliates/{id}`,
}

function getAffiliatesList() {
  return axios
    .get(endpoints.getList)
    .then(res => res.data.data)
}

function removeAcademy({ id }) {
  const url = endpoints.delete.replace('{id}', id);

  return axios.delete(url);
}

function createAcademy(affiliate) {
  return axios.post(endpoints.create, { title: affiliate.title })
    .then((res) => res.data);
}

function updateAcademy(affiliate) {
  const url = endpoints.update.replace('{id}', affiliate.id);

  return axios.put(url, { title: affiliate.title })
    .then((res) => res.data);
}

export default {
  getAffiliatesList,
  createAcademy,
  removeAcademy,
  updateAcademy
}
