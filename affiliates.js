import affiliatesHttp from './api/affiliates-http'

function getAllAffiliates() {
  return affiliatesHttp.getAffiliatesList();
}

function createAcademy(branch) {
  return affiliatesHttp.createAcademy(branch);
}

function removeAcademy(branch) {
  return affiliatesHttp.removeAcademy(branch);
}

function updateAcademy(branch) {
  return affiliatesHttp.updateAcademy(branch);
}

export default {
  getAllAffiliates,
  createAcademy,
  removeAcademy,
  updateAcademy,
}
