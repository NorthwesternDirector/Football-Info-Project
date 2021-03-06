import {
  queryLearningContent,
  queryLearningWords,
  queryLearningTimes,
  queryLearningWalkingStep } from './service'

const Model = {
  namespace: 'learningContent',
  state: {
    learnInfo: [],
    learnWords: [],
    learnTimes: [],
  },
  effects: {
    *fetchLearningContent(_, { put, call }) {
      const response = yield call(queryLearningContent)
      if (response) {
        yield put({
          type: 'save',
          payload: {
            learnInfo: response,
          },
        })
      }
    },
    *fetchLearningWords(_, { put, call }) {
      const response = yield call(queryLearningWords)
      if (response) {
        yield put({
          type: 'save',
          payload: {
            learnWords: response,
          },
        })
      }
    },
    *fetchLearningTimes(_, { put, call }) {
      const response = yield call(queryLearningTimes)
      if (response) {
        yield put({
          type: 'save',
          payload: {
            learnTimes: response,
          },
        })
      }
    },
    *fetchLearningWalkingStep(_, { put, call }) {
      const response = yield call(queryLearningWalkingStep)
      if (response) {
        yield put({
          type: 'save',
          payload: {
            walkingStep: response,
          },
        })
      }
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    },
    clear() {
      return {
        learnInfo: [],
        learnWords: [],
        learnTimes: [],
      }
    },
  },
}

export default Model
