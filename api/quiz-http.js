import axios from "axios";
import env from '@/services/infrastructure/env'

const HOST = env.getHost();

const endpoints = {
  quizzesBulk: `${HOST}/api/quizzes/bulk`,
  quizzes: `${HOST}/api/quizzes`,
}

export function createBulkQuizzes(quizzes) {
  return axios.post(endpoints.quizzesBulk, quizzes);
}

export function getQuizzes(params = {}) {
  return axios.get(endpoints.quizzes, {params})
}

export default {
  createBulkQuizzes,
}
