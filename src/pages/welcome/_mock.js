import { mockData } from '../../utils/utils'

export default {
  '/api/iconInfo': mockData([
    { type: 'icon-html', info: 'HTML' },
    { type: 'icon-javascript', info: 'Javascript' },
    { type: 'icon-css', info: 'CSS' },
    { type: 'icon-Vue', info: 'Vue' },
    { type: 'icon-React', info: 'React' },
    { type: 'icon-sqlserver', info: 'SQL Server' },
    { type: 'icon-git', info: 'Git' },
    { type: 'icon-gitlab', info: 'Gitlab' },
    { type: 'icon-GitHub', info: 'GitHub' },
    { type: 'icon-webpack', info: 'Webpack' },
    { type: 'icon-eslint', info: 'ESlint' },
    { type: 'icon-file_type_karma', info: 'Karma' },
    { type: 'icon-file_type_mocha', info: 'Mocha' },
    { type: 'icon-travis', info: 'travis-ci' },
    { type: 'icon-echarts', info: 'Echarts' },
    { type: 'icon-vscode', info: 'VScode' },
    { type: 'icon-iconfont', info: 'Iconfont' },
    { type: 'icon-pr', info: 'Pr' },
    { type: 'icon-PS', info: 'Ps' },
  ]),
  '/api/linePoints': mockData(),
}
