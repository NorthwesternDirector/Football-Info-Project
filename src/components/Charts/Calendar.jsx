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
  flag,
}) => {
  let series = []
  let formatter = ''
  switch (flag) {
    case 'bodyBuilding':
      series = [
        {
          name: '💪',
          type: 'scatter',
          coordinateSystem: 'calendar',
          data,
          symbolSize (val) {
              return val[1] / 5;
          },
          itemStyle: {
              color: '#FFC125',
              borderColor: '#FFF',
          },
        },
        {
          name: '⚽️',
          type: 'scatter',
          coordinateSystem: 'calendar',
          data,
          symbolSize (val) {
              return val[2] / 5;
          },
          itemStyle: {
              color: '#7EC0EE',
              borderColor: '#FFF',
          },
        },
        {
          name: '🏃',
          type: 'scatter',
          coordinateSystem: 'calendar',
          data,
          symbolSize (val) {
              return val[3] / 5;
          },
          itemStyle: {
              color: '#008B45',
              borderColor: '#FFF',
          },
        },
      ]
      formatter = params => `<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 16px;padding-bottom: 3px;margin-bottom: 3px">${params.value[0]}</div><span style="color:#FFC125;">●</span> 💪: ${params.value[1]} min<br /><span style="color:#7EC0EE;">●</span> ⚽️: ${params.value[2]} min<br /><span style="color:#008B45;">●</span> 🏃: ${params.value[3]} min`
      break;
    case 'internShip':
      series = [
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
      ]
      break;
    case 'walkingSteps':
      series = [
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
      ]
      formatter = params => `<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 16px;padding-bottom: 3px;margin-bottom: 3px">${params.value[0]}</div><span style="color:#9966ff;">●</span> ${params.value[1]} 步`
      break;
    default:
      break;
  }

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
      backgroundColor: 'rgba(245, 245, 245, 0.8)',
      borderWidth: 1,
      borderColor: '#ccc',
      textStyle: {
        color: '#333',
      },
      formatter: formatter || '',
    },
    legend: {
      top: '50',
      left: '10',
      data: ['步数', 'Top 10', 'commit', '💪', '⚽️', '🏃'],
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
    series,
};

  return <ReactEcharts option={option} style={{ height: chartHeight }}></ReactEcharts>
}

export default Calendar
