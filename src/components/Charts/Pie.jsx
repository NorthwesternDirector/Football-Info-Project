import React from 'react'
import ReactEcharts from 'echarts-for-react'

const Pie = ({
  data,
  title,
  chartHeight = 300,
  radius = '70%',
  center = ['50%', '52%'],
}) => {
  const option = {
    title: {
      text: title,
      x: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}</br>积{c}分 占比 ({d}%)',
    },
    legend: {
      bottom: 10,
      left: 'center',
      data: data.map(item => item.team),
      type: 'scroll',
    },
    series: [{
      name: title,
      center,
      type: 'pie',
      radius,
      data: data.map(itemss => ({
        name: itemss.team, value: itemss.tmpScore })).sort((a, b) => a.value - b.value),

      laeblLine: {
        smooth: 0.8,
        length: 4,
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 20,
          shadowColor: 'rgba(0,0,0,0.5)',
        },
        shadowBlur: 30,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
      },
      roseType: 'radius',
    }],
  }
  return <ReactEcharts theme="theme" option={option} notMerge style={{ height: chartHeight }}></ReactEcharts>
}

export default Pie
