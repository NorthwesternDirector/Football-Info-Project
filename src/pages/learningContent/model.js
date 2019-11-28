import { queryLearningContent, queryLearningWords } from './service'

const Model = {
  namespace: 'learningContent',
  state: {
    learnInfo: [],
    learnWords: [],
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
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    },
    clear() {
      return {
        learnInfo: [],
        learnWords: [],
      }
    },
  },
}

export default Model
