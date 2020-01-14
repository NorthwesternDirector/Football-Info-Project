import React from 'react'
import { Skeleton } from 'antd'
import echarts from 'echarts'
import ReactEchartsCore from 'echarts-for-react/lib/core'
import 'echarts-wordcloud'

const WordCloud = ({ data, onEvents, chartHeight = 300, title }) => {
  if (!data) return <Skeleton title={false} />
  const formatData = data
  if (formatData.length === 0) return <Skeleton title={false} />
  const option = {
    tooltip: {
      show: false,
      trigger: 'item',
      formatter(params) {
        return `${params.name}:${params.value}`
      },
    },
    title: {
      top: 0,
      text: title,
      subtext: '2019.11.03-2020.1.21',
      left: 'center',
    },
    series: [
      {
        type: 'wordCloud',
        shape: 'circle',
        maskImage: null,
        left: 'center',
        top: 50,
        width: '95%',
        height: '85%',
        right: null,
        bottom: null,
        sizeRange: [12, 60],
        rotationRange: [0, 0],
        rotationStep: 0,
        gridSize: 8,
        drawOutOfBound: false,
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color() {
              return `rgb(${[
                Math.round(Math.random() * 200),
                Math.round(Math.random() * 200),
                Math.round(Math.random() * 200),
              ].join(',')})`
            },
          },
          emphasis: {
            shadowBlur: 2,
            shadowColor: '#333',
          },
        },
        // Data is an array. Each array item must have name and value property.
        data: formatData,
      },
    ],
  }
  return (
    <ReactEchartsCore
      theme="theme"
      echarts={echarts}
      option={option}
      notMerge
      onEvents={onEvents}
      style={{ height: chartHeight }}
    />
  )
}

export default WordCloud
