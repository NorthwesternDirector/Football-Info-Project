import React, { useEffect, useMemo } from 'react'
import { Card, Row, Col, Skeleton } from 'antd'
import { connect } from 'dva'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'
import ReactEchartsCore from 'echarts-for-react/lib/core'
import 'echarts-wordcloud'

const LearningContent = ({
  loading,
  learnInfo,
  learnWords,
  dispatch,
}) => {
  useEffect(() => {
    dispatch({
      type: 'learningContent/fetchLearningContent',
    })
  }, [])

  useEffect(() => {
    dispatch({
      type: 'learningContent/fetchLearningWords',
    })
  }, [])

  const Sunburst = ({ data, chartHeight }) => {
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

  const WordCloud = ({ data, onEvents, chartHeight = 300 }) => {
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

      series: [
        {
          type: 'wordCloud',
          shape: 'circle',
          maskImage: null,
          left: 'center',
          top: 'center',
          width: '95%',
          height: '95%',
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


  return (
    <>
    <Row gutter={24}>
      <Col span={12}>
        <Card title="在xiaomi实习阳光灿烂的日子">
          <Sunburst data={learnInfo.data} chartHeight={600}></Sunburst>
        </Card>
        </Col>
        <Col span={12}>
        <Card title="在xiaomi实习阳光灿烂的日子">
        <WordCloud data={learnWords.data}></WordCloud>
        </Card>
      </Col>
    </Row>
    </>
  )
}

export default connect(({ learningContent, loading }) => ({
  learnInfo: learningContent.learnInfo,
  learnWords: learningContent.learnWords,
  loading: loading.effects['learningContent/fetchLearningContent'],
}))(LearningContent)
