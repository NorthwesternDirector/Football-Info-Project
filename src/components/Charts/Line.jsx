import React from 'react'
import ReactEcharts from 'echarts-for-react'

const Line = ({
  title,
  data,
  category,
  chartHeight,
}) => {
  const option = {
    title: {
      text: title,
      x: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    toolbox: {
      show: true,
      right: 15,
      top: 'top',
      feature: {
        magicType: {
          type: ['stack', 'tiled'],
        },
      },
    },
    legend: {
      data: data.map(item => item.team),
      top: 50,
      x: 'right',
      orient: 'vertical',
    },
    dataZoom: [
      {
        show: true,
        realtime: true,
      },
    ],
    grid: {
      top: 40,
      left: 20,
      right: 100,
      bottom: 50,
      containLabebl: true,
    },
    xAxis: {
      type: 'category',
      data: category,

    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
    },
    series: data.map(item => ({
      name: item.team,
      type: 'line',
      smooth: true,
      data: item.list.map(subitem => ([subitem.data.slice(0, 10), subitem.totalScore])),
    })),

  }
  return <ReactEcharts theme="theme" option={option} style={{ height: chartHeight }}></ReactEcharts>
}

export default React.memo(Line, (pre, next) => JSON.stringify(pre) === JSON.stringify(next))
