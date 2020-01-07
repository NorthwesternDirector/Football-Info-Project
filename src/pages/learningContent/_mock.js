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
        }, {
          name: 'className',
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
    }, {
        name: 'GitBook',
        itemStyle: {
            color: '#dd4c51',
        },
        children: [{
            name: '学习记录',
            value: 1,
            itemStyle: {
                color: '#e62969',
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
        value: 2,
    },
    {
        name: 'Hooks',
        value: 7,
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
        value: 7,
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
        value: 2,
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
        value: 7,
    },
    {
        name: 'memo',
        value: 1,
    },
    {
        name: 'Echarts',
        value: 4,
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
        value: 4,
    },
    {
        name: 'promise',
        value: 1,
    },
    {
        name: 'async',
        value: 1,
    },
    {
        name: 'mock',
        value: 1,
    },
    {
        name: 'less',
        value: 2,
    },
    {
        name: 'className',
        value: 1,
    },
],
  ),
  '/api/learningTimes': mockData([
    {
      timeRange: '2019-11-4,2019-11-28',
      list: [
        { id: 1, date: '2019-11-04', time: ['08:45:00', '21:10:00', 9.42], sleepTime: ['00:20', 4.93, 0.85] },
        { id: 2, date: '2019-11-05', time: ['08:57:00', '21:18:00', 9.35], sleepTime: ['23:49', 7.75, 2.82] },
        { id: 3, date: '2019-11-06', time: ['09:01:00', '20:58:00', 8.98], sleepTime: ['00:21', 7.65, 2.32] },
        { id: 4, date: '2019-11-07', time: ['08:48:00', '20:55:00', 9.12], sleepTime: ['00:05', 7.82, 2.51] },
        { id: 5, date: '2019-11-08', time: ['08:52:00', '20:08:00', 8.00], sleepTime: ['00:59', 6.62, 2.85] },
        { id: 6, date: '2019-11-11', time: ['08:57:00', '20:37:00', 8.67], sleepTime: ['00:59', 7.00, 2.01] },
        { id: 7, date: '2019-11-12', time: ['09:06:00', '20:54:00', 8.80], sleepTime: ['00:22', 7.92, 2.13] },
        { id: 8, date: '2019-11-13', time: ['09:05:00', '20:41:00', 8.60], sleepTime: ['23:21', 8.33, 1.98] },
        { id: 9, date: '2019-11-14', time: ['08:58:00', '20:11:00', 8.22], sleepTime: ['23:39', 8.50, 2.47] },
        { id: 10, date: '2019-11-15', time: ['09:03:00', '19:34:00', 7.52], sleepTime: [null, null, null] },
        { id: 11, date: '2019-11-18', time: ['09:00:00', '20:35:00', 8.58], sleepTime: [null, null, null] },
        { id: 12, date: '2019-11-19', time: ['09:09:00', '21:03:00', 8.90], sleepTime: [null, null, null] },
        { id: 13, date: '2019-11-20', time: ['08:57:00', '21:30:00', 9.55], sleepTime: [null, null, null] },
        { id: 14, date: '2019-11-21', time: ['09:12:00', '21:05:00', 8.88], sleepTime: [null, null, null] },
        { id: 15, date: '2019-11-25', time: ['08:56:00', '22:10:00', 10.23], sleepTime: [null, null, null] },
        { id: 16, date: '2019-11-26', time: ['08:50:00', '21:10:00', 9.33], sleepTime: ['00:29', 7.47, 3.08] },
        { id: 17, date: '2019-11-27', time: ['08:59:00', '20:05:00', 8.10], sleepTime: ['00:02', 8.03, 1.47] },
        { id: 18, date: '2019-11-28', time: ['08:54:00', '20:30:00', 8.60], sleepTime: ['00:15', 8.03, 1.47] },
        { id: 19, date: '2019-11-29', time: ['08:56:00', '19:10:00', 7.27], sleepTime: ['00:09', 7.62, 2.08] },
        { id: 20, date: '2019-12-02', time: ['08:58:00', '20:05:00', 8.03], sleepTime: ['00:11', 7.83, 1.70] },
        { id: 21, date: '2019-12-03', time: ['09:02:00', '20:12:00', 8.17], sleepTime: ['23:29', 8.53, 2.60] },
        { id: 22, date: '2019-12-04', time: ['08:49:00', '21:35:00', 9.77], sleepTime: ['23:41', 8.18, 3.18] },
        { id: 23, date: '2019-12-05', time: ['08:31:00', '19:10:00', 7.68], sleepTime: ['23:32', 8.23, 2.33] },
        { id: 24, date: '2019-12-06', time: ['08:40:00', '20:00:00', 8.33], sleepTime: ['00:17', 8.00, 1.20] },
        { id: 25, date: '2019-12-09', time: ['07:30:00', '18:30:00', 8.00], sleepTime: ['00:27', 7.33, 1.81] },
        { id: 26, date: '2019-12-10', time: ['07:40:00', '18:42:00', 8.03], sleepTime: ['22:55', 8.03, 1.78] },
        { id: 27, date: '2019-12-11', time: ['07:35:00', '18:40:00', 8.17], sleepTime: ['00:44', 6.35, 1.42] },
        { id: 28, date: '2019-12-12', time: ['07:50:00', '19:10:00', 8.33], sleepTime: ['23:58', 6.50, 1.20] },
        { id: 29, date: '2019-12-13', time: ['08:15:00', '18:40:00', 7.43], sleepTime: ['22:39', 8.98, 2.57] },
        { id: 30, date: '2019-12-16', time: ['08:39:00', '20:10:00', 8.52], sleepTime: ['23:38', 8.42, 1.90] },
        { id: 31, date: '2019-12-17', time: ['08:44:00', '19:40:00', 7.92], sleepTime: ['23:45', 7.65, 1.76] },
        { id: 32, date: '2019-12-18', time: ['08:51:00', '19:55:00', 8.02], sleepTime: ['23:00', 9.05, 2.10] },
        { id: 33, date: '2019-12-19', time: ['08:59:00', '19:35:00', 7.57], sleepTime: ['23:30', 8.55, 1.88] },
        { id: 34, date: '2019-12-20', time: ['08:55:00', '20:40:00', 8.72], sleepTime: ['22:53', 9.15, 2.52] },
        { id: 35, date: '2019-12-23', time: ['08:45:00', '20:00:00', 8.22], sleepTime: ['23:09', 8.80, 2.93] },
        { id: 36, date: '2019-12-24', time: ['08:45:00', '21:12:00', 9.45], sleepTime: ['00:33', 7.48, 1.72] },
        { id: 37, date: '2019-12-25', time: ['08:47:00', '20:00:00', 8.22], sleepTime: ['23:19', 8.78, 2.63] },
        { id: 38, date: '2019-12-26', time: ['08:55:00', '21:45:00', 9.98], sleepTime: ['23:57', 7.98, 2.12] },
        { id: 39, date: '2019-12-27', time: ['08:55:00', '21:34:00', 9.65], sleepTime: ['00:45', 7.48, 2.50] },
        { id: 40, date: '2019-12-30', time: ['08:51:00', '20:45:00', 8.90], sleepTime: ['00:13', 7.87, 2.60] },
        { id: 41, date: '2019-12-31', time: ['09:06:00', '18:30:00', 6.40], sleepTime: ['23:59', 8.15, 2.57] },
        { id: 42, date: '2020-01-02', time: ['08:53:00', '20:25:00', 8.53], sleepTime: ['23:48', 8.42, 1.48] },
        { id: 42, date: '2020-01-03', time: ['08:53:00', '18:30:00', 6.62], sleepTime: ['00:14', 8.47, 1.42] },
        { id: 42, date: '2020-01-06', time: ['08:53:00', '20:31:00', 8.40], sleepTime: ['00:58', 7.42, 1.78] },
        { id: 42, date: '2020-01-07', time: ['09:00:00', ''], sleepTime: ['23:51', 8.30, 1.93] },
      ],
    },
  ]),
}
