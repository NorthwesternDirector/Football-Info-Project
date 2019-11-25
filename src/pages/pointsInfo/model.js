import { queryPointInfo } from './service'

const Model = {
  namespace: 'pointsInfo',
  state: {
    pointsInfoPage: [],
  },
  effects: {
    *fetchPointInfo({ payload }, { call, put }) {
      const response = yield call(queryPointInfo, { ...payload })
      if (response && response.content) {
        yield put({
          type: 'save',
          payload: {
            pointsInfoPage: response.content.rounds[0].content,
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
        pointsInfoPage: [],
      }
    },
  },
}

export default Model
