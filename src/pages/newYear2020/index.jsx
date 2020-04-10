import React, { useEffect } from 'react'
import { Card, Row, Col, Tag, Statistic } from 'antd'
import { connect } from 'dva'
import ReactEcharts from 'echarts-for-react'
import liquidfill from 'echarts-liquidfill'
import 'echarts/map/js/china';
import echarts from 'echarts'
import Calendar from '../../components/Charts/Calendar'
import SpecialChart from '../../components/Charts/SpecialChart'
import LiquidPaperBar from '../../components/Charts/LiquidBar'
import TimeLineBar from '../../components/Charts/TimeLineBar'
import MapChart from '../../components/Charts/MapChart'
import MapChartUSA from '../../components/Charts/MapChartUSA'


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
        lineStyle: {
          width: 3,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 15,
          shadowOffsetY: 20,
        },
      }, {
        name: '累计死亡',
        data: data.map(item => item.totalDeath),
        type: 'line',
        smooth: true,
        color: '#e2e7c4',
        yAxisIndex: 1,
        lineStyle: {
          width: 3,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 15,
          shadowOffsetY: 20,
        },
      }, {
        name: '累计治愈',
        data: data.map(item => item.totalCuredCase),
        type: 'line',
        smooth: true,
        color: '#cd703f',
        yAxisIndex: 1,
        lineStyle: {
          width: 3,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 15,
          shadowOffsetY: 20,
        },
      }, {
        name: '现有疑似',
        data: data.map(item => item.totalSuspectedCase),
        type: 'line',
        smooth: true,
        color: '#e0b654',
        yAxisIndex: 1,
        lineStyle: {
          width: 3,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 15,
          shadowOffsetY: 20,
        },
      }, {
        name: '追踪密切接触者',
        data: data.map(item => item.touch),
        type: 'line',
        smooth: true,
        color: '#CFCFCF',
        yAxisIndex: 1,
        lineStyle: {
          width: 3,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 15,
          shadowOffsetY: 20,
        },
      }, {
        name: '尚在医学观察者',
        data: data.map(item => item.watch),
        type: 'line',
        smooth: true,
        color: '#9C9C9C',
        yAxisIndex: 1,
        lineStyle: {
          width: 3,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 15,
          shadowOffsetY: 20,
        },
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

  const VirusBarUSA = ({
    data,
    chartHeight = 550,
    xoffset = 0,
    title = '🇺🇸美国疫情发展',
  }) => {
    const subtext = `数据更新时间: ${data[0].data[0].slice(-1)[0].date} 09:00`
    const option = {
      title: {
        top: 0,
        text: title,
        subtext,
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
        data: ['现有确诊', '累计确诊', '累计死亡', '累计治愈'],
        top: 50,
        type: 'scroll',
      },
      xAxis: {
          type: 'category',
          data: data[0].data[0].map(item => item.date.slice(-5)),
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
        name: '现有确诊',
        data: data[0].data[0].map(item => item.existConfirmedCase),
        type: 'line',
        smooth: true,
        color: '#f09b8c',
        symbol: 'none',
        yAxisIndex: 1,
        lineStyle: {
          width: 3,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 15,
          shadowOffsetY: 20,
        },
      }, {
        name: '累计确诊',
        data: data[0].data[0].map(item => item.totalConfirmCase),
        type: 'line',
        smooth: true,
        color: '#d6433c',
        symbol: 'none',
        yAxisIndex: 1,
        lineStyle: {
          width: 3,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 15,
          shadowOffsetY: 20,
        },
      }, {
        name: '累计死亡',
        data: data[0].data[0].map(item => item.totalDeath),
        type: 'line',
        smooth: true,
        color: '#4e5054',
        symbol: 'none',
        yAxisIndex: 0,
        lineStyle: {
          width: 3,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 15,
          shadowOffsetY: 20,
        },
      }, {
        name: '累计治愈',
        data: data[0].data[0].map(item => item.totalCuredCase),
        type: 'line',
        smooth: true,
        color: '#4facb3',
        symbol: 'none',
        yAxisIndex: 0,
        lineStyle: {
          width: 3,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 15,
          shadowOffsetY: 20,
        },
      },
      ],
      grid: {
        left: '40',
        top: '100',
        right: '80',
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

  // #region 全球疫情统计图
  const VirusGlobalBar = ({
    data,
    chartHeight = 430,
  }) => {
    const hh = data && data[0].data.map(i =>
      i.slice(-1)[0]).sort((a, b) => b.existConfirmedCase - a.existConfirmedCase,
    ).slice(1)
    const option = {
      angleAxis: {
          type: 'category',
          data: hh.map(i => i.country),
      },
      radiusAxis: {
      },
      polar: {
        center: ['50%', '50%'],
        radius: '70%',
      },
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        textStyle: {
            color: '#000',
        },
      },
      series: [{
          type: 'bar',
          data: hh.map(i => i.existConfirmedCase),
          coordinateSystem: 'polar',
          name: '现有确诊',
          color: '#8f5558',
          stack: 'a',
      }, {
          type: 'bar',
          data: hh.map(i => i.totalDeath),
          coordinateSystem: 'polar',
          name: '累计死亡',
          color: '#e2e7c4',
          stack: 'a',
      }, {
          type: 'bar',
          data: hh.map(i => i.totalCuredCase),
          coordinateSystem: 'polar',
          name: '累计治愈',
          color: '#cd703f',
          stack: 'a',
      }],
      legend: {
          show: true,
          data: ['现有确诊', '累计死亡', '累计治愈'],
          top: 10,
      },
    };
    return <ReactEcharts option={option} style={{ height: chartHeight }}></ReactEcharts>
  }

  const VirusGlobalBarC = ({
    data,
    chartHeight = 400,
  }) => {
    const orderData = data[1].data.map(i =>
      i.slice(-1)[0]).sort((a, b) => a.totalDeath / a.totalConfirmCase - b.totalDeath / b.totalConfirmCase,
    )
    const option = {
      title: {
        text: '病死率%',
        subtext: '基准值(圆周)为10%',
        left: -5,
        top: 65,
      },
      angleAxis: {
        max: 10,
        show: false,
      },
      radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
          fontSize: 12,
          margin: 14,
          interval: 0,
          showMinLabel: true,
          showMaxLabel: true,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        data: orderData.map(i => i.continent),
        z: 10,
    },
      polar: {
        center: ['50%', '50%'],
        radius: '90%',
      },
      tooltip: {
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        textStyle: {
            color: '#000',
        },
      },
      series: orderData.map((item, index) => {
        const dataSeries = [null, null, null, null, null, null]
        dataSeries[index] = (item.totalDeath / item.totalConfirmCase * 100).toFixed(4)
        return index !== 5 ? {
          type: 'bar',
          data: dataSeries,
          roundCap: true,
          coordinateSystem: 'polar',
          stack: 'a',
          name: item.continent,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0.5, 0.5, 0.5, 1,
                [
                  { offset: 0, color: item.color1 },
                  { offset: 1, color: item.color2 },
                ],
            ) },
          },
        } : {
          type: 'bar',
          roundCap: true,
          showBackground: true, // 这里设置背景最后一层才生效
          backgroundStyle: {
            color: '#EEE',
          },
          data: dataSeries,
          coordinateSystem: 'polar',
          name: item.continent,
          stack: 'a',
          label: {
            show: true,
          },
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0.5, 0.5, 0.5, 1,
                [
                  { offset: 0, color: item.color1 },
                  { offset: 1, color: item.color2 },
                ],
            ) },
          },
        }
      }),
    };
    return <ReactEcharts option={option} style={{ height: chartHeight }}></ReactEcharts>
  }

  const VirusGlobalLineContinent = ({
    data,
    title,
    xoffset = 0,
    chartHeight = 400,
  }) => {
    const option = {
      title: {
        top: 0,
        text: title,
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
        data: ['亚洲', '欧洲', '北美洲', '南美洲', '非洲', '大洋洲'],
        top: 20,
        type: 'scroll',
      },
      xAxis: {
          type: 'category',
          data: data[1].data[0].map(item => item.date.slice(-5)),
          offset: xoffset,
      },
      yAxis: {
        type: 'value',
        scale: true,
        name: '现有确诊人数/个',
      },
      series: [{
        name: '亚洲',
        data: data[1].data[0].map(item => item.existConfirmedCase),
        type: 'line',
        color: '#6495ED',
        symbol: 'none',
        smooth: true,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0.5, 0.5, 0.5, 1,
              [
                { offset: 0, color: data[1].data[0][0].color1 },
                { offset: 1, color: data[1].data[0][0].color2 },
              ],
          ) },
        },
        lineStyle: {
          width: 3,
        },
      }, {
        name: '欧洲',
        data: data[1].data[1].map(item => item.existConfirmedCase),
        type: 'line',
        color: '#FF69B4',
        symbol: 'none',
        smooth: true,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0.5, 0.5, 0.5, 1,
              [
                { offset: 0, color: data[1].data[1][0].color1 },
                { offset: 1, color: data[1].data[1][0].color2 },
              ],
          ) },
        },
        lineStyle: {
          width: 3,
        },
      }, {
        name: '北美洲',
        data: data[1].data[2].map(item => item.existConfirmedCase),
        type: 'line',
        color: '#FD08AB',
        symbol: 'none',
        smooth: true,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0.5, 0.5, 0.5, 1,
              [
                { offset: 0, color: data[1].data[2][0].color1 },
                { offset: 1, color: data[1].data[2][0].color2 },
              ],
          ) },
        },
        lineStyle: {
          width: 3,
        },
      }, {
        name: '南美洲',
        data: data[1].data[3].map(item => item.existConfirmedCase),
        type: 'line',
        color: '#3CB371',
        symbol: 'none',
        smooth: true,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0.5, 0.5, 0.5, 1,
              [
                { offset: 0, color: data[1].data[3][0].color1 },
                { offset: 1, color: data[1].data[3][0].color2 },
              ],
          ) },
        },
        lineStyle: {
          width: 3,
        },
      }, {
        name: '非洲',
        data: data[1].data[4].map(item => item.existConfirmedCase),
        type: 'line',
        smooth: true,
        color: '#A9A9A9',
        symbol: 'none',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0.5, 0.5, 0.5, 1,
              [
                { offset: 0, color: data[1].data[4][0].color1 },
                { offset: 1, color: data[1].data[4][0].color2 },
              ],
          ) },
        },
        lineStyle: {
          width: 3,
        },
      }, {
        name: '大洋洲',
        data: data[1].data[5].map(item => item.existConfirmedCase),
        type: 'line',
        smooth: true,
        color: '#FFD700',
        symbol: 'none',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0.5, 0.5, 0.5, 1,
              [
                { offset: 0, color: data[1].data[5][0].color1 },
                { offset: 1, color: data[1].data[5][0].color2 },
              ],
          ) },
        },
        lineStyle: {
          width: 3,
        },
      },
      ],
      grid: {
        left: '70',
        top: '100',
        right: '0',
      },
    }
    return <ReactEcharts theme="theme" option={option} style={{ height: chartHeight }}></ReactEcharts>
  }

  const VirusGlobalLineCity = ({
    data,
    title,
    xoffset = 0,
    chartHeight = 450,
  }) => {
    const randomColor = () => {
      const map = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' }
      let color = '#'
      for (let i = 0; i < 6; i += 1) {
        let num = Math.floor(Math.random() * 16)
        num = num > 9 ? map[num] : num
        color += num
      }
      return color
    }
    const option = {
      title: {
        top: 0,
        text: title,
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
        data: ['意大利', '美国', '加拿大', '西班牙', '德国', '伊朗', '法国', '韩国', '瑞士', '英国', '比利时', '土耳其', '荷兰'],
        top: 10,
        selected: {
          美国: false,
        },
        type: 'scroll',
      },
      xAxis: {
          type: 'category',
          data: data[0].data[1].map(item => item.date.slice(-5)),
          offset: xoffset,
      },
      yAxis: {
        type: 'value',
        scale: true,
        name: '现有确诊人数/个',
      },
      series: data[0].data.slice(1).map(i => ({
        name: i[0].country,
        data: i.map(item => item.existConfirmedCase),
        type: 'line',
        color: randomColor(),
        symbol: 'none',
        smooth: true,
        lineStyle: {
          width: 3,
        },
      })),
      grid: {
        left: '70',
        top: '80',
        right: '0',
      },
    }
    return <ReactEcharts theme="theme" option={option} style={{ height: chartHeight }}></ReactEcharts>
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
          <Row gutter={24}>
            <Col span={24}>
              <p style={{ fontSize: 19, fontWeight: 'bolder', color: '#333', textAlign: 'center', marginBottom: 5 }}>国际疫情发展情况</p>
              {virusGlobal && <p style={{ fontSize: 12, color: '#bbb', textAlign: 'center', marginBottom: 5 }}>数据更新时间：{virusGlobal.data[2].data.slice(-1)[0].date} 09:00</p>}
            </Col>
            <Col span={6}>
            {virusGlobal && <VirusGlobalBarC data={virusGlobal.data}/>}
            </Col>
            <Col span={10}>
              { virusGlobal && ((i = virusGlobal.data[2].data.slice(-1)[0]) =>
                <>
                  <Row gutter={2} style={{ marginBottom: '15', fontSize: 24, textAlign: 'center' }}>
                    <Col span={5} offset={4} style={{ color: '' }}>{i.totalConfirmCase}</Col>
                    <Col span={5} style={{ color: '#8f5558' }}>{i.existConfirmedCase}</Col>
                    <Col span={5} style={{ color: '#cd703f' }}>{i.totalCuredCase}</Col>
                    <Col span={5} style={{ color: '#e2e7c4' }}>{i.totalDeath}</Col>
                  </Row>
                  <Row gutter={2} style={{ marginBottom: '15', fontWeight: 'bolder' }}>
                    <Col span={5} offset={4} style={{ textAlign: 'center', color: '' }}>累计确诊</Col>
                    <Col span={5} style={{ textAlign: 'center', color: '#8f5558' }}>现有确诊</Col>
                    <Col span={5} style={{ textAlign: 'center', color: '#cd703f' }}>累计治愈</Col>
                    <Col span={5} style={{ textAlign: 'center', color: '#e2e7c4' }}>累计死亡</Col>
                  </Row>
                  <Row gutter={2} style={{ marginBottom: '15', fontSize: 12, textAlign: 'center' }}>
                    <Col span={5} offset={4} style={{ color: '' }}>昨日+{i.totalConfirmCase - virusGlobal.data[2].data.slice(-2, -1)[0].totalConfirmCase}</Col>
                    <Col span={5} style={{ color: '#8f5558' }}>昨日+{i.existConfirmedCase - virusGlobal.data[2].data.slice(-2, -1)[0].existConfirmedCase}</Col>
                    <Col span={5} style={{ color: '#cd703f' }}>昨日+{i.totalCuredCase - virusGlobal.data[2].data.slice(-2, -1)[0].totalCuredCase}</Col>
                    <Col span={5} style={{ color: '#e2e7c4' }}>昨日+{i.totalDeath - virusGlobal.data[2].data.slice(-2, -1)[0].totalDeath}</Col>
                  </Row>
                </>)()
              }
              <Row style={{ lineHeight: '5px', color: '#FFF' }} >.</Row>
              <Row style={{ lineHeight: '5px', color: '#FFF' }} >.</Row>
              {virusGlobal && virusGlobal.data[1].data.map(i =>
                i.slice(-1)[0]).sort((a, b) => b.existConfirmedCase - a.existConfirmedCase).map(i =>
                <>
                  <Row gutter={2} style={{ backgroundColor: '#f7f7f7', borderRadius: '20px', paddingBottom: '5', lineHeight: '40px' }}>
                    <Col span={4} style={{ textAlign: 'center' }}>{i.continent}</Col>
                    <Col span={5} style={{ textAlign: 'center' }}>{i.totalConfirmCase}</Col>
                    <Col span={5} style={{ textAlign: 'center' }}>{i.existConfirmedCase}</Col>
                    <Col span={5} style={{ textAlign: 'center' }}>{i.totalCuredCase}</Col>
                    <Col span={5} style={{ textAlign: 'center' }}>{i.totalDeath}</Col>
                  </Row>
                  <Row style={{ lineHeight: '5px', color: '#FFF' }} >.</Row>
                  <Row style={{ lineHeight: '5px', color: '#FFF' }} >.</Row>
                </>,
              )}
              <div style={{ fontSize: 12, color: '#999', marginTop: 5, textAlign: 'center' }}>
              <p>说明：国际疫情数据总和不包含我国数据，亚洲疫情数据总和包含我国数据</p>
            </div>
            </Col>
            <Col span={8}>
              {virusGlobal && <VirusGlobalLineContinent data={virusGlobal.data}/>}
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={24} style={{ marginBottom: 24 }}>
      <Card style={{ height: 600 }} >
        <Row gutter={2}>
          <Col span={16}>
            {virusGlobal && <VirusBarUSA data={virusGlobal.data}/>}
            <div style={{ fontSize: 12, color: '#999', marginTop: -20, textAlign: 'center' }}>
              <p>说明：1. ”死亡、治愈数据“参考(低)坐标轴；“确诊数据”参考(高)坐标轴</p>
            </div>
          </Col>
          <Col span={8}>
            <MapChartUSA />
          </Col>
        </Row>
      </Card>
      </Col>
      <Col span={24} style={{ marginBottom: 24 }}>
        <Card style={{ height: 550 }}>
          <Row>
          <p style={{ fontSize: 19, fontWeight: 'bolder', color: '#333', textAlign: 'center', marginBottom: 5 }}>国外疫情 TOP N 国家</p>
              {virusGlobal && <p style={{ fontSize: 12, color: '#bbb', textAlign: 'center', marginBottom: 5 }}>数据更新时间：{virusGlobal.data[2].data.slice(-1)[0].date} 09:00</p>}
          </Row>
          <Row gutter={24}>
            <Col span={8}>
              {virusGlobal && <VirusGlobalBar data={virusGlobal.data}/>}
              <div style={{ fontSize: 12, color: '#999', marginTop: -20, textAlign: 'center' }}>
              <p>说明：柱状体总高度即代表‘累计确诊’值，‘累计确诊’= ‘现有确诊’ + ‘累计治愈’ + ‘累计死亡’；美国数据不在此图中展示</p>
            </div>
            </Col>
            <Col span={16}>
              {virusGlobal && <VirusGlobalLineCity data={virusGlobal.data}/>}
            </Col>

          </Row>
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
