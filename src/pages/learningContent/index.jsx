import React, { useEffect, useMemo } from 'react'
import { Card, Row, Col } from 'antd'
import { connect } from 'dva'
import ReactEcharts from 'echarts-for-react'
import moment from 'moment'
import Sunburst from '../../components/Charts/Sunburst'
import WordCloud from '../../components/Charts/WordCloud'

const LearningContent = ({
  loading,
  learnInfo,
  learnWords,
  learnTimes,
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

  useEffect(() => {
    dispatch({
      type: 'learningContent/fetchLearningTimes',
    })
  }, [])
  const selectminute = useMemo(() =>
    new Array(960).fill(1).map((val, index, array) =>
      moment('2019-11-28 23:00').subtract(array.length - index, 'minute').format('HH:mm'),
    ), [])

  const inRangeminute = useMemo(() =>
  new Array(20).fill(1).map((val, index, array) =>
    moment('2019-11-28 09:10').subtract(array.length - index, 'minute').format('HH:mm'),
  ), [])
  console.log(inRangeminute)


  const Bar = ({
    data,
    chartHeight = 600,
    xoffset = 0,
  }) => {
    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 16px;padding-bottom: 3px;margin-bottom: 3px">{b0}</div>{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}h',
      },
      legend: {
        data: ['上班时间', '下班时间', '工作时长'],
      },
      xAxis: {
          type: 'category',
          data: data && data[0].list.map(item => item.date),
          offset: xoffset,
      },
      yAxis: [{
          type: 'category',
          data: selectminute,
          name: '时间',
      }, {
        type: 'value',
        scale: true,
        name: '工作时长/h',
        max: 12,
        min: 0,
      }],
      series: [{
        name: '上班时间',
        data: data && data[0].list.map(item => ({ name: item.date, value: item.time[0].slice(0, 5) })),
        type: 'line',
        smooth: true,
        color: '#ffde33',
        markLine: {
          silent: true,
          data: [
              { yAxis: '09:00' },
          ],
      },
      }, {
        name: '下班时间',
        data: data && data[0].list.map(item => ({ name: item.date, value: item.time[1].slice(0, 5) })),
        type: 'line',
        smooth: true,
        color: '#0000CD',
        markLine: {
          silent: true,
          data: [
              { yAxis: '18:30' },
              { yAxis: '21:00' },
          ],
        },
      },
      {
        name: '工作时长',
        data: data && data[0].list.map(item => ({ name: item.date, value: item.time[2] })),
        type: 'bar',
        color: '#006699',
        yAxisIndex: 1,
      },
      ],
    }

    return <ReactEcharts theme="theme" option={option} style={{ height: chartHeight }}></ReactEcharts>
  }
  return (
    <>
    <Row gutter={24}>
      <Col span={12}>
        <Card title="在实习阳光灿烂的日子">
          <Sunburst data={learnInfo.data} chartHeight={570}></Sunburst>
        </Card>
        </Col>
        <Col span={12}>
        <Card title="在实习阳光灿烂的日子">
        <WordCloud data={learnWords.data} chartHeight={195}></WordCloud>
        </Card>
        <Card title="在实习阳光灿烂的日子" style={{ marginTop: 5 }}>
        <Bar data={learnTimes.data} chartHeight={265} ></Bar>
        </Card>
      </Col>
    </Row>
    </>
  )
}

export default connect(({ learningContent, loading }) => ({
  learnInfo: learningContent.learnInfo,
  learnWords: learningContent.learnWords,
  learnTimes: learningContent.learnTimes,
  loading: loading.effects['learningContent/fetchLearningContent'],
}))(LearningContent)
