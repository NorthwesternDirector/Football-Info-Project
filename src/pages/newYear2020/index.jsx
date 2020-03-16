import React, { useEffect } from 'react'
import { Card, Row, Col, Tag, Statistic } from 'antd'
import { connect } from 'dva'
import ReactEcharts from 'echarts-for-react'
import liquidfill from 'echarts-liquidfill'
import 'echarts/map/js/china';
import Calendar from '../../components/Charts/Calendar'
import SpecialChart from '../../components/Charts/SpecialChart'
import LiquidPaperBar from '../../components/Charts/LiquidBar'
import TimeLineBar from '../../components/Charts/TimeLineBar'
import MapChart from '../../components/Charts/MapChart'


const LearningContent = ({
  times,
  games,
  paper,
  virus,
  virusGlobal,
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
    dispatch({
      type: 'newYear2020/fetchVirusGlobal',
    })
  }, [])
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
  // #endregion

  // #region 全球疫情极坐标系统计图
  const VirusGlobalBar = ({
    data,
    chartHeight = 500,
  }) => {
    const option = {
      angleAxis: {
          type: 'category',
          data: data.map(i => i.country),
      },
      radiusAxis: {
      },
      polar: {
        center: ['50%', '55%'],
        radius: '75%',
      },
      title: {
        top: 0,
        text: '全球疫情统计图',
        subtext: '数据更新时间：2020-03-16 09:00',
        left: 'center',
      },
      series: [{
          type: 'bar',
          data: data.map(i => i.existConfirmedCase),
          coordinateSystem: 'polar',
          name: '现有确诊',
          color: '#8f5558',
          stack: 'a',
      }, {
          type: 'bar',
          data: data.map(i => i.totalDeath),
          coordinateSystem: 'polar',
          name: '累计死亡',
          color: '#e2e7c4',
          stack: 'a',
      }, {
          type: 'bar',
          data: data.map(i => i.totalCuredCase),
          coordinateSystem: 'polar',
          name: '累计治愈',
          color: '#cd703f',
          stack: 'a',
      }],
      legend: {
          show: true,
          data: ['现有确诊', '累计死亡', '累计治愈'],
          top: 50,
      },
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
            <VirusBar data={virus.data} chartHeight={600} title="我国新型冠状病毒肺炎疫情通报"/>
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
                  <p style={{ fontSize: 24, margin: '10px 0px 0px', color: '#FF7F50' }}>
                    {virus.data.slice(-1)[0].totalConfirmedCase + virus.data.slice(-1)[0].totalCuredCase + virus.data.slice(-1)[0].totalDeath}
                  </p>
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
                <MapChart/>
              </Col>
            </Row>
          </Col>
          </Row>}
        </Card>
      </Col>
      <Col span={24} style={{ marginBottom: 24 }}>
        <Card style={{ height: 550 }}>
          {virusGlobal && <VirusGlobalBar data={virusGlobal.data}/>}
        </Card>
      </Col>
      <Col span={24} style={{ marginBottom: 24 }}>
        <Card style={{ height: 550 }}>
          <Row gutter={24}>
            <Col span={18}>
              {paper && <PaperBar data={paper.data} chartHeight={500} title="论文完成情况"/>}
            </Col>
            <Col span={6}>
            {paper &&
            <>
              <Row gutter={8} style={{ marginTop: 30 }}>
                <Col span={12}>
                  <Statistic title="MMT" value={paper.data.slice(-1)[0].wordNumberT} suffix="/ 30000" />
                  {`重复率:${paper.data.slice(-1)[0].repetitonT === 100 ? '--' : paper.data.slice(-1)[0].repetitonT}%`}
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
          <TimeLineBar data={times.data} chartHeight={600} title="2020时间统计" />
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
  virusGlobal: newYear2020.virusGlobal,
  loading: loading.effects['newYear2020/fetchTimes'],
}))(LearningContent)
