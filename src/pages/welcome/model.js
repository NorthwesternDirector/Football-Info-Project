import { queryIconInfo } from './service'

const Model = {
  namespace: 'welcome',
  state: {
    iconInfo: [],
  },
  effects: {
    *fetchIconInfo(_, { call, put }) {
      const response = yield call(queryIconInfo)
      if (response) {
        yield put({
          type: 'save',
          payload: {
            iconInfo: response,
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
        iconInfo: [],
      }
    },
  },
}

export default Model
