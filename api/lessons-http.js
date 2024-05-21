import axios from "axios";
import env from '@/services/infrastructure/env'

const HOST = env.getHost();

const endpoints = {
  base: `${HOST}/api/lessons`,
  baseConfig: `${HOST}/api/lesson-configs`,
}

export function getLessons(query) {
  return axios.get(endpoints.base, { params: query })
    .then(({ data: { data } }) => data)
}

export function getColorByLessonId(id) {
  return axios.get(endpoints.baseConfig.replace('{id}', id))
    .then(({ data }) => data)
}

export function createLesson(lesson) {
  let params = {
    name: lesson.title,
    course_id: lesson.course_id,
    content: lesson.content,
    status: 'ENABLED',
    order: '0'
  };

  if (lesson.course_id) {
    params.course_id = lesson.course_id;
  }
  return axios.post(endpoints.base, params).then(({ data }) => data)
}

export function updateColor(id, color) {
  return axios.post(endpoints.baseConfig.replace('{id}', id), {
    lesson_id: id,
    group: 'LAYOUT',
    code: 'Color',
    value: color,
    enabled: true
  });
}

export function getLessonConfigs(lessonId) {
  return axios.get(endpoints.baseConfig, { params: { lesson_id: lessonId } })
    .then(({ data: { data } }) => data)
}

export default {
  createLesson,
  getLessons,
  updateColor,
  getColorByLessonId,
  getLessonConfigs
}
