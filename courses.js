import coursesHttp from './api/courses-http';

export function getCourses(query = {}) {
  return coursesHttp.getCourses(query);
}

export function createCourse(course) {
  if(course.logo) {
    return getBlob(course.logo)
      .then((blob) => coursesHttp.createCourse( { ...course, logo: blob }));
  }
  return coursesHttp.createCourse(course)
}

export function getCourseById(id) {
  return coursesHttp.getCourseById(id);
}

export function getCoursesByDepartment(id) {
  return coursesHttp.getCoursesByDepartment(id)
}

export function updateCourse(course) {
  if(course.logo) {
    return getBlob(course.logo)
      .then((blob) => coursesHttp.updateCourse( { ...course, logo: blob }));
  }
  return coursesHttp.updateCourse(course);
}

function getBlob(image) {
  return fetch(image)
    .then(r => r.blob())
}

export function deleteCourse(id) {
  return coursesHttp.deleteCourse(id);
}


export default {
  getCourses,
  createCourse,
  getCourseById,
  getCoursesByDepartment,
  updateCourse,
  deleteCourse,
}
