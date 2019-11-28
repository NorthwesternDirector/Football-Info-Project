import React from 'react'
import ReactEcharts from 'echarts-for-react'

const Pie = ({
  data,
  title,
  chartHeight = 300,
  radius = '70%',
}) => {
  const option = {
    title: {
      text: title,
      x: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      bottom: 10,
      left: 'center',
      data: data.map(item => item.team),
      type: 'scroll',
    },
    series: [{
      name: title,
      center: ['50%', '52%'],
      type: 'pie',
      radius,
      data: data.map(itemss => ({ name: itemss.team, value: itemss.tmpScore })),
      minShowLabbelAngle: 10,
      selectedMode: 'single',
      laeblLine: {
        smooth: true,
        length: 4,
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 20,
          shadowColor: 'rgba(0,0,0,0.5)',
        },
      },
    }],
  }
  return <ReactEcharts theme="theme" option={option} notMerge style={{ height: chartHeight }}></ReactEcharts>
}

export default Pie
