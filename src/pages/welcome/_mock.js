import { mockData } from '../../utils/utils'

export default {
  '/api/iconInfo': mockData([
    { key: 1, type: 'icon-html', info: 'HTML', level: 7 },
    { key: 2, type: 'icon-javascript', info: 'Javascript', level: 8 },
    { key: 3, type: 'icon-css', info: 'CSS', level: 6 },
    { key: 4, type: 'icon-Vue', info: 'Vue', level: 4 },
    { key: 5, type: 'icon-React', info: 'React', level: 6 },
    { key: 6, type: 'icon-sqlserver', info: 'SQL Server', level: 2 },
    { key: 7, type: 'icon-git', info: 'Git', level: 5 },
    { key: 8, type: 'icon-gitlab', info: 'Gitlab', level: 2 },
    { key: 9, type: 'icon-GitHub', info: 'GitHub', level: 4 },
    { key: 10, type: 'icon-webpack', info: 'Webpack', level: 3 },
    { key: 11, type: 'icon-eslint', info: 'ESlint', level: 3 },
    { key: 12, type: 'icon-file_type_karma', info: 'Karma', level: 2 },
    { key: 13, type: 'icon-file_type_mocha', info: 'Mocha', level: 2 },
    { key: 14, type: 'icon-travis', info: 'travis-ci', level: 2 },
    { key: 15, type: 'icon-echarts', info: 'Echarts', level: 5 },
    { key: 16, type: 'icon-vscode', info: 'VScode', level: 5 },
    { key: 17, type: 'icon-iconfont', info: 'Iconfont', level: 4 },
    { key: 18, type: 'icon-pr', info: 'Pr', level: 5 },
    { key: 19, type: 'icon-PS', info: 'Ps', level: 5 },
  ]),
  '/api/linePoints': mockData(),
}
