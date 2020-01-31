import React from 'react'
import ReactEcharts from 'echarts-for-react'
import echarts from 'echarts'


const SpecialChart = ({
  title,
  subtext,
  games,
  chartHeight,
}) => {
  const option = {
    grid: {
      top: 100,
      containLabebl: true,
    },
    title: {
      top: 10,
      text: title,
      subtext,
      left: 'center',
      textStyle: {
          color: '#EEE',
      },
    },
    backgroundColor: '#0f375f',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'shadow',
      },
      backgroundColor: 'rgba(245, 245, 245, 0.8)',
      borderWidth: 1,
      borderColor: '#ccc',
      textStyle: {
        color: '#333',
      },
      formatter: params => `<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 16px;padding-bottom: 3px;margin-bottom: 3px">${params[0].name}</div><span style="color:#14c8d4;">●</span>${params[6].seriesName}: ${params[6].value} ${params[6].value > 0 ? '😄' : '😣'}</br><span style="color:#FFFF00;">●</span> ${params[7].seriesName}: ${params[7].value} ${params[7].value > 0 ? '😄' : '😣'}</br><span style="color:#CD69C9;">●</span> ${params[8].seriesName}: ${params[8].value} ${params[8].value > 0 ? '😄' : '😣'}`,
    },
    legend: {
      top: '60',
      data: ['本轮奖池', '本轮我输出', '本轮爸输出', '本轮妈输出', '本轮我抢红包', '本轮爸抢红包', '本轮妈抢红包', '我', '爸', '妈'],
      textStyle: {
          color: '#ccc',
      },
    },
    xAxis: {
      data: games ? games.data.map(e => e.round) : [],
      axisLine: {
          lineStyle: {
              color: '#ccc',
          },
      },
    },
    yAxis: {
      name: '💰',
      type: 'value',
      splitLine: { show: false },
      axisLine: {
          lineStyle: {
              color: '#ccc',
          },
      },
    },
    series: [{
      name: '本轮我输出',
      type: 'bar',
      barWidth: 7,
      itemStyle: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                  { offset: 0, color: '#14c8d4' },
                  { offset: 1, color: '#43eec6' },
              ],
          ),
      },
      z: 12,
      data: games ? games.data.map(e => e.me) : [],
    }, {
      name: '本轮爸输出',
      type: 'bar',
      barWidth: 14,
      itemStyle: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                  { offset: 0, color: '#FFFF00' },
                  { offset: 1, color: '#FFC125' },
              ],
          ),
      },
      z: 11,
      data: games ? games.data.map(e => e.father) : [],
    }, {
      name: '本轮妈输出',
      type: 'bar',
      barWidth: 21,
      itemStyle: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                  { offset: 0, color: '#CD69C9' },
                  { offset: 1, color: '#FFBBFF' },
              ],
          ),
      },
      data: games ? games.data.map(e => e.mother) : [],
    }, {
      name: '本轮我抢红包',
      type: 'bar',
      barWidth: 7,
      itemStyle: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#14c8d4' },
              { offset: 1, color: '#43eec6' },
            ],
          ),
      },
      z: 12,
      data: games ? games.data.map(e => e.meL) : [],
  }, {
      name: '本轮爸抢红包',
      type: 'bar',
      barWidth: 14,
      itemStyle: {
        barBorderRadius: 5,
        color: new echarts.graphic.LinearGradient(
          0, 0, 0, 1,
          [
            { offset: 0, color: '#FFFF00' },
            { offset: 1, color: '#FFC125' },
          ],
        ),
      },
      z: 11,
      data: games ? games.data.map(e => e.fatherL) : [],
  }, {
      name: '本轮妈抢红包',
      type: 'bar',
      barWidth: 21,
      itemStyle: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                  { offset: 0, color: '#CD69C9' },
                  { offset: 1, color: '#FFBBFF' },
              ],
          ),
      },

      data: games ? games.data.map(e => e.motherL) : [],
  }, {
    name: '我',
    type: 'line',
    smooth: true,
    // showAllSymbol: true,
    symbol: 'emptyCircle',
    symbolSize: 10,
    itemStyle: {
        barBorderRadius: 5,
        color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
                { offset: 0, color: '#14c8d4' },
                { offset: 1, color: '#43eec6' },
            ],
        ),
    },
    z: 12,
    data: games ? games.data.map(e => e.meT) : [],
}, {
    name: '爸',
    type: 'line',
    smooth: true,
    showAllSymbol: true,
    symbol: 'emptyCircle',
    symbolSize: 10,
    itemStyle: {
        barBorderRadius: 5,
        color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
                { offset: 0, color: '#FFFF00' },
                { offset: 1, color: '#FFC125' },
            ],
        ),
    },
    z: 11,
    data: games ? games.data.map(e => e.fatherT) : [],
}, {
    name: '妈',
    type: 'line',
    smooth: true,
    showAllSymbol: true,
    symbol: 'emptyCircle',
    symbolSize: 10,
    itemStyle: {
        barBorderRadius: 5,
        color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
                { offset: 0, color: '#CD69C9' },
                { offset: 1, color: '#FFBBFF' },
            ],
        ),
    },

    data: games ? games.data.map(e => e.motherT) : [],
}, {
        name: '本轮奖池',
        type: 'bar',
        barGap: '-100%',
        barWidth: 20,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    { offset: 0, color: 'rgba(20,200,212,0.5)' },
                    { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
                    { offset: 1, color: 'rgba(20,200,212,0)' },
                ],
            ),
        },
        z: -12,
        data: games ? games.data.map(e => (Math.abs(e.me) + Math.abs(e.father) + Math.abs(e.mother))) : [],
    }, {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
            color: '#0f375f',
        },
        label: {
          show: false,
        },
        symbolRepeat: true,
        symbolSize: [32, 4],
        symbolMargin: 1,
        z: -10,
        data: games ? games.data.map(e => (Math.abs(e.me) + Math.abs(e.father) + Math.abs(e.mother))) : [],
    }],
  };
  return <ReactEcharts theme="theme" option={option} style={{ height: chartHeight }}></ReactEcharts>
}

export default React.memo(SpecialChart, (pre, next) => JSON.stringify(pre) === JSON.stringify(next))
