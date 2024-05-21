import { settingsGroups, testConfig, popupConfig } from "@/models/course-settings.model";
import {createBulkQuizzes} from "@/services/api/quiz-http";

export function createQuizzes(questions, config, lesson_id) {
  const preparedConfig = prepareConfigs(config);
  const quizzes =  questions.map((q) => ({ ...q, config: preparedConfig, lesson_id  }));

  return createBulkQuizzes(quizzes);
}

function prepareConfigs(config) {
  const configsWithoutValue = [
    [settingsGroups.TEST, testConfig.SHUFFLE_QUESTIONS, config.switchShuffle],
    [settingsGroups.TEST, testConfig.MANUAL_CONFIRMATION, config.switchConfirm],
    [settingsGroups.TEST, testConfig.TIMER, config.switchTimer],
    [settingsGroups.POPUP, popupConfig.SHOW_REPLIES_TO_EMPLOYEE, config.switchReplies],
    [settingsGroups.POPUP, popupConfig.SHOW_THE_SCORE_TO_THE_EMPLOYEE, config.switchScore],
    [settingsGroups.POPUP, popupConfig.WELCOME_MESSAGE, config.switchWelMsg],
    [settingsGroups.POPUP, popupConfig.CONGRATULATORY_MESSAGE, config.switchesCongratsMsg],
  ].map(([group, code, enabled]) => ({ group, code, enabled }))

  const configWithValue = [
    [settingsGroups.TEST, testConfig.PASSING_SCORE, config.counter]
  ].map(([group, code, value]) => ({ group, code, value }));

  return [
    ...configsWithoutValue,
    ...configWithValue,
  ]
}
