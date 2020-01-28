import React from 'react'
import ReactEcharts from 'echarts-for-react'

const Calendar = ({
  data,
  chartHeight = 280,
  title,
  subtext = '2019.11.03-2020.1.21',
  range = ['2019-11-01', '2020-01-27'],
  left = 100,
  cellSize = 25,
}) => {
  const option = {
    title: {
      top: 0,
      text: title,
      subtext,
      left: 'center',
      textStyle: {
          color: '#333',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '50',
      left: '10',
      data: ['步数', 'Top 10', 'commit'],
      textStyle: {
          color: '#333',
      },
    },
    calendar: [{
      top: 100,
      left,
      range,
      cellSize,
      splitLine: {
          show: true,
          lineStyle: {
              color: '#FFF',
              width: 3,
              type: 'solid',
          },
      },
      yearLabel: {
          formatter: '{start}-{end}',
          textStyle: {
              color: '#bbb',
          },
      },
      itemStyle: {
          color: '#eee',
          borderWidth: 3,
          borderColor: '#FFF',
      },
    }],
    series: [
      {
        name: '步数',
        type: 'scatter',
        coordinateSystem: 'calendar',
        data,
        symbolSize (val) {
            return val[1] / 500;
        },
        itemStyle: {
            color: '#9966ff',
            borderColor: '#FFF',
        },
      },
      {
        name: 'commit',
        type: 'effectScatter',
        coordinateSystem: 'calendar',
        data: data && data.map(item => [item[0], item[2]]),
        symbolSize (val) {
          return val[1] * 3;
        },
        itemStyle: {
            color: '#66ccff',
            borderColor: '#ffff33',
        },
      },
      {
        name: 'Top 10',
        type: 'effectScatter',
        coordinateSystem: 'calendar',
        data: data && data.sort((a, b) => b[1] - a[1]).slice(0, 10),
        symbolSize (val) {
            return val[1] / 800;
        },
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke',
        },
        hoverAnimation: true,
        itemStyle: {
            color: '#cc66ff',
            shadowBlur: 10,
            shadowColor: '#000',
            borderColor: '#6600cc',
        },
        zlevel: 1,
      },
    ],
};

  return <ReactEcharts option={option} style={{ height: chartHeight }}></ReactEcharts>
}

export default Calendar
