import { queryMatchDetail } from './service'

const Model = {
  namespace: 'matchInfo',
  state: {
    matchDetail: [],
  },
  effects: {
    *fetchMatchDetail({ payload }, { call, put }) {
      const response = yield call(queryMatchDetail, { ...payload })
      if (response && response.data) {
        yield put({
          type: 'save',
          payload: {
            matchDetail: response.data.list,
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
        matchDetail: [],
      }
    },
  },
}

export default Model
