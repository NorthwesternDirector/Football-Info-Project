import { mockData } from '../../utils/utils'

export default {
  '/api/games': mockData([
    { id: 1, round: '第1轮', me: 0, father: -4, mother: -3, meL: 1.17, fatherL: 1.5, motherL: 5.33, meT: 1.17, fatherT: -2.5, motherT: 2.33 },
    { id: 2, round: '第2轮', me: -10, father: 0, mother: 0, meL: 2.45, fatherL: 4.88, motherL: 2.67, meT: -6.38, fatherT: 2.38, motherT: 5 },
    { id: 3, round: '第3轮', me: 0, father: 0, mother: -4, meL: 0.57, fatherL: 0.79, motherL: 2.64, meT: -5.81, fatherT: 3.17, motherT: 3.64 },
    { id: 4, round: '第4轮', me: 0, father: -4, mother: -4, meL: 3.28, fatherL: 2.9, motherL: 1.82, meT: -2.53, fatherT: 2.07, motherT: 1.46 },
    { id: 5, round: '第5轮', me: -2, father: 0, mother: -3, meL: 3.71, fatherL: 0.3, motherL: 0.99, meT: -1.36, fatherT: 2.37, motherT: -0.55 },
    { id: 6, round: '第6轮', me: 0, father: 0, mother: -4, meL: 1.72, fatherL: 2.03, motherL: 0.25, meT: 0.36, fatherT: 4.4, motherT: -4.3 },
    { id: 7, round: '第7轮', me: -6, father: 0, mother: 0, meL: 1.49, fatherL: 2.79, motherL: 1.72, meT: -4.15, fatherT: 7.19, motherT: -2.58 },
    { id: 8, round: '第8轮', me: -4, father: 0, mother: -2, meL: 1.59, fatherL: 3.26, motherL: 1.15, meT: -6.56, fatherT: 10.45, motherT: -3.43 },
    { id: 9, round: '第9轮', me: 0, father: -2, mother: 0, meL: 0.41, fatherL: 0.54, motherL: 1.05, meT: -6.15, fatherT: 8.99, motherT: -2.38 },
    { id: 10, round: '第10轮', me: 0, father: -4, mother: -10, meL: 3.02, fatherL: 4.73, motherL: 6.25, meT: -3.13, fatherT: 9.72, motherT: -6.13 },
    { id: 11, round: '第11轮', me: -4, father: -4, mother: 0, meL: 2.19, fatherL: 0.49, motherL: 5.32, meT: -4.94, fatherT: 6.21, motherT: -0.81 },
    { id: 12, round: '第12轮', me: -4, father: -8, mother: 0, meL: 2.92, fatherL: 8.45, motherL: 0.63, meT: -6.02, fatherT: 6.66, motherT: -0.18 },
    { id: 13, round: '第13轮', me: -4, father: 0, mother: -4, meL: 2.82, fatherL: 4.03, motherL: 1.15, meT: -7.2, fatherT: 10.69, motherT: -3.03 },
    { id: 14, round: '第14轮', me: 0, father: -2, mother: -6, meL: 1.17, fatherL: 1.5, motherL: 5.33, meT: -6.03, fatherT: 10.19, motherT: -3.7 },
    { id: 15, round: '第15轮', me: -20, father: -8, mother: 0, meL: 6.66, fatherL: 20.17, motherL: 1.17, meT: -19.37, fatherT: 21.9, motherT: -2.53 },

  ]),
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
        { id: 29, date: '2020-01-29', workTime: ['', '', 0], sleepTime: ['23:53', 8.80, 1.62], walkingSteps: 1011, physicalExercise: [30, 0, 0, 0] },
        { id: 30, date: '2020-01-30', workTime: ['', '', 0], sleepTime: ['23:43', 10.17, 1.70], walkingSteps: 2140, physicalExercise: [41, 0, 0, 0] },
        { id: 31, date: '2020-01-31', workTime: ['', '', 0], sleepTime: ['00:31', 9.17, 1.05], walkingSteps: 1082, physicalExercise: [23, 0, 0, 0] },
        { id: 32, date: '2020-02-01', workTime: ['', '', 0], sleepTime: ['23:32', 8.72, 1.58], walkingSteps: 673, physicalExercise: [15, 0, 0, 0] },
        { id: 33, date: '2020-02-02', workTime: ['', '', 0], sleepTime: ['00:30', 8.67, 0.43], walkingSteps: 2161, physicalExercise: [15, 0, 0, 0] },
        { id: 34, date: '2020-02-03', workTime: ['', '', 0], sleepTime: ['23:38', 8.25, 1.35], walkingSteps: 696, physicalExercise: [10, 0, 0, 0] },
        { id: 35, date: '2020-02-04', workTime: ['', '', 0], sleepTime: ['00:07', 8.85, 1.50], walkingSteps: 599, physicalExercise: [15, 0, 0, 0] },
        { id: 36, date: '2020-02-05', workTime: ['', '', 0], sleepTime: ['23:41', 8.68, 1.23], walkingSteps: 983, physicalExercise: [30, 0, 0, 0] },
        { id: 37, date: '2020-02-06', workTime: ['', '', 0], sleepTime: ['00:13', 8.48, 0.90], walkingSteps: 1500, physicalExercise: [25, 0, 0, 0] },
        { id: 38, date: '2020-02-07', workTime: ['', '', 0], sleepTime: ['23:30', 8.82, 1.97], walkingSteps: 460, physicalExercise: [15, 0, 0, 0] },
        { id: 39, date: '2020-02-08', workTime: ['', '', 0], sleepTime: ['00:02', 10.13, 1.03], walkingSteps: 1909, physicalExercise: [10, 0, 0, 0] },
        { id: 40, date: '2020-02-09', workTime: ['', '', 0], sleepTime: ['00:59', 8.03, 1.43], walkingSteps: 2219, physicalExercise: [20, 0, 0, 0] },
        { id: 41, date: '2020-02-10', workTime: ['', '', 0], sleepTime: ['23:34', 9.25, 0.78], walkingSteps: 1771, physicalExercise: [15, 0, 0, 0] },
        { id: 42, date: '2020-02-11', workTime: ['', '', 0], sleepTime: ['23:14', 8.62, 1.01], walkingSteps: 0, physicalExercise: [15, 0, 0, 0] },

      ],
    },
  ]),
}
