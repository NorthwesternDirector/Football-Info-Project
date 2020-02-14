import { queryTimes, queryGames, queryPaper, queryVirus } from './service'

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
    *fetchPaper(_, { put, call }) {
      const response = yield call(queryPaper)
      if (response) {
        yield put({
          type: 'save',
          payload: {
            paper: response,
          },
        })
      }
    },
    *fetchVirus(_, { put, call }) {
      const response = yield call(queryVirus)
      if (response) {
        yield put({
          type: 'save',
          payload: {
            virus: response,
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
        games: [],
        paper: [],
        virus: [],
      }
    },
  },
}

export default Model
