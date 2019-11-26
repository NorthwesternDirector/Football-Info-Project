import { mockData } from '../../utils/utils'

export default {
  '/api/scheduleDetail': mockData({
    id: 1,
    team: '巴塞罗那',
    logo: 'http://gdc.hupucdn.com/gdc/soccer/team/logo/110x88/252.png',
    timeRange: '2019-08-17,2019-11-23',
    list: [
      { data: '2019-08-17 03:00', teamA: '毕尔巴鄂', score: '1 - 0', teamB: '巴塞罗那', totalScore: 0 },
      { data: '2019-08-26 03:00', teamA: '巴塞罗那', score: '5 - 2', teamB: '皇家贝蒂斯', totalScore: 3 },
      { data: '2019-08-31 23:00', teamA: '奥萨苏纳', score: '2 - 2', teamB: '巴塞罗那', totalScore: 4 },
      { data: '2019-09-15 03:00', teamA: '巴塞罗那', score: '5 - 2', teamB: '瓦伦西亚', totalScore: 7 },
      { data: '2019-09-18 03:00', teamA: '多特蒙德', score: '0 - 0', teamB: '巴塞罗那', totalScore: 8 },
      { data: '2019-09-22 03:00', teamA: '格拉纳达', score: '2 - 0', teamB: '巴塞罗那', totalScore: 8 },
      { data: '2019-09-25 03:00', teamA: '巴塞罗那', score: '2 - 1', teamB: '比利亚雷亚尔', totalScore: 11 },
      { data: '2019-09-28 22:00', teamA: '赫塔菲', score: '0 - 2', teamB: '巴塞罗那', totalScore: 14 },
      { data: '2019-10-07 03:00', teamA: '巴塞罗那', score: '4 - 0', teamB: '塞维利亚', totalScore: 17 },
      { data: '2019-10-19 19:00', teamA: '埃瓦尔', score: '0 - 3', teamB: '巴塞罗那', totalScore: 20 },
      { data: '2019-10-24 03:00', teamA: '布拉格斯拉维亚', score: '1 - 2', teamB: '巴塞罗那', totalScore: 23 },
      { data: '2019-10-30 04:15', teamA: '巴塞罗那', score: '5 - 1', teamB: '巴拉多利德', totalScore: 26 },
      { data: '2019-11-02 23:00', teamA: '莱万特', score: '3 - 1', teamB: '巴塞罗那', totalScore: 26 },
      { data: '2019-11-06 01:55', teamA: '巴塞罗那', score: '0 - 0', teamB: '布拉格斯拉维亚', totalScore: 26 },
      { data: '2019-11-10 04:00', teamA: '巴塞罗那', score: '4 - 1', teamB: '塞尔塔', totalScore: 29 },
      { data: '2019-11-23 20:00', teamA: '莱加内斯', score: '1 - 2', teamB: '巴塞罗那', totalScore: 32 }],
  }),
}
