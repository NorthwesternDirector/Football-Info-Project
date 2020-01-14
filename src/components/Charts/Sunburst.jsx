import React from 'react'
import ReactEcharts from 'echarts-for-react'

const Sunburst = ({
  data,
  chartHeight,
  title,
}) => {
  const option = {
    title: {
      top: 0,
      text: title,
      subtext: '2019.11.03-2020.1.21',
      left: 'center',
    },
    series: {
      type: 'sunburst',
      highlightPolicy: 'ancestor',
      data,
      radius: [0, '100%'],
      center: ['50%', '53%'],
      sort: null,
      levels: [{}, {
          r0: '15%',
          r: '35%',
          itemStyle: {
              borderWidth: 2,
          },
          label: {
              rotate: 'tangential',
          },
      }, {
          r0: '35%',
          r: '65%',
          label: {
              align: 'right',
          },
      }, {
          r0: '65%',
          r: '67%',
          label: {
              position: 'outside',
              padding: 3,
              silent: false,
          },
          itemStyle: {
              borderWidth: 3,
          },
      }],
    },
  }
  return <ReactEcharts theme="theme" option={option} style={{ height: chartHeight }}></ReactEcharts>
}

export default Sunburst
