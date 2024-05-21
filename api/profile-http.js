import axios from "axios";
import env from '@/services/infrastructure/env'

const HOST = env.getHost();

const endpoints = {
  getUser: `${HOST}/api/me`,
  updateUser: `${HOST}/api/me/update`
}

export function getUser() {
  return axios
    .get(endpoints.getUser)
    .then(res => res.data.data)
}


export function updateUser(userProfile) {
  const formData = new FormData();

  formData.append('first_name', userProfile.first_name);
  formData.append('last_name', userProfile.last_name);
  formData.append('email', userProfile.email);
  formData.append('phone', userProfile.phone);
  formData.append('city', userProfile.city);
  formData.append('position', userProfile.position);

  if (userProfile.avatar && typeof userProfile.avatar === 'object') {
    formData.append('avatar', userProfile.avatar);
  }

  return axios.post(endpoints.updateUser, formData, {
    headers: {
      'Content-Type': `multipart/form-data;`,
    }
  }).then(({ data }) => data);
}

export default {
  getUser,
  updateUser,
}
