import React, { useEffect, useMemo } from 'react'
import { Card, Row, Col, Tag, Statistic } from 'antd'
import { connect } from 'dva'
import ReactEcharts from 'echarts-for-react'
import liquidfill from 'echarts-liquidfill'
import 'echarts/map/js/china';
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
    const subtext = `信息来自国家卫生健康委员会官方网站 (http://www.nhc.gov.cn) , 数据更新时间: ${data.slice(-1)[0].updateTime} 09:00`
    const option = {
      title: {
        top: 0,
        text: title,
        subtext,
        sublink: 'http://www.nhc.gov.cn',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
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
      legend: {
        data: ['新增死亡', '新增治愈', '新增确诊', '新增疑似', '累计死亡', '累计治愈', '现有确诊', '现有疑似', '追踪密切接触者', '解除观察', '尚在医学观察者'],
        top: 50,
        type: 'scroll',
        selected: {
          追踪密切接触者: false,
          尚在医学观察者: false,
        },
      },
      xAxis: {
          type: 'category',
          data: data.map(item => item.date.slice(5)),
          offset: xoffset,
      },
      yAxis: [{
        type: 'value',
        scale: true,
        name: '人数/个(低)',
      }, {
        type: 'value',
        scale: true,
        name: '人数/个(高)',
      }],
      series: [{
        name: '新增确诊',
        data: data.map(item => item.newConfirmedCase),
        type: 'bar',
        color: '#8f5558',
        yAxisIndex: 0,
        stack: 1,
      }, {
        name: '新增死亡',
        data: data.map(item => item.newDeath),
        type: 'bar',
        color: '#e2e7c4',
        yAxisIndex: 0,
        stack: 1,
      }, {
        name: '新增治愈',
        data: data.map(item => item.newCuredCase),
        type: 'bar',
        color: '#cd703f',
        yAxisIndex: 0,
        stack: 1,
      }, {
        name: '新增疑似',
        data: data.map(item => item.newSuspectedCase),
        type: 'bar',
        color: '#e0b654',
        yAxisIndex: 0,
        stack: 1,
      }, {
        name: '现有确诊',
        data: data.map(item => item.totalConfirmedCase),
        type: 'line',
        smooth: true,
        color: '#8f5558',
        yAxisIndex: 1,
      }, {
        name: '累计死亡',
        data: data.map(item => item.totalDeath),
        type: 'line',
        smooth: true,
        color: '#e2e7c4',
        yAxisIndex: 1,
      }, {
        name: '累计治愈',
        data: data.map(item => item.totalCuredCase),
        type: 'line',
        smooth: true,
        color: '#cd703f',
        yAxisIndex: 1,
      }, {
        name: '现有疑似',
        data: data.map(item => item.totalSuspectedCase),
        type: 'line',
        smooth: true,
        color: '#e0b654',
        yAxisIndex: 1,
      }, {
        name: '追踪密切接触者',
        data: data.map(item => item.touch),
        type: 'line',
        smooth: true,
        color: '#CFCFCF',
        yAxisIndex: 1,
      }, {
        name: '尚在医学观察者',
        data: data.map(item => item.watch),
        type: 'line',
        smooth: true,
        color: '#9C9C9C',
        yAxisIndex: 1,
      },
      ],
      grid: {
        left: '50',
        top: '120',
        right: '60',
      },
    }
    return <ReactEcharts theme="theme" option={option} style={{ height: chartHeight }}></ReactEcharts>
  }
  // #endregion

  // #region 新冠肺炎地图
  const VirusMap = ({
    chartHeight = 400,
  }) => {
    const option = {
      title: {
          subtext: '全国确诊人数分布',
          left: 'center',
      },
      tooltip: {
          trigger: 'item',
      },
      visualMap: {
          min: 0,
          max: 2500,
          left: 'left',
          top: '80',
          text: ['高', '低'], // 文本，默认为数值文本
          calculable: true,
      },
      series: [
        {
          name: '确诊人数',
          type: 'map',
          mapType: 'china',
          roam: false,
          label: {
              normal: {
                  show: true,
              },
              emphasis: {
                  show: true,
              },
          },
          layoutCenter: ['52%', '50%'],
          layoutSize: chartHeight,
          data: [
            { name: '湖北', value: 67466 },
            { name: '广东', value: 1350 },
            { name: '河南', value: 1272 },
            { name: '浙江', value: 1213 },
            { name: '湖南', value: 1018 },
            { name: '安徽', value: 990 },
            { name: '江西', value: 935 },
            { name: '山东', value: 758 },
            { name: '江苏', value: 631 },
            { name: '重庆', value: 575 },
            { name: '四川', value: 538 },
            { name: '黑龙江', value: 480 },
            { name: '北京', value: 399 },
            { name: '上海', value: 335 },
            { name: '河北', value: 311 },
            { name: '福建', value: 293 },
            { name: '广西', value: 252 },
            { name: '陕西', value: 245 },
            { name: '云南', value: 174 },
            { name: '海南', value: 168 },
            { name: '贵州', value: 146 },
            { name: '天津', value: 135 },
            { name: '山西', value: 132 },
            { name: '辽宁', value: 121 },
            { name: '吉林', value: 93 },
            { name: '甘肃', value: 91 },
            { name: '香港', value: 79 },
            { name: '新疆', value: 76 },
            { name: '内蒙古', value: 75 },
            { name: '宁夏', value: 71 },
            { name: '台湾', value: 30 },
            { name: '青海', value: 18 },
            { name: '澳门', value: 10 },
            { name: '西藏', value: 1 },
          ],
        },
      ],
    }
    return <ReactEcharts option={option} style={{ height: chartHeight }}></ReactEcharts>
  }
  // #endregion
  // #region 论文
  const PaperBar = ({
    data,
    chartHeight = 300,
    xoffset = 0,
    title,
  }) => {
    const option = {
      title: {
        top: 0,
        text: title,
        subtext: '2020.02.09-至今',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        textStyle: {
            color: '#000',
        },
      },
      legend: {
        data: ['字数累计(SSS)', '字数累计(MMT)', '重复率(SSS)', '重复率(MMT)'],
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
        name: '字数/个',
      }, {
        type: 'value',
        scale: true,
        name: '重复率/%',
      }],
      series: [{
        name: '字数累计(SSS)',
        data: data.map(item => item.wordNumberS),
        type: 'line',
        smooth: true,
        symbolSize: 5,
        yAxisIndex: 0,
        itemStyle: {
          color: '#6495ED',
        },
        lineStyle: {
          color: '#6495ED',
          width: 4,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 15,
          shadowOffsetY: 20,
        },
      }, {
        name: '字数累计(MMT)',
        data: data.map(item => item.wordNumberT),
        type: 'line',
        smooth: true,
        symbolSize: 5,
        yAxisIndex: 0,
        itemStyle: {
          color: '#FF69B4',
        },
        lineStyle: {
          color: '#FF69B4',
          width: 4,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 15,
          shadowOffsetY: 20,
        },
      }, {
        name: '重复率(SSS)',
        data: data.map(item => (item.repetitonS !== 100 ? item.repetitonS : null)),
        type: 'line',
        smooth: true,
        symbolSize: 5,
        yAxisIndex: 1,
        itemStyle: {
          color: '#FFA500',
        },
        lineStyle: {
          color: '#FFA500',
          width: 2,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 15,
          shadowOffsetY: 20,
        },
      }, {
        name: '重复率(MMT)',
        data: data.map(item => (item.repetitonT !== 100 ? item.repetitonT : null)),
        type: 'line',
        smooth: true,
        symbolSize: 5,
        yAxisIndex: 1,
        color: '#FF4500',
        lineStyle: {
          color: '#FF4500',
          width: 2,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 15,
          shadowOffsetY: 20,
        },
      },
    ],
      grid: {
        left: '90',
        top: '90',
        right: '70',
      },
    }
    return <ReactEcharts option={option} style={{ height: chartHeight }}></ReactEcharts>
  }

  const LiquidPaperBar = ({
    value,
    center,
    color,
    chartHeight = 200,
  }) => {
    const data = [value, value, value, value, value];
    const option = {
      backgroundColor: '#fff',
      graphic: [{
          type: 'group',
          left: 'center',
          bottom: 10,
      }],
      series: [{
        type: 'liquidFill',
        radius: '70%',
        // shape: 'path://M367.855,428.202c-3.674-1.385-7.452-1.966-11.146-1.794c0.659-2.922,0.844-5.85,0.58-8.719 c-0.937-10.407-7.663-19.864-18.063-23.834c-10.697-4.043-22.298-1.168-29.902,6.403c3.015,0.026,6.074,0.594,9.035,1.728 c13.626,5.151,20.465,20.379,15.32,34.004c-1.905,5.02-5.177,9.115-9.22,12.05c-6.951,4.992-16.19,6.536-24.777,3.271 c-13.625-5.137-20.471-20.371-15.32-34.004c0.673-1.768,1.523-3.423,2.526-4.992h-0.014c0,0,0,0,0,0.014 c4.386-6.853,8.145-14.279,11.146-22.187c23.294-61.505-7.689-130.278-69.215-153.579c-61.532-23.293-130.279,7.69-153.579,69.202 c-6.371,16.785-8.679,34.097-7.426,50.901c0.026,0.554,0.079,1.121,0.132,1.688c4.973,57.107,41.767,109.148,98.945,130.793 c58.162,22.008,121.303,6.529,162.839-34.465c7.103-6.893,17.826-9.444,27.679-5.719c11.858,4.491,18.565,16.6,16.719,28.643 c4.438-3.126,8.033-7.564,10.117-13.045C389.751,449.992,382.411,433.709,367.855,428.202z',
        center,
        data,
        color,
        itemStyle: {
          shadowBlur: 10,
        },
        backgroundStyle: {
          borderColor: color[1],
          borderWidth: 1,
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowBlur: 20,
          color: '#fff',
        },
        label: {
          normal: {
            formatter: ` ${(value * 100).toFixed(2)}%`,
            textStyle: {
              fontSize: 20,
              color: color[1],
            },
          },
        },
        outline: {
          show: false,
        },
      }],
    };
    return <ReactEcharts option={option} style={{ height: chartHeight }}></ReactEcharts>
  }
  // #endregion

  return (
    <>
    <Row gutter={24}>
      <Col span={24} style={{ marginBottom: 24 }}>
        <Card style={{ height: 680 }}>
        {virus && <Row>
          <Col span={16}>
            <VirusBar data={virus.data} chartHeight={600} title="新型冠状病毒肺炎疫情通报"/>
            <div style={{ fontSize: 12, color: '#999', marginTop: -20, textAlign: 'center' }}>
              <p>说明：1. 所有“新增数据”参考(低)坐标轴；“累计（现有）数据”参考(高)坐标轴</p>
              <p>2. 为了更加直观展示确诊人数，图中仅展示现有确诊人数不展示累计确诊人数，计算关系为：‘累计确诊’ = ‘现有确诊’ + ‘累计治愈’ + ‘累计死亡’</p>
            </div>
          </Col>
          <Col span={8}>
            <Row span={24} style={{ marginTop: 68 }}>
              <Col span={5} offset={2}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: 24, margin: '10px 0px 0px', color: '#3A5FCD' }}>{virus.data.slice(-1)[0].totalDeath}</p>
                  <Tag style={{ margin: 0 }}>死亡人数</Tag>
                  <p>昨日 <span style={{ color: '#3A5FCD' }}>+{virus.data.slice(-1)[0].newDeath}</span></p>
                </div>
              </Col>
              <Col span={5}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: 24, margin: '10px 0px 0px', color: '#43CD80' }}>{virus.data.slice(-1)[0].totalCuredCase}</p>
                  <Tag style={{ margin: 0 }}>治愈人数</Tag>
                  <p>昨日 <span style={{ color: '#43CD80' }}>+{virus.data.slice(-1)[0].newCuredCase}</span></p>
                </div>
              </Col>
              <Col span={5}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: 24, margin: '10px 0px 0px', color: '#FF7F50' }}>{virus.data.slice(-1)[0].totalConfirmedCase}</p>
                  <Tag style={{ margin: 0 }}>确诊人数</Tag>
                  <p>昨日 <span style={{ color: '#FF7F50' }}>+{virus.data.slice(-1)[0].newConfirmedCase}</span></p>
                </div>
              </Col>
              <Col span={5}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: 24, margin: '10px 0px 0px', color: '#FFB5C5' }}>{virus.data.slice(-1)[0].totalSuspectedCase}</p>
                  <Tag style={{ margin: 0 }}>疑似人数</Tag>
                  <p>昨日 <span style={{ color: '#FFB5C5' }}>+{virus.data.slice(-1)[0].newSuspectedCase}</span></p>
                </div>
              </Col>
              <Col span={24}>
                <VirusMap/>
              </Col>
            </Row>
          </Col>
          </Row>}
        </Card>
      </Col>
      <Col span={24} style={{ marginBottom: 24 }}>
        <Card style={{ height: 550 }}>
          <Row gutter={24}>
            <Col span={18}>
              {paper && <PaperBar data={paper.data} chartHeight={500} title="论文完成情况"></PaperBar>}
            </Col>
            <Col span={6}>
            {paper &&
            <>
              <Row gutter={8} style={{ marginTop: 30 }}>
                <Col span={12}>
                  <Statistic title="MMT" value={paper.data.slice(-1)[0].wordNumberT} suffix="/ 30000" />
                  重复率:--%
                </Col>
                <Col span={12}>
                  <Statistic title="SSS" value={paper.data.slice(-1)[0].wordNumberS} suffix="/ 30000" />
                  {`重复率:${paper.data.slice(-1)[0].repetitonS}%`}
                </Col>
              </Row>
              <LiquidPaperBar
                value={paper.data.slice(-1)[0].wordNumberT / 30000}
                center={['50%', '55%']}
                color={['#8B475D', '#CD6889', '#EEA2AD', '#FFB5C5']}
              />
              <LiquidPaperBar
                value={paper.data.slice(-1)[0].wordNumberS / 30000}
                center={['50%', '45%']}
                color={['#104E8B', '#1874CD', '#1E90FF', '#00BFFF']}
              />
            </>}
            </Col>
          </Row>
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
