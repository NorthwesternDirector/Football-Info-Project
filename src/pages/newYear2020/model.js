import { queryTimes, queryGames } from './service'

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
    *fetchGames(_, { put, call }) {
      const response = yield call(queryGames)
      if (response) {
        yield put({
          type: 'save',
          payload: {
            games: response,
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
