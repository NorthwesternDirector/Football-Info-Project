import { mockData } from '../../utils/utils'

export default {
  '/api/scheduleDetail': mockData([{
    id: 1,
    team: '巴塞罗那',
    logo: 'http://gdc.hupucdn.com/gdc/soccer/team/logo/110x88/252.png',
    timeRange: '2019-08-17,2019-11-24',
    list: [
      { data: '2019-08-17 03:00', teamA: '毕尔巴鄂', score: '1 - 0', teamB: '巴塞罗那', totalScore: 0 },
      { data: '2019-08-26 03:00', teamA: '巴塞罗那', score: '5 - 2', teamB: '皇家贝蒂斯', totalScore: 3 },
      { data: '2019-08-31 23:00', teamA: '奥萨苏纳', score: '2 - 2', teamB: '巴塞罗那', totalScore: 4 },
      { data: '2019-09-15 03:00', teamA: '巴塞罗那', score: '5 - 2', teamB: '瓦伦西亚', totalScore: 7 },
      { data: '2019-09-22 03:00', teamA: '格拉纳达', score: '2 - 0', teamB: '巴塞罗那', totalScore: 7 },
      { data: '2019-09-25 03:00', teamA: '巴塞罗那', score: '2 - 1', teamB: '比利亚雷亚尔', totalScore: 10 },
      { data: '2019-09-28 22:00', teamA: '赫塔菲', score: '0 - 2', teamB: '巴塞罗那', totalScore: 13 },
      { data: '2019-10-07 03:00', teamA: '巴塞罗那', score: '4 - 0', teamB: '塞维利亚', totalScore: 16 },
      { data: '2019-10-19 19:00', teamA: '埃瓦尔', score: '0 - 3', teamB: '巴塞罗那', totalScore: 19 },
      { data: '2019-10-30 04:15', teamA: '巴塞罗那', score: '5 - 1', teamB: '巴拉多利德', totalScore: 22 },
      { data: '2019-11-02 23:00', teamA: '莱万特', score: '3 - 1', teamB: '巴塞罗那', totalScore: 22 },
      { data: '2019-11-10 04:00', teamA: '巴塞罗那', score: '4 - 1', teamB: '塞尔塔', totalScore: 25 },
      { data: '2019-11-23 20:00', teamA: '莱加内斯', score: '1 - 2', teamB: '巴塞罗那', totalScore: 28 }],
  },
  {
    id: 2,
    team: '皇家马德里',
    logo: 'https://b3.hoopchina.com.cn/material/games/gdc/football/team/87x87/210.jpg',
    timeRange: '2019-08-17,2019-11-24',
    list: [
    { data: '2019-08-17 23:00', teamA: '塞尔塔', score: '1 - 3', teamB: '皇马', totalScore: '3' },
    { data: '2019-08-25 01:00', teamA: '皇马', score: '1 - 1', teamB: '巴拉多利德', totalScore: '4' },
    { data: '2019-09-02 03:00', teamA: '比利亚雷亚尔', score: '2 - 2', teamB: '皇马', totalScore: '5' },
    { data: '2019-09-14 19:00', teamA: '皇马', score: '3 - 2', teamB: '莱万特', totalScore: '8' },
    { data: '2019-09-23 03:00', teamA: '塞维利亚', score: '0 - 1', teamB: '皇马', totalScore: '11' },
    { data: '2019-09-26 03:00', teamA: '皇马', score: '2 - 0', teamB: '奥萨苏纳', totalScore: '14' },
    { data: '2019-09-29 03:00', teamA: '马竞', score: '0 - 0', teamB: '皇马', totalScore: '15' },
    { data: '2019-10-05 22:00', teamA: '皇马', score: '4 - 2', teamB: '格拉纳达', totalScore: '18' },
    { data: '2019-10-20 03:00', teamA: '马略卡', score: '1 - 0', teamB: '皇马', totalScore: '18' },
    { data: '2019-10-31 04:15', teamA: '皇马', score: '5 - 0', teamB: '莱加内斯', totalScore: '21' },
    { data: '2019-11-03 04:00', teamA: '皇马', score: '0 - 0', teamB: '皇家贝蒂斯', totalScore: '22' },
    { data: '2019-11-10 01:30', teamA: '埃瓦尔', score: '0 - 4', teamB: '皇马', totalScore: '25' },
    { data: '2019-11-24 04:00', teamA: '皇马', score: '3 - 1', teamB: '皇家社会', totalScore: '28' }],
  },
  {
    id: 3,
    team: '西班牙人',
    logo: 'https://b3.hoopchina.com.cn/material/games/gdc/football/team/87x87/243.jpg',
    timeRange: '2019-08-17,2019-11-24',
    list: [
      { data: '2019-08-19 01:00', round: '第1轮', teamA: '西班牙人', score: '0 - 2', teamB: '塞维利亚', totalScore: '0' },
      { data: '2019-08-25 23:00', round: '第2轮', teamA: '阿拉维斯', score: '0 - 0', teamB: '西班牙人', totalScore: '1' },
      { data: '2019-09-02 01:00', round: '第3轮', teamA: '西班牙人', score: '0 - 3', teamB: '格拉纳达', totalScore: '1' },
      { data: '2019-09-15 18:00', round: '第4轮', teamA: '埃瓦尔', score: '1 - 2', teamB: '西班牙人', totalScore: '4' },
      { data: '2019-09-22 20:00', round: '第5轮', teamA: '西班牙人', score: '1 - 3', teamB: '皇家社会', totalScore: '4' },
      { data: '2019-09-27 02:00', round: '第6轮', teamA: '塞尔塔', score: '1 - 1', teamB: '西班牙人', totalScore: '5' },
      { data: '2019-09-29 18:00', round: '第7轮', teamA: '西班牙人', score: '0 - 2', teamB: '巴拉多利德', totalScore: '5' },
      { data: '2019-10-06 18:00', round: '第8轮', teamA: '马略卡', score: '2 - 0', teamB: '西班牙人', totalScore: '5' },
      { data: '2019-10-20 22:00', round: '第9轮', teamA: '西班牙人', score: '0 - 1', teamB: '比利亚雷亚尔', totalScore: '5' },
      { data: '2019-10-27 23:00', round: '第10轮', teamA: '莱万特', score: '0 - 1', teamB: '西班牙人', totalScore: '8' },
      { data: '2019-10-31 03:00', round: '第11轮', teamA: '毕尔巴鄂', score: '3 - 0', teamB: '西班牙人', totalScore: '8' },
      { data: '2019-11-02 20:00', round: '第12轮', teamA: '西班牙人', score: '1 - 2', teamB: '瓦伦西亚', totalScore: '8' },
      { data: '2019-11-10 23:00', round: '第13轮', teamA: '马竞', score: '3 - 1', teamB: '西班牙人', totalScore: '8' },
      { data: '2019-11-24 19:00', round: '第14轮', teamA: '西班牙人', score: '1 - 1', teamB: '赫塔菲', totalScore: '9' }],
  },
  {
    id: 4,
    team: '马德里竞技',
    logo: 'https://b3.hoopchina.com.cn/material/games/gdc/football/team/87x87/459.jpg',
    timeRange: '2019-08-17,2019-11-24',
    list: [
      { data: '2019-08-19 04:00', round: '第1轮', teamA: '马竞', score: '1 - 0', teamB: '赫塔菲 ', totalScore: '3' },
      { data: '2019-08-26 01:00', round: '第2轮', teamA: '莱加内斯', score: '0 - 1', teamB: '马竞 ', totalScore: '6' },
      { data: '2019-09-02 01:00', round: '第3轮', teamA: '马竞', score: '3 - 2', teamB: '埃瓦尔 ', totalScore: '9' },
      { data: '2019-09-15 00:30', round: '第4轮', teamA: '皇家社会', score: '2 - 0', teamB: '马竞 ', totalScore: '9' },
      { data: '2019-09-22 00:30', round: '第5轮', teamA: '马竞', score: '0 - 0', teamB: '塞尔塔 ', totalScore: '10' },
      { data: '2019-09-26 01:00', round: '第6轮', teamA: '马略卡', score: '0 - 2', teamB: '马竞 ', totalScore: '13' },
      { data: '2019-09-29 03:00', round: '第7轮', teamA: '马竞', score: '0 - 0', teamB: '皇马 ', totalScore: '14' },
      { data: '2019-10-06 22:00', round: '第8轮', teamA: '巴拉多利德', score: '0 - 0', teamB: '马竞 ', totalScore: '15' },
      { data: '2019-10-19 22:00', round: '第9轮', teamA: '马竞', score: '1 - 1', teamB: '瓦伦西亚 ', totalScore: '16' },
      { data: '2019-10-27 03:00', round: '第10轮', teamA: '马竞', score: '2 - 0', teamB: '毕尔巴鄂 ', totalScore: '19' },
      { data: '2019-10-30 02:00', round: '第11轮', teamA: '阿拉维斯', score: '1 - 1', teamB: '马竞 ', totalScore: '20' },
      { data: '2019-11-03 01:30', round: '第12轮', teamA: '塞维利亚', score: '1 - 1', teamB: '马竞 ', totalScore: '21' },
      { data: '2019-11-10 23:00', round: '第13轮', teamA: '马竞', score: '3 - 1', teamB: '西班牙人 ', totalScore: '24' },
      { data: '2019-11-24 01:30', round: '第14轮', teamA: '格拉纳达', score: '1 - 1', teamB: '马竞 ', totalScore: '25' }],
  },
  {
    id: 5,
    team: '塞维利亚',
    logo: 'https://b3.hoopchina.com.cn/material/games/gdc/football/team/87x87/209.jpg',
    timeRange: '2019-08-17,2019-11-24',
    list: [
      { data: '2019-08-19 01:00', round: '第1轮', teamA: '西班牙人', score: '0 - 2', teamB: '塞维利亚 ', totalScore: '3' },
      { data: '2019-08-24 02:00', round: '第2轮', teamA: '格拉纳达', score: '0 - 1', teamB: '塞维利亚 ', totalScore: '6' },
      { data: '2019-08-31 02:00', round: '第3轮', teamA: '塞维利亚', score: '1 - 1', teamB: '塞尔塔 ', totalScore: '7' },
      { data: '2019-09-15 20:00', round: '第4轮', teamA: '阿拉维斯', score: '0 - 1', teamB: '塞维利亚 ', totalScore: '10' },
      { data: '2019-09-23 03:00', round: '第5轮', teamA: '塞维利亚', score: '0 - 1', teamB: '皇马 ', totalScore: '10' },
      { data: '2019-09-27 01:00', round: '第6轮', teamA: '埃瓦尔', score: '3 - 2', teamB: '塞维利亚 ', totalScore: '10' },
      { data: '2019-09-30 03:00', round: '第7轮', teamA: '塞维利亚', score: '3 - 2', teamB: '皇家社会 ', totalScore: '13' },
      { data: '2019-10-07 03:00', round: '第8轮', teamA: '巴塞罗那', score: '4 - 0', teamB: '塞维利亚 ', totalScore: '13' },
      { data: '2019-10-21 03:00', round: '第9轮', teamA: '塞维利亚', score: '1 - 0', teamB: '莱万特 ', totalScore: '16' },
      { data: '2019-10-28 01:30', round: '第10轮', teamA: '塞维利亚', score: '2 - 0', teamB: '赫塔菲 ', totalScore: '19' },
      { data: '2019-10-31 02:00', round: '第11轮', teamA: '瓦伦西亚', score: '1 - 1', teamB: '塞维利亚 ', totalScore: '20' },
      { data: '2019-11-03 01:30', round: '第12轮', teamA: '塞维利亚', score: '1 - 1', teamB: '马竞 ', totalScore: '21' },
      { data: '2019-11-11 04:00', round: '第13轮', teamA: '皇家贝蒂斯', score: '1 - 2', teamB: '塞维利亚 ', totalScore: '24' },
      { data: '2019-11-25 04:00', round: '第14轮', teamA: '巴拉多利德', score: '0 - 1', teamB: '塞维利亚 ', totalScore: '27' },
    ],
  },
  {
    id: 6,
    team: '毕尔巴鄂',
    logo: 'https://b3.hoopchina.com.cn/material/games/gdc/football/team/87x87/250.jpg',
    timeRange: '2019-08-17,2019-11-24',
    list: [
      { data: '2019-08-17 03:00', round: '第1轮', teamA: '毕尔巴鄂', score: '1 - 0', teamB: '巴塞罗那 ', totalScore: '3' },
      { data: '2019-08-25 03:00', round: '第2轮', teamA: '赫塔菲', score: '1 - 1', teamB: '毕尔巴鄂 ', totalScore: '4' },
      { data: '2019-08-31 04:00', round: '第3轮', teamA: '毕尔巴鄂', score: '2 - 0', teamB: '皇家社会 ', totalScore: '7' },
      { data: '2019-09-14 03:00', round: '第4轮', teamA: '马略卡', score: '0 - 0', teamB: '毕尔巴鄂 ', totalScore: '8' },
      { data: '2019-09-23 00:30', round: '第5轮', teamA: '毕尔巴鄂', score: '2 - 0', teamB: '阿拉维斯 ', totalScore: '11' },
      { data: '2019-09-26 01:00', round: '第6轮', teamA: '莱加内斯', score: '1 - 1', teamB: '毕尔巴鄂 ', totalScore: '12' },
      { data: '2019-09-28 19:00', round: '第7轮', teamA: '毕尔巴鄂', score: '0 - 1', teamB: '瓦伦西亚 ', totalScore: '12' },
      { data: '2019-10-06 20:00', round: '第8轮', teamA: '塞尔塔', score: '1 - 0', teamB: '毕尔巴鄂 ', totalScore: '12' },
      { data: '2019-10-21 00:30', round: '第9轮', teamA: '毕尔巴鄂', score: '1 - 1', teamB: '巴拉多利德 ', totalScore: '13' },
      { data: '2019-10-27 03:00', round: '第10轮', teamA: '马竞', score: '2 - 0', teamB: '毕尔巴鄂 ', totalScore: '13' },
      { data: '2019-10-31 03:00', round: '第11轮', teamA: '毕尔巴鄂', score: '3 - 0', teamB: '西班牙人 ', totalScore: '16' },
      { data: '2019-11-03 21:00', round: '第12轮', teamA: '比利亚雷亚尔', score: '0 - 0', teamB: '毕尔巴鄂 ', totalScore: '17' },
      { data: '2019-11-10 21:00', round: '第13轮', teamA: '毕尔巴鄂', score: '2 - 1', teamB: '莱万特 ', totalScore: '20' },
      { data: '2019-11-24 21:00', round: '第14轮', teamA: '奥萨苏纳', score: '1 - 2', teamB: '毕尔巴鄂 ', totalScore: '23' },
    ],
  },
  {
    id: 7,
    team: '皇家贝蒂斯',
    logo: 'https://b3.hoopchina.com.cn/material/games/gdc/football/team/87x87/47778.jpg',
    timeRange: '2019-08-17,2019-11-24',
    list: [
      { data: '2019-08-19 03:00', round: '第1轮', teamA: '皇家贝蒂斯', score: '1 - 2', teamB: '巴拉多利德', totalScore: '0' },
      { data: '2019-08-26 03:00', round: '第2轮', teamA: '巴塞罗那', score: '5 - 2', teamB: '皇家贝蒂斯', totalScore: '0' },
      { data: '2019-09-01 03:00', round: '第3轮', teamA: '皇家贝蒂斯', score: '2 - 1', teamB: '莱加内斯', totalScore: '3' },
      { data: '2019-09-16 03:00', round: '第4轮', teamA: '皇家贝蒂斯', score: '1 - 1', teamB: '赫塔菲', totalScore: '4' },
      { data: '2019-09-21 03:00', round: '第5轮', teamA: '奥萨苏纳', score: '0 - 0', teamB: '皇家贝蒂斯', totalScore: '5' },
      { data: '2019-09-25 02:00', round: '第6轮', teamA: '皇家贝蒂斯', score: '3 - 1', teamB: '莱万特', totalScore: '6' },
      { data: '2019-09-28 03:00', round: '第7轮', teamA: '比利亚雷亚尔', score: '5 - 1', teamB: '皇家贝蒂斯', totalScore: '6' },
      { data: '2019-10-05 03:00', round: '第8轮', teamA: '皇家贝蒂斯', score: '1 - 1', teamB: '埃瓦尔', totalScore: '7' },
      { data: '2019-10-20 20:00', round: '第9轮', teamA: '皇家社会', score: '3 - 1', teamB: '皇家贝蒂斯', totalScore: '7' },
      { data: '2019-10-27 21:00', round: '第10轮', teamA: '格拉纳达', score: '1 - 0', teamB: '皇家贝蒂斯', totalScore: '7' },
      { data: '2019-10-31 04:00', round: '第11轮', teamA: '皇家贝蒂斯', score: '2 - 1', teamB: '塞尔塔', totalScore: '10' },
      { data: '2019-11-03 04:00', round: '第12轮', teamA: '皇马', score: '0 - 0', teamB: '皇家贝蒂斯', totalScore: '11' },
      { data: '2019-11-11 04:00', round: '第13轮', teamA: '皇家贝蒂斯', score: '1 - 2', teamB: '塞维利亚', totalScore: '11' },
      { data: '2019-11-23 23:00', round: '第14轮', teamA: '皇家贝蒂斯', score: '2 - 1', teamB: '瓦伦西亚', totalScore: '14' },
    ],
  },
]),
}
