import React, { useEffect, useMemo } from 'react'
import { Card, Row, Col } from 'antd'
import { connect } from 'dva'
import ReactEcharts from 'echarts-for-react'
import moment from 'moment'
import Calendar from '../../components/Charts/Calendar'

const LearningContent = ({
  times,
  dispatch,
}) => {
  useEffect(() => {
    dispatch({
      type: 'newYear2020/fetchTimes',
    })
  }, [])
  const selectminute = useMemo(() =>
    new Array(1120).fill(1).map((val, index, array) =>
      moment('2019-11-29 01:00').subtract(array.length - index, 'minute').format('HH:mm'),
    ), [])

  const Bar = ({
    data,
    chartHeight = 600,
    xoffset = 0,
    title,
  }) => {
    const option = {
      title: {
        top: 0,
        text: title,
        subtext: '2020.01.01-2020.12.31',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
        formatter: '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 16px;padding-bottom: 3px;margin-bottom: 3px">{b0}</div><span style="color:#9400D3;">●</span> {a0}: {c0}<br /><span style="color:#0000CD;">●</span> {a1}: {c1}<br /><span style="color:#B0E0E6;">●</span> {a2}: {c2}h<br /><span style="color:#006400;">●</span> {a3}: {c3}<br /><span style="color:#006699;">●</span> {a4}: {c4}h<br /><span style="color:#FFD700;">●</span> {a5}: {c5}h',
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        textStyle: {
            color: '#000',
        },
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { readOnly: true },
          saveAsImage: {},
          restore: {},
        },
      },
      dataZoom: [
        {
          type: 'slider',
          show: true,
          xAxisIndex: [0],
          start: 40,
          end: 100,
        },
        {
          type: 'slider',
          show: true,
          yAxisIndex: [0],
          left: '93%',
          start: 0,
          end: 100,
        },
        {
          type: 'inside',
          xAxisIndex: [0],
          start: 40,
          end: 100,
        },
        {
          type: 'inside',
          yAxisIndex: [0],
          start: 0,
          end: 100,
        },
      ],
      legend: {
        data: ['上班时间', '下班时间', '入睡时间', '工作时长', '睡眠时长', '深睡时长'],
        top: 50,
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
        name: '时长/h',
        max: 12,
        min: 0,
      }],
      series: [{
        name: '上班时间',
        data: data && data[0].list.map(
          item => ({ name: item.date, value: item.workTime[0].slice(0, 5) })),
        type: 'line',
        smooth: true,
        color: '#9400D3',
        markLine: {
          silent: true,
          data: [
              { yAxis: '09:00' },
          ],
        },
      }, {
        name: '下班时间',
        data: data && data[0].list.map(
          item => ({ name: item.date, value: item.workTime[1].slice(0, 5) })),
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
        data: data && data[0].list.map(item => ({ name: item.date, value: item.workTime[2] })),
        type: 'bar',
        color: '#B0E0E6',
        yAxisIndex: 1,
      },
      {
        name: '入睡时间',
        data: data && data[0].list.map(item => ({ name: item.date, value: item.sleepTime[0] })),
        type: 'line',
        smooth: true,
        color: '#006400',
      },
      {
        name: '睡眠时长',
        data: data && data[0].list.map(item => ({ name: item.date, value: item.sleepTime[1] })),
        type: 'bar',
        color: '#006699',
        yAxisIndex: 1,
      },
      {
        name: '深睡时长',
        data: data && data[0].list.map(item => ({ name: item.date, value: item.sleepTime[2] })),
        type: 'bar',
        color: '#FFD700',
        yAxisIndex: 1,
      },
      ],
      grid: {
        left: '90',
        top: '90',
        right: '90',
      },
    }

    return <ReactEcharts theme="theme" option={option} style={{ height: chartHeight }}></ReactEcharts>
  }
  return (
    <>
    <Row gutter={24}>
      <Col span={24} style={{ marginBottom: 24 }}>
        <Card style={{ marginTop: 5 }}>
        <Bar data={times.data} chartHeight={600} title="2020时间统计"></Bar>
        </Card>
      </Col>
      <Col span={24}>
        <Card >
          <Calendar
            data={times.data && times.data[0].list.map(i => [i.date, i.walkingSteps])}
            title="Walking Steps"
            subtext="2020.01.01-2020.12.31"
            range={['2020-01-01', '2020-12-31']}
            left={50}
            cellSize={24}
            flag="walkingSteps"
          >
          </Calendar>
        </Card>
      </Col>
      <Col span={24}>
        <Card >
          <Calendar
            data={times.data && times.data[0].list.map(i => [i.date, ...i.physicalExercise])}
            title="Physical Exercise"
            subtext="2020.01.01-2020.12.31"
            range={['2020-01-01', '2020-12-31']}
            left={50}
            cellSize={24}
            flag="bodyBuilding"
          >
          </Calendar>
        </Card>
      </Col>
    </Row>
    </>
  )
}

export default connect(({ newYear2020, loading }) => ({
  times: newYear2020.times,
  loading: loading.effects['newYear2020/fetchTimes'],
}))(LearningContent)
