import { mockData } from '../../utils/utils'

export default {
  '/api/learningContent': mockData([
    {
      name: '前端',
      itemStyle: {
          color: '#da0d68',
      },
      children: [{
          name: 'React 套件',
          itemStyle: {
              color: '#975e6d',
          },
          children: [{
            name: 'React-Router',
            value: 1,
            itemStyle: {
                color: '#975e6d',
            },
          }, {
            name: 'Redux',
            value: 1,
            itemStyle: {
                color: '#975e6d',
            },
          }, {
            name: 'DvaJS',
            value: 1,
            itemStyle: {
                color: '#975e6d',
            },
          }, {
            name: 'UmiJS',
            value: 1,
            itemStyle: {
                color: '#975e6d',
            },
          }],
      }, {
          name: '语法',
          itemStyle: {
              color: '#e0719c',
          },
          children: [{
              name: 'ES6',
              value: 1,
              itemStyle: {
                  color: '#f99e1c',
              },
          }, {
              name: 'Less',
              value: 1,
              itemStyle: {
                  color: '#ef5a78',
              },
          }],
      }, {
        name: '插件',
        itemStyle: {
            color: '#e0719c',
        },
        children: [{
            name: 'lodash',
            value: 1,
            itemStyle: {
                color: '#f99e1c',
            },
        }, {
            name: 'moment',
            value: 1,
            itemStyle: {
                color: '#ef5a78',
            },
        }, {
            name: 'Echarts',
            value: 1,
            itemStyle: {
                color: '#f99e1c',
            },
        }, {
            name: 'umi-request',
            value: 1,
            itemStyle: {
                color: '#ef5a78',
            },
        }, {
            name: 'dva-loading',
            value: 1,
            itemStyle: {
                color: '#ef5a78',
            },
        }],
    }, {
        name: '框架',
        itemStyle: {
            color: '#e0719c',
        },
        children: [{
            name: 'Antd',
            value: 1,
            itemStyle: {
                color: '#f99e1c',
            },
        }, {
            name: 'Antd Pro',
            value: 1,
            itemStyle: {
                color: '#ef5a78',
            },
        }],
    }],
  }, {
      name: '网络',
      itemStyle: {
          color: '#da1d23',
      },
      children: [{
          name: 'CAS登录',
          itemStyle: {
              color: '#dd4c51',
          },
          children: [{
              name: '中央认证服务',
              value: 1,
              itemStyle: {
                  color: '#e62969',
              },
          }],
      }, {
          name: 'Proxy',
          itemStyle: {
              color: '#c94a44',
          },
          children: [{
              name: 'SwitchOmega',
              value: 1,
              itemStyle: {
                  color: '#b53b54',
              },
          }],
      }],
  }, {
      name: '协作工具',
      itemStyle: {
          color: '#ebb40f',
      },
      children: [{
          name: 'Gitlab',
          itemStyle: {
              color: '#e1c315',
          },
          children: [{
              name: '团队代码整合',
              value: 1,
              itemStyle: {
                  color: '#9ea718',
              },
          }],
      }, {
          name: 'Teambition',
          itemStyle: {
              color: '#b09733',
          },
          children: [{
              name: '开发任务信息',
              value: 1,
              itemStyle: {
                  color: '#8f1c53',
              },
          }],
      }, {
        name: 'Wiki',
        itemStyle: {
            color: '#f7a128',
        },
        children: [{
            name: '项目文档信息',
            value: 1,
            itemStyle: {
                color: '#8f1c53',
            },
        }],
    }, {
        name: 'YApi',
        itemStyle: {
            color: '#dd4c51',
        },
        children: [{
            name: '数据接口管理',
            value: 1,
            itemStyle: {
                color: '#e62969',
            },
        }],
    }, {
        name: 'OneNote',
        itemStyle: {
            color: '#b09733',
        },
        children: [{
            name: '工作日周报',
            value: 1,
            itemStyle: {
                color: '#8f1c53',
            },
        }],
    }],
  }, {
    name: '其他',
    itemStyle: {
        color: '#da1d23',
    },
    children: [{
        name: '编辑器',
        itemStyle: {
            color: '#dd4c51',
        },
        children: [{
            name: 'Vim',
            value: 1,
            itemStyle: {
                color: '#e62969',
            },
        }, {
            name: 'PowerShell',
            value: 1,
            itemStyle: {
                color: '#e62969',
            },
        }],
    }],
},
],
  ),
  '/api/learningWords': mockData([
    {
        name: 'React',
        value: 6,
    },
    {
        name: 'state',
        value: 1,
    },
    {
        name: 'props',
        value: 3,
    },
    {
        name: 'git',
        value: 1,
    },
    {
        name: 'Hook',
        value: 4,
    },
    {
        name: 'UseEffect',
        value: 4,
    },
    {
        name: 'UseState',
        value: 2,
    },
    {
        name: 'UseMemo',
        value: 1,
    },
    {
        name: 'UseCallbabck',
        value: 1,
    },
    {
        name: 'ES6',
        value: 4,
    },
    {
        name: 'DvaJS',
        value: 6,
    },
    {
        name: 'UmiJS',
        value: 5,
    },
    {
        name: 'redux',
        value: 2,
    },
    {
        name: 'redux-saga',
        value: 1,
    },
    {
        name: 'generator',
        value: 1,
    },
    {
        name: 'model',
        value: 6,
    },
    {
        name: 'service',
        value: 2,
    },
    {
        name: 'effects',
        value: 6,
    },
    {
        name: 'dispatch',
        value: 5,
    },
    {
        name: 'action',
        value: 5,
    },
    {
        name: 'state',
        value: 5,
    },
    {
        name: 'reducer',
        value: 5,
    },
    {
        name: 'lodash',
        value: 1,
    },
    {
        name: 'Antd Pro',
        value: 2,
    },
    {
        name: 'Antd',
        value: 6,
    },
    {
        name: 'memo',
        value: 1,
    },
    {
        name: 'Echarts',
        value: 2,
    },
    {
        name: 'umi-request',
        value: 1,
    },
    {
        name: 'moment.js',
        value: 1,
    },
    {
        name: 'router',
        value: 1,
    },
    {
        name: 'loading',
        value: 3,
    },

],
  ),
  '/api/learningTimes': mockData([
      {
          timeRange: '2019-11-4,2019-11-28',
          list: [
              { id: 1, date: '2019-11-04', time: ['08:45:00', '21:10:00'] },
              { id: 2, date: '2019-11-05', time: ['08:57:00', '21:18:00'] },
              { id: 3, date: '2019-11-06', time: ['09:01:00', '20:58:00'] },
              { id: 4, date: '2019-11-07', time: ['08:48:00', '20:55:00'] },
              { id: 5, date: '2019-11-08', time: ['08:52:00', '20:00:00'] },
              { id: 6, date: '2019-11-11', time: ['08:57:00', '20:37:00'] },
              { id: 7, date: '2019-11-12', time: ['09:06:00', '20:54:00'] },
              { id: 8, date: '2019-11-13', time: ['09:05:00', '20:41:00'] },
              { id: 9, date: '2019-11-14', time: ['08:58:00', '20:11:00'] },
              { id: 10, date: '2019-11-15', time: ['09:03:00', '22:03:00'] },
              { id: 11, date: '2019-11-18', time: ['09:00:00', '20:35:00'] },
              { id: 12, date: '2019-11-19', time: ['09:09:00', '21:03:00'] },
              { id: 13, date: '2019-11-20', time: ['08:57:00', '21:30:00'] },
              { id: 14, date: '2019-11-21', time: ['09:12:00', '21:05:00'] },
              { id: 15, date: '2019-11-25', time: ['08:56:00', '22:10:00'] },
              { id: 16, date: '2019-11-26', time: ['08:50:00', '21:10:00'] },
              { id: 17, date: '2019-11-27', time: ['08:59:00', '20:05:00'] },
              { id: 18, date: '2019-11-27', time: ['08:54:00', '20:24:00'] },
          ],
      },
  ]),
}
