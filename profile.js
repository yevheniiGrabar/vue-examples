import profileHttp from './api/profile-http'

export function getUserProfile() {
    return profileHttp.getUser();
}

export function updateUserProfile(userProfile) {
  if(userProfile.avatar_file) {
    userProfile.avatar = userProfile.avatar_file;
    delete userProfile.avatar_file;
  }
  return profileHttp.updateUser(userProfile)
}

export default {
  getUserProfile,
  updateUserProfile
}
