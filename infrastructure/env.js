function getHost() {
  return process.env.VUE_APP_API_URL;
}

function getClientID() {
  return process.env.VUE_APP_CLIENT_ID;
}

function getClientSecret() {
  return process.env.VUE_APP_CLIENT_SECRET;
}

export default {
  getHost,
  getClientID,
  getClientSecret
}
