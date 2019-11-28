import React from 'react'
import ReactEcharts from 'echarts-for-react'

const Sunburst = ({
  data,
  chartHeight,
}) => {
  const option = {
    series: {
      type: 'sunburst',
      highlightPolicy: 'ancestor',
      data,
      radius: [0, '95%'],
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
          r: '70%',
          label: {
              align: 'right',
          },
      }, {
          r0: '70%',
          r: '72%',
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
