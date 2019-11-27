import { queryscheduleDetail } from './service'

const Model = {
  namespace: 'scheduleDetail',
  state: {
    schedule: [],
  },
  effects: {
    *fetchScheduleDetail(_, { call, put }) {
      const response = yield call(queryscheduleDetail)
      if (response) {
        yield put({
          type: 'save',
          payload: {
            schedule: response,
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
        schedule: [],
      }
    },
  },
}

export default Model
