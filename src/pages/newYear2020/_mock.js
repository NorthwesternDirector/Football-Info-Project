import { mockData } from '../../utils/utils'

export default {

  '/api/times': mockData([
    {
      timeRange: '2020-01-01,2020-12-31',
      list: [
        { id: 1, date: '2020-01-01', workTime: ['', '', 0], sleepTime: ['23:48', 8.42, 1.48], walkingSteps: 1959, physicalExercise: [0, 0, 0, 0] },
        { id: 2, date: '2020-01-02', workTime: ['08:53:00', '20:25:00', 8.53], sleepTime: ['23:48', 8.42, 1.48], walkingSteps: 6525, physicalExercise: [0, 0, 0, 0] },
        { id: 3, date: '2020-01-03', workTime: ['08:53:00', '18:30:00', 6.62], sleepTime: ['00:14', 8.47, 1.42], walkingSteps: 4642, physicalExercise: [0, 0, 0, 0] },
        { id: 4, date: '2020-01-04', workTime: ['', '', 0], sleepTime: ['23:14', 8.47, 2.42], walkingSteps: 13095, physicalExercise: [0, 0, 0, 0] },
        { id: 5, date: '2020-01-05', workTime: ['', '', 0], sleepTime: ['00:02', 9.12, 1.73], walkingSteps: 9505, physicalExercise: [0, 0, 0, 0] },
        { id: 6, date: '2020-01-06', workTime: ['08:53:00', '20:31:00', 8.40], sleepTime: ['00:58', 7.42, 1.78], walkingSteps: 13095, physicalExercise: [0, 0, 0, 0] },
        { id: 7, date: '2020-01-07', workTime: ['09:00:00', '20:18:00', 8.30], sleepTime: ['23:51', 8.30, 1.93], walkingSteps: 9505, physicalExercise: [0, 0, 0, 0] },
        { id: 8, date: '2020-01-08', workTime: ['09:02:00', '20:55:00', 8.05], sleepTime: ['23:28', 8.72, 2.22], walkingSteps: 7168, physicalExercise: [0, 0, 0, 0] },
        { id: 9, date: '2020-01-09', workTime: ['09:15:00', '20:40:00', 8.42], sleepTime: ['00:45', 7.58, 1.25], walkingSteps: 5450, physicalExercise: [0, 0, 0, 0] },
        { id: 10, date: '2020-01-10', workTime: ['09:08:00', '22:01:00', 9.88], sleepTime: ['23:53', 8.65, 1.90], walkingSteps: 7529, physicalExercise: [0, 0, 0, 0] },
        { id: 11, date: '2020-01-11', workTime: ['', '', 0], sleepTime: ['00:59', 10.40, 1.72], walkingSteps: 6146, physicalExercise: [0, 0, 0, 0] },
        { id: 12, date: '2020-01-12', workTime: ['', '', 0], sleepTime: ['00:46', 9.45, 2.13], walkingSteps: 11456, physicalExercise: [0, 0, 0, 0] },
        { id: 13, date: '2020-01-13', workTime: ['08:56:00', '21:10:00', 9.23], sleepTime: ['23:50', 8.50, 1.03], walkingSteps: 3764, physicalExercise: [0, 0, 0, 0] },
        { id: 14, date: '2020-01-14', workTime: ['08:56:00', '19:00:00', 7.07], sleepTime: ['00:13', 8.23, 1.58], walkingSteps: 5919, physicalExercise: [0, 0, 0, 0] },
        { id: 15, date: '2020-01-15', workTime: ['09:00:00', '18:45:00', 6.75], sleepTime: ['00:34', 7.77, 2.15], walkingSteps: 6146, physicalExercise: [0, 0, 0, 0] },
        { id: 16, date: '2020-01-16', workTime: ['09:10:00', '18:30:00', 6.33], sleepTime: ['00:39', 8.00, 1.83], walkingSteps: 11456, physicalExercise: [0, 0, 0, 0] },
        { id: 17, date: '2020-01-17', workTime: ['09:05:00', '20:05:00', 8.00], sleepTime: ['00:59', 6.00, 1.08], walkingSteps: 5724, physicalExercise: [0, 0, 0, 0] },
        { id: 18, date: '2020-01-18', workTime: ['', '', 0], sleepTime: ['00:23', 9.80, 2.98], walkingSteps: 2565, physicalExercise: [0, 0, 0, 0] },
        { id: 19, date: '2020-01-19', workTime: ['09:15:00', '20:45:00', 8.50], sleepTime: ['23:37', 8.87, 2.15], walkingSteps: 5557, physicalExercise: [0, 0, 0, 0] },
        { id: 20, date: '2020-01-20', workTime: ['09:09:00', '18:30:00', 6.35], sleepTime: ['00:15', 7.80, 1.90], walkingSteps: 10676, physicalExercise: [0, 0, 0, 0] },
        { id: 21, date: '2020-01-21', workTime: ['', '', 0], sleepTime: ['00:16', 7.20, 1.37], walkingSteps: 3476, physicalExercise: [0, 0, 0, 0] },
        { id: 22, date: '2020-01-22', workTime: ['', '', 0], sleepTime: ['00:40', 10.52, 1.35], walkingSteps: 17524, physicalExercise: [0, 0, 0, 0] },
        { id: 23, date: '2020-01-23', workTime: ['', '', 0], sleepTime: ['23:53', 8.57, 1.47], walkingSteps: 131, physicalExercise: [0, 0, 0, 0] },
        { id: 24, date: '2020-01-24', workTime: ['', '', 0], sleepTime: ['23:54', 10.03, 1.60], walkingSteps: 5928, physicalExercise: [0, 0, 0, 0] },
        { id: 25, date: '2020-01-25', workTime: ['', '', 0], sleepTime: ['00:59', 6.00, 2.23], walkingSteps: 16441, physicalExercise: [0, 0, 0, 0] },
        { id: 26, date: '2020-01-26', workTime: ['', '', 0], sleepTime: ['23:34', 10.96, 1.80], walkingSteps: 933, physicalExercise: [0, 0, 0, 0] },
        { id: 27, date: '2020-01-27', workTime: ['', '', 0], sleepTime: ['00:22', 9.17, 1.52], walkingSteps: 1282, physicalExercise: [0, 0, 0, 0] },
        { id: 28, date: '2020-01-28', workTime: ['', '', 0], sleepTime: ['00:05', 10.17, 1.68], walkingSteps: 1022, physicalExercise: [0, 0, 0, 0] },
        { id: 29, date: '2020-01-29', workTime: ['', '', 0], sleepTime: ['23:53', 8.80, 1.62], walkingSteps: 0, physicalExercise: [30, 0, 0, 0] },
      ],
    },
  ]),
}
