import axios from "axios";
import env from '@/services/infrastructure/env'

const HOST = env.getHost();

const endpoints = {
  base: `${HOST}/api/courses`,
  id: `${HOST}/api/courses/{id}`,
  logo: `${HOST}/api/courses/{id}/logo`

}

export function getCourses(query) {
  return axios.get(endpoints.base, { params: query })
    .then(({ data: { data } }) => data);
}



export function createCourse(course) {
  const formData = new FormData();

  formData.append('title', course.title);

  if (course.description) {
    formData.append('description', course.description);
  }

  if (course.moderators) {
    course.moderators.map((i) => {
      formData.append('moderator_ids[]', i.id);
    });
  }
  if (course.department_id) {
    formData.append('department_id', course.department_id)
  }

  course.affiliates?.forEach((i) => {
    formData.append('affiliate_ids[]', i.id);
  });

  course.moderators?.forEach((i) => {
    formData.append('moderator_ids[]', i.id);
  });

  if (course.logo) {
    formData.append('logo', course.logo);
  }

  return axios.post(endpoints.base, formData, {
    headers: {
      'Content-Type': `multipart/form-data;`,
    }
  }).then(({ data }) => data);
}

export function getCourseById(id) {
  const url = endpoints.id.replace('{id}', id);

  return axios.get(url)
    .then(({ data }) => data);
}

export function getCoursesByDepartment(id) {
  return axios.get(endpoints.base, {params: {department_id: id}})
    .then(({ data: { data } }) => data)

}

export function deleteCourse(id) {
  const url = endpoints.id.replace('{id}', id);

  return axios.delete(url)
    .then(({ data }) => data);
}

export function updateCourse(course) {
  const url = endpoints.id.replace('{id}', course.id);

  let logo = null;

  if(course.logo) {
    logo = course.logo;
    delete course.logo;
  }

  if (!course.department_id) {
    delete course.department_id;
  }

  if (course.affiliates) {
    course.affiliate_ids = course.affiliates.map((item) => item.id);
    delete course.affiliates;
  }

  if (course.moderators) {
    course.moderator_ids = course.moderators.map((item) => item.id);
    delete course.moderators;
  }

  return axios.put(url, course)
    .then(({ data }) => {
      if(logo) {
        return uploadLogo(course, logo)
          .then(() => data)
      }

      return data;
    });
}

function uploadLogo(course, logo) {
  const url = endpoints.logo.replace('{id}', course.id);

  const formData = new FormData();
  formData.append('logo', logo);

  return axios.post(url, formData, {
    headers: {
      'Content-Type': `multipart/form-data;`,
    }
  }).then(({ data }) => data);
}

export default {
  getCourses,
  getCourseById,
  getCoursesByDepartment,
  updateCourse,
  deleteCourse,
  createCourse
}
