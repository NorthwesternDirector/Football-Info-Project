import { queryTimes } from './service'

const Model = {
  namespace: 'newYear2020',
  state: {
    times: [],
  },
  effects: {
    *fetchTimes(_, { put, call }) {
      const response = yield call(queryTimes)
      if (response) {
        yield put({
          type: 'save',
          payload: {
            times: response,
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
        times: [],
      }
    },
  },
}

export default Model
