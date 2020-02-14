import React, { useEffect, useMemo } from 'react'
import { Card, Row, Col } from 'antd'
import { connect } from 'dva'
import ReactEcharts from 'echarts-for-react'
import moment from 'moment'
import Calendar from '../../components/Charts/Calendar'
import SpecialChart from '../../components/Charts/SpecialChart'


const LearningContent = ({
  times,
  games,
  paper,
  virus,
  dispatch,
}) => {
  useEffect(() => {
    dispatch({
      type: 'newYear2020/fetchTimes',
    })
    dispatch({
      type: 'newYear2020/fetchGames',
    })
    dispatch({
      type: 'newYear2020/fetchPaper',
    })
    dispatch({
      type: 'newYear2020/fetchVirus',
    })
  }, [])
  const selectminute = useMemo(() =>
    new Array(1060).fill(1).map((val, index, array) =>
      moment('2019-11-29 01:00').subtract(array.length - index, 'minute').format('HH:mm'),
    ), [])

  // #region 2020折线图
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
  // #endregion

  // #region 新冠肺炎
  const VirusBar = ({
    data,
    chartHeight = 600,
    xoffset = 0,
    title,
  }) => {
    const option = {
      title: {
        top: 0,
        text: title,
        subtext: '信息来自国家卫生健康委员会官方网站 (http://www.nhc.gov.cn)',
        sublink: 'http://www.nhc.gov.cn',
        left: 'center',
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { readOnly: true },
          saveAsImage: {},
          restore: {},
        },
      },
      legend: {
        data: ['新增死亡', '新增治愈', '新增确诊', '新增疑似', '累计死亡', '累计治愈', '累计确诊', '累计疑似', '追踪密切接触者', '解除观察', '尚在医学观察者'],
        top: 50,
      },
      xAxis: {
          type: 'category',
          data: data.map(item => item.date.slice(5)),
          offset: xoffset,
      },
      yAxis: [{
        type: 'value',
        scale: true,
        name: '人数/个(低1)',
      }, {
        type: 'value',
        scale: true,
        name: '人数/个(中2)',
      }, {
        type: 'value',
        scale: true,
        name: '人数/个(高3)',
        offset: 80,
      }],
      series: [{
        name: '新增确诊',
        data: data.map(item => item.newConfirmedCase),
        type: 'bar',
        color: '#FF7F50',
        yAxisIndex: 1,
      }, {
        name: '新增死亡',
        data: data.map(item => item.newDeath),
        type: 'bar',
        color: '#3A5FCD',
        yAxisIndex: 0,
      }, {
        name: '新增治愈',
        data: data.map(item => item.newCuredCase),
        type: 'bar',
        color: '#43CD80',
        yAxisIndex: 0,
      }, {
        name: '新增疑似',
        data: data.map(item => item.newSuspectedCase),
        type: 'bar',
        color: '#FFB5C5',
        yAxisIndex: 1,
      }, {
        name: '累计确诊',
        data: data.map(item => item.totalConfirmedCase),
        type: 'line',
        smooth: true,
        color: '#FF7F50',
        yAxisIndex: 2,
      }, {
        name: '累计死亡',
        data: data.map(item => item.totalDeath),
        type: 'line',
        smooth: true,
        color: '#3A5FCD',
        yAxisIndex: 1,
      }, {
        name: '累计治愈',
        data: data.map(item => item.totalCuredCase),
        type: 'line',
        smooth: true,
        color: '#43CD80',
        yAxisIndex: 1,
      }, {
        name: '累计疑似',
        data: data.map(item => item.totalSuspectedCase),
        type: 'line',
        smooth: true,
        color: '#FFB5C5',
        yAxisIndex: 2,
      }, {
        name: '追踪密切接触者',
        data: data.map(item => item.touch),
        type: 'line',
        smooth: true,
        color: '#CFCFCF',
        yAxisIndex: 2,
      }, {
        name: '尚在医学观察者',
        data: data.map(item => item.watch),
        type: 'line',
        smooth: true,
        color: '#9C9C9C',
        yAxisIndex: 2,
      },
      ],
      grid: {
        left: '90',
        top: '90',
        right: '150',
      },
    }

    return <ReactEcharts theme="theme" option={option} style={{ height: chartHeight }}></ReactEcharts>
  }
  // #endregion

  return (
    <>
    <Row gutter={24}>
      <Col span={24} style={{ marginBottom: 24 }}>
        <Card style={{ height: 650 }}>
          {virus && <VirusBar data={virus.data} chartHeight={600} title="新型冠状病毒肺炎疫情通报"></VirusBar>}
          <div style={{ fontSize: 12, color: '#999', marginTop: -20, textAlign: 'center' }}>
            <p>说明：‘新增死亡’、‘新增治愈’参考坐标轴低1；‘新增确诊’、‘新增疑似’、‘累计死亡’、‘累计治愈’参考坐标轴中2；‘累计确诊‘、‘累计疑似‘、‘追踪密切接触者‘、‘尚在医学观察者‘参考坐标轴高3</p>
          </div>

        </Card>
      </Col>
      <Col span={24} style={{ marginBottom: 24 }}>
        <Card style={{ marginTop: 5 }}>
          <Bar data={times.data} chartHeight={600} title="2020时间统计"></Bar>
        </Card>
      </Col>
      <Col span={24} style={{ marginBottom: 24 }}>
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
      <Col span={24} style={{ marginBottom: 24 }}>
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
      <Col span={24} style={{ marginBottom: 24 }}>
        <Card style={{ height: 450 }}>
          <SpecialChart games={games} chartHeight={400} title="快乐game" subtext="2020.01.29"/>
        </Card>
      </Col>
    </Row>
    </>
  )
}

export default connect(({ newYear2020, loading }) => ({
  times: newYear2020.times,
  games: newYear2020.games,
  paper: newYear2020.paper,
  virus: newYear2020.virus,
  loading: loading.effects['newYear2020/fetchTimes'],
}))(LearningContent)
