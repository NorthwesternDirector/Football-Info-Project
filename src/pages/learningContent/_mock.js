import { mockData } from '../../utils/utils'

export default {
  '/api/learningContent': mockData([
    {
      name: 'React 套件',
      itemStyle: {
        color: '#EEAD0E',
      },
      children: [{
        name: 'React-Router',
        value: 1,
        itemStyle: {
          color: '#EED8AE',
        },
        children: [{
          name: '路由控制',
          value: 1,
          itemStyle: {
            color: '#CDAA7D',
          },
        }],
      }, {
        name: 'Redux',
        value: 1,
        itemStyle: {
          color: '#EEC591',
        },
        children: [{
          name: '数据管理方案',
          value: 1,
          itemStyle: {
            color: '#CDAA7D',
          },
        }],
      }, {
        name: 'DvaJS',
        value: 1,
        itemStyle: {
          color: '#CDBA96',
        },
        children: [{
          name: '数据流解决方案',
          value: 1,
          itemStyle: {
            color: '#CDAA7D',
          },
        }],
      }, {
        name: 'UmiJS',
        value: 1,
        itemStyle: {
          color: '#CDAA7D',
        },
        children: [{
          name: '开发框架',
          value: 1,
          itemStyle: {
            color: '#CDAA7D',
          },
        }],
      }],
    }, {
      name: '插件',
      itemStyle: {
          color: '#EE6363',
      },
      children: [{
          name: 'lodash',
          value: 1,
          itemStyle: {
              color: '#CD8500',
          },
          children: [{
            name: '工具库',
            value: 1,
            itemStyle: {
                color: '#CD8500',
            },
          }],
      }, {
          name: 'moment',
          value: 1,
          itemStyle: {
              color: '#CD6600',
          },
          children: [{
            name: '日期库',
            value: 1,
            itemStyle: {
                color: '#CD6600',
            },
          }],
      }, {
          name: 'Echarts',
          value: 2,
          itemStyle: {
              color: '#CD5B45',
          },
          children: [{
            name: '图表库',
            value: 2,
            itemStyle: {
                color: '#CD5B45',
            },
          }],
      }, {
        name: 'className',
        value: 1,
        itemStyle: {
            color: '#CD4F39',
        },
        children: [{
          name: 'className库',
          value: 1,
          itemStyle: {
              color: '#CD4F39',
          },
        }],
      }, {
        name: 'dva-loading',
        value: 1,
        itemStyle: {
            color: '#CD3700',
        },
        children: [{
          name: '获取加载状态',
          value: 1,
          itemStyle: {
              color: '#CD3700',
          },
        }],
      }, {
        name: 'umi-request',
        value: 1,
        itemStyle: {
            color: '#CD0000',
        },
        children: [{
          name: '发送网络请求',
          value: 1,
          itemStyle: {
              color: '#CD0000',
          },
        }],
      }],
    }, {
      name: '网络',
      itemStyle: {
          color: '#551A8B',
      },
      children: [{
        name: 'CAS登录',
        itemStyle: {
            color: '#68228B',
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
          color: '#9A32CD',
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
      name: '框架',
      itemStyle: {
          color: '#5D478B',
      },
      children: [{
          name: 'Antd',
          value: 2,
          itemStyle: {
              color: '#B23AEE',
          },
          children: [{
            name: '设计语言',
            value: 2,
            itemStyle: {
                color: '#B23AEE',
            },
          }],
      }, {
        name: 'Antd Pro',
        value: 2,
        itemStyle: {
            color: '#8968CD',
        },
        children: [{
          name: '项目模版',
          value: 2,
          itemStyle: {
              color: '#8968CD',
          },
        }],
      }],
    }, {
      name: '协作工具',
      itemStyle: {
          color: '#1874CD',
      },
      children: [{
        name: 'Gitlab',
        itemStyle: {
          color: '#4F94CD',
        },
        children: [{
            name: '团队代码整合',
            value: 1,
            itemStyle: {
              color: '#9d977f',
            },
        }],
      }, {
          name: 'Teambition',
          itemStyle: {
            color: '#009ACD',
          },
          children: [{
              name: '开发任务信息',
              value: 1,
              itemStyle: {
                color: '#beb276',
              },
          }],
      }, {
        name: 'Wiki',
        itemStyle: {
          color: '#6CA6CD',
        },
        children: [{
          name: '项目文档信息',
          value: 1,
          itemStyle: {
            color: '#744e03',
          },
        }],
      }, {
        name: 'YApi',
        itemStyle: {
          color: '#8DB6CD',
        },
        children: [{
            name: '数据接口管理',
            value: 1,
            itemStyle: {
              color: '#a3a36f',
            },
        }],
      }, {
        name: 'OneNote',
        itemStyle: {
          color: '#9FB6CD',
        },
        children: [{
            name: '工作日周报',
            value: 1,
            itemStyle: {
              color: '#c9b583',
            },
        }],
      }, {
        name: 'GitBook',
        itemStyle: {
            color: '#A2B5CD',
        },
        children: [{
            name: '学习记录',
            value: 1,
            itemStyle: {
              color: '#978847',
            },
        }],
      }, {
        name: 'Jira',
        itemStyle: {
          color: '#9AC0CD',
        },
        children: [{
            name: '测试状态管理',
            value: 1,
            itemStyle: {
              color: '#8b8c90',
            },
        }],
      }],
    }, {
      name: '其他',
      itemStyle: {
          color: '#7A8B8B',
      },
      children: [{
        name: '编辑器',
        itemStyle: {
          color: '#9AC0CD',
        },
        children: [{
            name: 'Vim',
            value: 1,
            itemStyle: {
              color: '#9AC0CD',
            },
        }, {
            name: 'PowerShell',
            value: 1,
            itemStyle: {
              color: '#B4CDCD',
            },
         }],
      }],
    }, {
      name: '语法',
      itemStyle: {
          color: '#548B54',
      },
      children: [{
        name: 'ES6',
        value: 1,
        itemStyle: {
          color: '#66CDAA',
        },
        children: [{
          name: '语法',
          value: 1,
          itemStyle: {
            color: '#66CDAA',
          },
        }],
      }, {
        name: 'Less',
        value: 1,
        itemStyle: {
          color: '#43CD80',
        },
        children: [{
          name: '样式',
          value: 1,
          itemStyle: {
            color: '#43CD80',
          },
        }],
      }],
    },
  ]),

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
      value: 4,
    },
    {
      name: 'Hooks',
      value: 9,
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
      value: 5,
    },
    {
      name: 'UseCallbabck',
      value: 5,
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
      value: 4,
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
      value: 2,
    },
    {
      name: 'less',
      value: 2,
    },
    {
      name: 'className',
      value: 1,
    }, {
      name: 'Jsdiff',
      value: 1,
    },
  ]),

  '/api/learningWalkingStep': mockData([
    ['2019-11-03', 17938, 0],
    ['2019-11-04', 7315, 0],
    ['2019-11-05', 4824, 0],
    ['2019-11-06', 2979, 0],
    ['2019-11-07', 4938, 0],
    ['2019-11-08', 8849, 0],
    ['2019-11-09', 12158, 0],
    ['2019-11-10', 12872, 0],
    ['2019-11-11', 8382, 0],
    ['2019-11-12', 4158, 5],
    ['2019-11-13', 6727, 3],
    ['2019-11-14', 8445, 3],
    ['2019-11-15', 7403, 0],
    ['2019-11-16', 15767, 0],
    ['2019-11-17', 2230, 0],
    ['2019-11-18', 8765, 0],
    ['2019-11-19', 5467, 0],
    ['2019-11-20', 4766, 0],
    ['2019-11-21', 7123, 3],
    ['2019-11-22', 11380, 0],
    ['2019-11-23', 14048, 0],
    ['2019-11-24', 1953, 0],
    ['2019-11-25', 3805, 4],
    ['2019-11-26', 5157, 2],
    ['2019-11-27', 4739, 3],
    ['2019-11-28', 7446, 0],
    ['2019-11-29', 4826, 0],
    ['2019-11-30', 10324, 0],
    ['2019-12-01', 12259, 0],
    ['2019-12-02', 7172, 0],
    ['2019-12-03', 6244, 0],
    ['2019-12-04', 5572, 3],
    ['2019-12-05', 15858, 6],
    ['2019-12-06', 9198, 6],
    ['2019-12-07', 14212, 0],
    ['2019-12-08', 21081, 0],
    ['2019-12-09', 6313, 1],
    ['2019-12-10', 7912, 0],
    ['2019-12-11', 9408, 0],
    ['2019-12-12', 10083, 0],
    ['2019-12-13', 9461, 0],
    ['2019-12-14', 4650, 0],
    ['2019-12-15', 11175, 0],
    ['2019-12-16', 4769, 0],
    ['2019-12-17', 11938, 0],
    ['2019-12-18', 3487, 0],
    ['2019-12-19', 6417, 0],
    ['2019-12-20', 6181, 6],
    ['2019-12-21', 14320, 0],
    ['2019-12-22', 9751, 0],
    ['2019-12-23', 5725, 1],
    ['2019-12-24', 9578, 1],
    ['2019-12-25', 5444, 0],
    ['2019-12-26', 6445, 0],
    ['2019-12-27', 6272, 0],
    ['2019-12-28', 22740, 0],
    ['2019-12-29', 10555, 0],
    ['2019-12-30', 6197, 8],
    ['2019-12-31', 9628, 3],
    ['2020-01-01', 1959, 0],
    ['2020-01-02', 6525, 1],
    ['2020-01-03', 4642, 1],
    ['2020-01-04', 13095, 0],
    ['2020-01-05', 9505, 0],
    ['2020-01-06', 7168, 3],
    ['2020-01-07', 5450, 0],
    ['2020-01-08', 7529, 6],
    ['2020-01-09', 3764, 0],
    ['2020-01-10', 5919, 10],
    ['2020-01-11', 6146, 0],
    ['2020-01-12', 11456, 0],
    ['2020-01-13', 5724, 6],
    ['2020-01-14', 5557, 5],
    ['2020-01-15', 10676, 0],
    ['2020-01-16', 13320, 0],
    ['2020-01-17', 6205, 0],
    ['2020-01-18', 2565, 0],
    ['2020-01-19', 6432, 0],
  ]),

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
        { id: 43, date: '2020-01-03', time: ['08:53:00', '18:30:00', 6.62], sleepTime: ['00:14', 8.47, 1.42] },
        { id: 44, date: '2020-01-06', time: ['08:53:00', '20:31:00', 8.40], sleepTime: ['00:58', 7.42, 1.78] },
        { id: 45, date: '2020-01-07', time: ['09:00:00', '20:18:00', 8.30], sleepTime: ['23:51', 8.30, 1.93] },
        { id: 46, date: '2020-01-08', time: ['09:02:00', '20:55:00', 8.05], sleepTime: ['23:28', 8.72, 2.22] },
        { id: 47, date: '2020-01-09', time: ['09:15:00', '20:40:00', 8.42], sleepTime: ['00:45', 7.58, 1.25] },
        { id: 48, date: '2020-01-10', time: ['09:08:00', '22:01:00', 9.88], sleepTime: ['23:53', 8.65, 1.90] },
        { id: 49, date: '2020-01-13', time: ['08:56:00', '21:10:00', 9.23], sleepTime: ['23:50', 8.50, 1.03] },
        { id: 50, date: '2020-01-14', time: ['08:56:00', '19:00:00', 7.07], sleepTime: ['00:13', 8.23, 1.58] },
        { id: 51, date: '2020-01-15', time: ['09:00:00', '18:45:00', 6.75], sleepTime: ['00:34', 7.77, 2.15] },
        { id: 52, date: '2020-01-16', time: ['09:10:00', '18:30:00', 6.33], sleepTime: ['00:39', 8.00, 1.83] },
        { id: 53, date: '2020-01-17', time: ['09:05:00', '20:05:00', 8.00], sleepTime: ['00:59', 6.00, 1.08] },
        { id: 55, date: '2020-01-19', time: ['09:15:00', '20:45:00', 8.50], sleepTime: ['23:37', 8.87, 2.15] },
        { id: 56, date: '2020-01-20', time: ['09:09:00', '18:30:00', 6.35], sleepTime: ['00:15', 7.80, 1.90] },
      ],
    },
  ]),
}
