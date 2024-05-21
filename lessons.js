import lessonHttp, {getColorByLessonId} from './api/lessons-http';


export function createLesson(lesson) {
  return lessonHttp.createLesson(lesson)
}

export function getLessons(query) {
  return lessonHttp.getLessons(query)
}

export function getColorById(id){
  return lessonHttp.getColorByLessonId(id)
}

export function updateColor(id, color) {
  return lessonHttp.updateColor(id, color)
}

export function getConfigs(lessonId) {
  return lessonHttp.getLessonConfigs(lessonId);
}

export default {
  createLesson,
  getLessons,
  updateColor,
  getColorById
}
