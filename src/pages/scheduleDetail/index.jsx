import React, { useEffect, useMemo } from 'react'
import ReactEcharts from 'echarts-for-react'
import moment from 'moment'

import { Avatar, Card } from 'antd'
import { connect } from 'dva'


const ScheduleInfo = props => {
  const { dispatch, schedule, loading } = props

  useEffect(() => {
    dispatch({
      type: 'scheduleDetail/fetchScheduleDetail',
    })
  }, [])

  const Line = ({
    title,
    data,
    category,
    chartHeight,
  }) => {
    const option = {
      title: {
        text: title,
        x: 'center',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      toolbox: {
        show: true,
        right: 15,
        top: 'top',
        feature: {
          magicType: {
            type: ['stack', 'tiled'],
          },
        },
      },
      legend: {
        data: data.map(item => item.team),
        top: 50,
        x: 'right',
        orient: 'vertical',
      },
      dataZoom: [
        {
          show: true,
          realtime: true,
        },
      ],
      grid: {
        top: 40,
        left: 20,
        right: 100,
        bottom: 50,
        containLabebl: true,
      },
      xAxis: {
        type: 'category',
        data: category,

      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
      },
      series: data.map(item => ({
        name: item.team,
        type: 'line',
        smooth: true,
        data: item.list.map(subitem => ([subitem.data.slice(0, 10), subitem.totalScore])),
      })),

    }
    return <ReactEcharts theme="theme" option={option} style={{ height: chartHeight }}></ReactEcharts>
  }

  const { data } = schedule

  const selectDate = useMemo(() => {
    const selectArr = data ? data[0].timeRange.split(',') : ['2019-08-17', '2019-11-24']
    const arrayLength = moment(selectArr[1]).diff(moment(selectArr[0]), 'days')

    return new Array(arrayLength).fill(1).map((val, index, array) =>
      moment(selectArr[1]).subtract(array.length - index, 'days').format('YYYY-MM-DD'),
    )
  }, [data])
  selectDate.push('2019-11-24')

  return (
    <>
      {data ? <Card title="西班牙甲级联赛" loading={loading}>
        {data.map(item =>
          <Avatar shape="square" size="large" src={item.logo} key={item.team}></Avatar>,
        )}
        <Line title="积分情况" data={data} category={selectDate} chartHeight={400}></Line>
      </Card> : null}


    </>
  )
}

export default connect(({ scheduleDetail, loading }) => ({
  schedule: scheduleDetail.schedule,
  loading: loading.effects['scheduleDetail/fetchScheduleDetail'],
}))(ScheduleInfo)
